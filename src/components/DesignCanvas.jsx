export default function DesignCanvas({ imageUrl, isLoading }) {

 const handleDownload = () => { 
        if (!imageUrl) return; 
            const link = document.createElement("a");  
            link.href = imageUrl;
            link.download = "museai-design.png"; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); 
        }; 

  return (
    <div className="flex-1 bg-black  border-2 border-gray-500 rounded-3xl flex items-center justify-center p-10 ">
      <div className="w-full max-w-sm aspect-square bg-slate-100  rounded-3xl border border-black flex flex-col items-center justify-center relative scale-75 ">
            {imageUrl && !isLoading && (
            <button onClick={handleDownload} className="absolute -bottom-1/12  z-50 scale-115 bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] uppercase font-bold py-2 px-4 rounded-xl  transition-all active:scale-95"> Download </button>
            )}
        {isLoading ? (
          <div className="flex flex-col items-center gap-4 ">
            <p className="text-slate-900 font-bold text-xl ">Generating...</p>
          </div>
        ) : imageUrl ? (
          <img src={imageUrl} className="absolute inset-1 w-full h-full scale-130 border-5 border-white rounded-3xl " />
          
        ) : (
          <p className=" text-slate-400 font-bold  uppercase text-[10px] scale-150  ">Enter prompt to generate Design</p>
        )}
 
        
          </div>
    </div>
  );
}



