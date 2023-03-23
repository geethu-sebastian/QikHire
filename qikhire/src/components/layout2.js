import Image from "next/image";
export default function Layout2({ children }) {
  return (
    <div className="flex flex-row h-screen w-screen bg-red-400 overflow-y-auto">
      <div className="hidden md:flex flex-col w-[5%] rounded-r-2xl h-full bg-black "></div>
      <div className=" flex flex-col h-screen w-full bg-green-300 overflow-y-auto">
        <div className="flex flex-row bg-blue-400 h-[20%] w-full justify-between">
          <div className=" flex w-full items-center px-6 py-2">
            <h1 className="text-black text-xl md:text-3xl lg:text-4xl font-bold ">
              QikHire
            </h1>
          </div>
          <div className="flex w-[5%] items-center h-full py-2 px-2">
            <Image src="../assets/profilef.svg" height={50} width={50} className="" />
          </div>
        </div>
        <div className="flex h-[10%] bg-slate-300 w-full items-center px-6 py-2">
          <div className="flex w-[20%] bg-yellow-200">
            <h1>search</h1>
          </div>
        </div>
        <div className="flex h-[10%] bg-pink-500 items-center px-6 py-4">
          <div className="flex bg-orange-400 w-full">
            <h1 className="font-medium md:text-lg lg:text-xl">Plumbers near you</h1>
          </div>
        </div>
        <div className="flex w-full h-full bg-slate-400">{children}</div>
      </div>
    </div>
  );
}
