import Layout2 from "../components/layout2";
import Image from "next/image";
export default function Jobsnearyou() {
  return (
    <Layout2>
      <div className="flex flex-col w-full h-full">
        <div className="title w-4/5 h-1/6">
          <h1 className="text-black text-xl font-medium pt-2 pb-1 px-8">
            Plumbers near you
          </h1>
        </div>
        <div className="flex justify-center items-center w-full h-full py-4">
          <div className="flex flex-col mx-auto w-1/3 h-full bg-slate-200 rounded-lg ">
            <div className="flex basis-1/5 py-3 place-items-center -mt-10">
              
              <Image src="../assets/profilef.svg" height={80} width={80} className="" />
              
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </Layout2>
  );
}
