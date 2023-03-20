import Image from "next/image"
export default function Layout2({children}){
    return(
        <div className='flex flex-row h-screen w-screen'>
          <div className='flex flex-col basis-1/18 rounded-r-myrad h-full w-full bg-black'>

          </div>
          <div className='flex flex-col h-full w-full'>
            <div className="flex flex-row basis-1/18 w-full h-1/5 justify-between">
               <div className="title px-8">
                <h1 className="text-black text-4xl font-bold py-5">QikHire</h1>
               </div>
               <div className="basis-1/18 py-6 px-6">
                  <div className="rounded-full py-4 px-4 bg-red-400">

                  </div>
               </div>

            </div>
            <div className="flex flex-row basis-1/18 bg-slate-300 w-1/5 mx-8 my-4">
              <div className="basis-1/6 bg-red-300">

              </div>
              <div>
                  <h1>search</h1>
              </div>
            </div>
            
             <div className=" w-full h-full">
                {children}
             </div>
          </div>
        </div>
    )
}