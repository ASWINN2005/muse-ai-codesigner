import { useState, useEffect } from "react";

export default function CriticPanel({ imageUrl, setImageUrl }) {
  const [analysis, setAnalysis] = useState("");
  const runAnalysis = async (source) => {
    setAnalysis("Analyzing...");
    try {
      let b64;
      if (source.startsWith('data:')) {
        b64 = source;
      } else {
        const res = await fetch(source);
        const blob = await res.blob();
        b64 = await new Promise(r => {
          const reader = new FileReader();
          reader.onloadend = () => r(reader.result);
          reader.readAsDataURL(blob);
        });
      }
      const feedback = await window.puter.ai.chat(
        " you are An AI collaborator for designers that helps in generating  concepts, logos, or layout suggestions from prompts.analyse the image i gave and  give AI-driven feedback such as (“too cluttered”, “try minimal style”) and some other feedbacks for the image limit the response in 3 sentences and analyse the ",
        b64,
        { model: "gpt-4o" }
      );
      const text = typeof feedback === "string" ? feedback : (feedback?.message?.content || "");
      setAnalysis(text.replace(/[\r\n]+/g, ' ').trim());
    } catch {
      setAnalysis("Analysis failed.");
    }
  };
  useEffect(() => {
    if (imageUrl) {
      const analyze = async () => {
        await runAnalysis(imageUrl);
      };
      analyze();
    }
  }, [imageUrl]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result); 
        runAnalysis(reader.result);
      };
      reader.readAsDataURL(file);
    }};
  return (
    <div className="p-4  rounded-2xl  bg-black  border-2 border-gray-500  flex flex-col gap-3 shadow-xl">
      <div className="flex justify-between items-center">
        <h3 className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">
          AI collaborator for designers 
        </h3>
        <label className="cursor-pointer bg-black hover:bg-indigo-700 text-white text-[10px] uppercase font-bold py-2 px-4 rounded-xl transition-all active:scale-95">
            Upload local
          <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
        </label>
      </div>
      <p className="text-slate-200 text-sm leading-snug font-medium">{analysis || "Generated image will be Analysed Automatically or Upload your Design to Analyse "}</p>
    </div>
  );
}