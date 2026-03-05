import { useState, useEffect } from "react";

export default function CriticPanel({ imageUrl }) {
  const [analysis, setAnalysis] = useState("");

  useEffect(() => {
    if (!imageUrl) return;

    (async () => {
      setAnalysis("Analyzing...");
      try {
        const res = await fetch(imageUrl);
        const blob = await res.blob();
        const base64 = await new Promise((r) => {
          const reader = new FileReader();
          reader.onloadend = () => r(reader.result);
          reader.readAsDataURL(blob);
        });

        const response = await window.puter.ai.chat(
          "check the image and review it in exactly 1 short sentence. and give AI-driven feedback (“too cluttered”, “try minimal style”) and also give me 2 simple prompts to genearate best results after analysing  and the message need to be small and perfect and use some format to display the message  ",
          base64,
          { model: "gpt-5-nano" }
        );
        
        const feedback = typeof response === "string" ? response : (response?.message?.content || "No feedback.");
        setAnalysis(feedback.replace(/[\r\n]+/g, ' ').trim());
      } catch {
        setAnalysis("Analysis failed.");
      }
    })();
  }, [imageUrl]);

  return (
    <div className="p-4 bg-black rounded-2xl border-2 border-gray-500">
      <h3 className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-2"> AI collaborator For Designers </h3>
        <p className="text-slate-200 text-sm leading-snug font-medium"> {analysis || "Generate Design to Analyse  "}
      </p>
    </div>
  );
}