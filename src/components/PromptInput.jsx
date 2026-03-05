import { useState } from "react";

export default function PromptInput({ setImageUrl, setIsLoading, isLoading }) {

  const [prompt, setPrompt] = useState("");

  const handleGenerate = async () => {
    if (!prompt || isLoading) return; 
    setIsLoading(true);
    
    try {
      const imageElement = await window.puter.ai.txt2img(prompt);
      if (imageElement && imageElement.src) {
        setImageUrl(imageElement.src); 
      } else {
        throw new Error("Generation Failed");
      }
    } catch (error) {
      console.error("Generation Error:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-black rounded-3xl p-10 border-2 border-gray-500 ">
      <div className="flex flex-col gap-5">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder=" Please Enter Prompt to MuseAi to create Text-to-design generation... "
          className="w-full h-20 p-5 rounded-2xl bg-slate-50 outline-none focus:bg-white resize-none text-black placeholder:text-slate-400 font-medium transition-all"/>
        <button 
          onClick={handleGenerate} 
          className="w-full py-5 bg-white hover:bg-blue-600 text-black hover:text-white font-bold rounded-2xl active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Thinking..." : "Generate Design"}
        </button>
      </div>
    </div>
  );
}