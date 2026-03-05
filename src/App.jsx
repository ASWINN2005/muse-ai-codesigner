import { useState } from "react";

import Navbar from "./components/Navbar";
import PromptInput from "./components/PromptInput";
import DesignCanvas from "./components/DesignCanvas";
import CriticPanel from "./components/CriticPanel";

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    
<div className="grid grid-cols-12 grid-rows-12 gap-6 p-6 bg-[#1E1F20]">

    <div className="col-span-12 row-span-1"><Navbar/></div>
    <div className="col-span-6 row-span-4 col-start-1 row-start-2"><PromptInput setImageUrl={setImageUrl} setIsLoading={setIsLoading}/></div>
    <div className="col-span-6 row-span-10 col-start-7 row-start-2"><DesignCanvas imageUrl={imageUrl} isLoading={isLoading}/></div>
    <div className="col-span-6 row-span-5 col-start-1 row-start-6"><CriticPanel imageUrl={imageUrl} setImageUrl={setImageUrl} prompt={prompt}/> </div>

</div>
    
  );
}

export default App;