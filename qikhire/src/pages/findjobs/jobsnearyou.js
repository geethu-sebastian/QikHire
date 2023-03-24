import Layout2 from "../../components/layout2";
import Textworker from "../../components/textworker";
import Image from "next/image";
export default function Jobsnearyou() {
  return (
    <Layout2>
      <Textworker />
      <div className="flex justify-center place-items-center w-full h-full">
        <div className="flex flex-col w-[70%] md:w-[33%] h-[93%] bg-slate-200 gap-4 rounded-md">
          <div className="flex -my-8 h-[20%] w-full justify-center z-10">
            <Image src="/profilef.svg" height={80} width={80} className="" />
          </div>

          <div className="flex flex-col h-full w-full mt-10 gap-4 rounded-md">
            <div className="flex h-[12%] w-full items-start">
              <h1 className="px-6">Name : Annu </h1>
            </div>
            <div className="flex h-[12%] w-full items-start">
              <h1 className="px-6">Phone Number: Annu </h1>
            </div>
            <div className="flex h-[12%] w-full items-start">
              <h1 className="px-6">Address : Annu </h1>
            </div>
            <div className="flex h-[30%] w-full justify-center ">
              <div className="flex w-full h-full justify-center">
                <p>45 mins away</p>
              </div>
            </div>
            <div className="flex flex-row h-full w-full justify-around items-center">
              <div className="bg-white w-[35%] h-[35%] px-4 text-center rounded-lg">
                <p className="h-full w-full">Decline</p>
              </div>
              <div className="w-[35%] h-[35%] px-4 text-center rounded-lg bg-red-300">
                <p className="h-full w-full">Accept</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
}
