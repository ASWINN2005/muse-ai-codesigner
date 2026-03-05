export default function DesignCanvas({ imageUrl, isLoading }) {
  return (
    <div className="flex-1 bg-black  border-2 border-gray-500 rounded-3xl flex items-center justify-center p-15 ">
      <div className="w-full max-w-sm aspect-square bg-slate-100  rounded-3xl border border-black flex flex-col items-center justify-center relative ">
        
        {isLoading ? (
          <div className="flex flex-col items-center gap-4 ">
            <div className="w-20 h-20  bg-slate-50border border-slate-100 border-t-indigo-600 rounded-full animate-spin"></div>
            <p className="text-slate-900 font-bold text-xl">Generating...</p>
          </div>
        ) : imageUrl ? (
          <img src={imageUrl} className="absolute inset-1 w-full h-full scale-120 rounded-3xl " />
        ) : (
          <p className=" text-slate-400 font-bold uppercase text-[10px] scale-200 ">Enter prompt to generate</p>
        )}
        
      </div>
    </div>
  );
}