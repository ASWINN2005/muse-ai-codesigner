import { useState } from "react";

export default function PromptInput({ setImageUrl, setIsLoading, isLoading }) {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = async () => {
    if (!prompt || isLoading) return; 
    
    setIsLoading(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin, 
        },
        body: JSON.stringify({
          model: "sourceful/riverflow-v2-pro",
          messages: [
            {
              role: "user",
              content: prompt, 
            },
          ],
          modalities: ["image"],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "API request failed");
      }

      const data = await response.json();

      if (data.choices?.[0]?.message?.images?.[0]) {
        const url = data.choices[0].message.images[0].image_url.url;
        setImageUrl(url); 
      } else {
        console.warn("No image found in response:", data);
        alert("The AI generated a text response instead of an image. Please try again.");
      }

    } catch (error) {
      console.error("Generation Error:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black rounded-3xl p-10 border-2 border-gray-500 shadow-2xl">
      <div className="flex flex-col gap-5">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter Prompt to MuseAi to create..."
          className="w-full h-20 p-5 rounded-2xl bg-slate-50 outline-none focus:bg-white resize-none text-black placeholder:text-slate-400 font-medium transition-all"
        />
        
        <button 
          onClick={handleGenerate} className="w-full py-5 bg-white hover:bg-blue-600 text-black hover:text-white font-bold rounded-2xl active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Thinking..." : "Generate Design"}
        </button>
      </div>
    </div>
  );
}