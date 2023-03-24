
import Image from "next/image"
const Mobilenav=()=>{
    return(
        <div className="flex flex-row h-full w-[90%] justify-around items center py-1 bg-black">
          <div>
        <Image src="/home.svg" height={5} width={5} className="w-[70%] h-[70%]" />
        </div>
        <div>
        <Image src="/heart.svg" height={5} width={5} className="w-[70%] h-[70%]" />
        </div>
        <div>
        <Image src="/chat.svg" height={5} width={5} className="w-[70%] h-[70%] " />
        </div>
        </div>
    )
}
export default Mobilenav