import Image from "next/image";
import Searchbar from "./searchbar";
import Mobilenav from "./mobilenav";

export default function Layout2({ children }) {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-white overflow-y-auto">
      <div className="hidden md:flex w-[5%] rounded-r-2xl h-full bg-black py-10">
        <div className="flex flex-col h-full md:w-full justify-around items center py-12 px-2">
        <div>
        <Image src="Vector (Stroke).svg" height={10} width={10} className="w-[70%] h-[70%]" />
        </div>
        <div>
        <Image src="Vector.svg" height={10} width={10} className="w-[70%] h-[70%]" />
        </div>
        <div>
        <Image src="Vector2.svg" height={10} width={10} className="w-[70%] h-[70%]" />
        </div>
        </div>
      </div>
      <div className=" flex flex-col h-screen w-full bg-white overflow-y-auto">
        <div className="flex flex-row bg-white h-[20%] w-full justify-between">
          <div className=" flex w-full items-center px-6 py-2">
            <h1 className="text-black text-xl md:text-3xl lg:text-4xl font-bold ">
              QikHire
            </h1>
          </div>
          <div className="flex w-[30%] md:w-[10%] lg:[5%] items center justify-center h-full py-2">
            <Image src="profilef.svg" height={50} width={50} className="" />
          </div>
        </div>
        <div className="flex h-[10%] bg-white w-full px-6 py-2">
          <Searchbar />
        </div>
        <div className="flex flex-col w-full h-full bg-white justify-center items-center px-2 py-2">
          {children}
        </div>
        
      </div>
      <div className="md:hidden flex h-[10%] w-full bg-black rounded-lg justify-center items center">
          <Mobilenav />
        </div>
    </div>
  );
}
