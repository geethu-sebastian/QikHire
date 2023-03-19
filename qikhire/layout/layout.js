export default function Layout({children}){
    return(
        <div className="flex h-screen bg-blue-500">
          <div className="m-auto bg-black w-full h-full grid lg:grid-cols-2">
             <div>
                 Images
             </div>
             <div className=" flex flex-col justify-evenly bg-white">
               <div className="text-center py-10">
                   {children}
               </div>
             </div>
          </div>
          
          
        </div>
    )
}