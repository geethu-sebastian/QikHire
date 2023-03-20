import Image from "next/image"
export default function Layout2({children}){
    return(
        <div className='flex flex-row h-screen w-screen'>
          <div className='flex flex-col basis-1/18 rounded-r-myrad h-full w-full bg-black'>

          </div>
          <div className=' flex flex-col h-full w-full'>
            <div className=" flex flex-row basis-1/20 w-full justify-between px-4 pt-4">
               <div className=" flex title px-4 py-4 basis-1/5 text-start">
                <h1 className="text-black text-4xl font-bold ">QikHire</h1>
               </div>
               <div className=" basis-1/18 px-2 py-3 ">
                  <Image src="profilef.svg" height={50} width={50} className=""/>
               </div>

            </div>
            <div className="flex flex-row basis-1/18 rounded-lg bg-slate-300 w-1/5 mx-8 my-2">
              <div className="basis-1/6 bg-slate-300 rounded-lg ">

              </div>
              <div className="">
                  <h1>search</h1>
              </div>
            </div>
            
             <div className=" box-border w-full h-full">
                {children}
             </div>
          </div>
        </div>
    )
}