
import Image from "next/image"
const Mobilenav=()=>{
    return(
        <div className="flex flex-row h-full w-[90%] justify-around items center py-1 bg-black">
          <div>
        <Image src="Vector (Stroke).svg" height={5} width={5} className="w-[70%] h-[70%]" />
        </div>
        <div>
        <Image src="Vector.svg" height={5} width={5} className="w-[70%] h-[70%]" />
        </div>
        <div>
        <Image src="Vector2.svg" height={5} width={5} className="w-[70%] h-[70%] " />
        </div>
        </div>
    )
}
export default Mobilenav