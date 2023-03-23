export default function Layout({children}){
    return(
        <div className="flex h-screen bg-blue-500 overflow-y-auto">
          <div className="w-full h-full flex flex-col md:flex-row md:overflow-y-auto">
             <div className="flex flex-col justify-evenly flex-shrink-0 bg-black md:w-[50%] w-[100%] h-screen">
                 Images
             </div>
             <div className=" flex-shrink-0 flex flex-col items center justify-evenly bg-white md:w-[50%] w-[100%] h-screen">
               <div className="text-center py-10">
                   {children}
               </div>
             </div>
          </div>
          
          
        </div>
    )
}