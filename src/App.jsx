import { useState } from "react";
import Navbar from "./components/Navbar";
import PromptInput from "./components/PromptInput";
import DesignCanvas from "./components/DesignCanvas";
import CriticPanel from "./components/CriticPanel";

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // Added this state so CriticPanel can see what you typed
  const [prompt, setPrompt] = useState(""); 

  return (
    /* The grid layout you built is excellent for a dashboard! */
    <div className="grid grid-cols-12 grid-rows-12 gap-6 p-6 bg-[#1E1F20] min-h-screen">

      <div className="col-span-12 row-span-1">
        <Navbar />
      </div>

      <div className="col-span-6 row-span-4 col-start-1 row-start-2">
        {/* Pass setPrompt here so we can store the user's input */}
        <PromptInput 
          setImageUrl={setImageUrl} 
          setIsLoading={setIsLoading} 
          setPrompt={setPrompt} 
        />
      </div>

      <div className="col-span-6 row-span-10 col-start-7 row-start-2">
        <DesignCanvas imageUrl={imageUrl} isLoading={isLoading} />
      </div>

      <div className="col-span-6 row-span-5 col-start-1 row-start-6">
        {/* Now 'prompt' is defined and won't cause an error */}
        <CriticPanel 
          imageUrl={imageUrl} 
          setImageUrl={setImageUrl} 
          prompt={prompt} 
        /> 
      </div>

    </div>
  );
}

export default App;
