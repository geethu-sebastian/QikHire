import Layout2 from '../layout/layout2'
export default function Workernearyou(){
    return(
        <Layout2>
           <div className='w-full h-full'>
             <div className="title">
                   <h1 className="text-black text-xl font-medium pt-2 pb-1 px-8">Plumbers near you</h1>
             </div>
             <div className='overflow-x-auto flex flex-row py-3 px-4 w-full h-3/5 scrollbar-hide'>
                  <div className=" w-1/5 h-full mx-4 flex-shrink-0 rounded-lg bg-indigo-200 hover:bg-red-200">

                  </div>
                  <div className="w-1/5 h-full mx-2 flex-shrink-0 rounded-lg bg-indigo-200  hover:bg-red-200">

                  </div>
                  <div className="w-1/5 h-full mx-2 flex-shrink-0 rounded-lg  bg-indigo-200  hover:bg-red-200">

                  </div>
                  <div className="w-1/5 h-full mx-2 flex-shrink-0 rounded-lg  bg-indigo-200  hover:bg-red-200">

                  </div>
                  <div className="w-1/5 h-full mx-2 flex-shrink-0 rounded-lg  bg-indigo-200  hover:bg-red-200">

                  </div>
                  <div className="w-1/5 h-full mx-2 flex-shrink-0 rounded-lg  bg-indigo-200  hover:bg-red-100">

                  </div>
             </div>
           </div>
        </Layout2>
    )
}