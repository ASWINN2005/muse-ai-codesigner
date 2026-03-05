import { useState, useEffect } from "react";

export default function CriticPanel({ imageUrl }) {
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
        "Critique this image design in exactly 1 short sentence. and suggest changes ",
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
        
        runAnalysis(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 bg-[#1E1F20] rounded-2xl border-2 border-[#333537] flex flex-col gap-3 shadow-xl">
      <div className="flex justify-between items-center">
        <h3 className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">
          AI collaborator 
        </h3>
        <label className="cursor-pointer  bg-black   hover:bg-indigo-700 text-white text-[10px] uppercase font-bold py-2 px-4 rounded-xl  transition-all active:scale-95">
          Upload local
          <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
        </label>
      </div>
      <p className="text-slate-200 text-sm leading-snug font-medium">{analysis || "Generate or Upload to Analyse"}</p>
    </div>
  );
}