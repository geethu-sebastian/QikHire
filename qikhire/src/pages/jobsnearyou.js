import Layout2 from "../components/layout2";
import Image from "next/image";
export default function Jobsnearyou() {
  return (
    <Layout2>
      <div className="flex flex-col w-[70%] md:w-[33%] h-[93%] bg-red-500 gap-4 rounded-md">
        <div className="flex -my-8 h-[20%] w-full justify-center z-10">
          <Image src="profilef.svg" height={80} width={80} className="" />
        </div>

        <div className="flex flex-col h-full w-full mt-10 bg-yellow-200 gap-3 rounded-md">
            <div className="flex h-[10%] w-full bg-blue-300 items-start">
                <h1 className="px-6">Name : Annu </h1>
          
            </div>
            <div className="flex h-[10%] w-full bg-blue-300 items-start">
                <h1 className="px-6">Phone Number: Annu </h1>
          
            </div>
            <div className="flex h-[10%] w-full bg-blue-300 items-start">
                <h1 className="px-6">Address : Annu </h1>
          
            </div>
            <div className="flex h-[30%] w-full bg-blue-300 justify-center ">
                 
                 <div className="flex bg-pink-400 w-full h-full justify-center">
                       <p>45 mins away</p>
                 </div>
          
            </div>
            <div className="flex flex-row h-full w-full bg-orange-600 justify-around items-center ">
                <div className="bg-white w-[35%] h-[30%] px-4">

                </div>
                <div className="bg-purple-400 w-[35%] h-[30%] px-4">

                </div>
            </div>
        </div>
      </div>
    </Layout2>
  );
}
