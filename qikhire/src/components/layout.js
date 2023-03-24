export default function Layout({children}){
    return(
      <div className="flex h-screen bg-blue-500 overflow-y-auto">
      <div className="w-full h-full flex flex-col md:flex-row md:overflow-y-auto">
         <div className="flex flex-col justify-evenly flex-shrink-0 bg-black md:w-[50%] w-[100%] h-screen">
         <div class w-screen h-screen flex justify-center items-center px-4>
            <h1 id = "heading" class="text-4xl text-white font-bold px-4">Need to Find a Job?</h1>
            <h1 id = "heading2" class="text-4xl text-white font-bold px-4">Need Someone to Help you?</h1>
         </div>
          
            <div  class=" font-bold text-black rounded-full bg-blue w-[20%] h[30%] p-4 justify-center text-center ">Gardener</div>
            <div class=" font-bold text-black rounded-full bg-pink w-[20%] h[30%] p-4 justify-center text-center ">Plumber</div>
            <div class=" font-bold text-black rounded-md bg-blue w-[20%] h[30%] p-4 justify-center text-center ">Pet Care</div>
            <div class=" font-bold text-black rounded-full bg-pink w-[20%] h[30%] p-4 justify-center text-center ">Driver</div>
            <div class=" font-bold text-black rounded-full bg-grey w-[20%] h[30%] p-4 justify-center text-center ">Electrician</div>
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