import Layout from "../layout/layout"

export default function Entry(){
    return(
        <Layout>
           <section className="w-[50%] mx-auto flex flex-col gap-5">
                <div className="title">
                   <h1 className="text-black text-4xl font-bold py-4 ">QikHire</h1>
                </div>
                <form className="flex flex-col items center gap-2">
                    
                    <div className="flex items center rounded-full p-2">
                        <button type="submit" className="bg-black text-white rounded-full p-2 w-full h-[60px]">
                           Hire Now
                        </button>
                    </div>
                    <div className="flex items-center">
                         <p className="w-full">Or</p>
                    </div>
                    <div className="flex items center rounded-full p-2">   
                        <button type="submit" className="border border-black rounded-full p-2 w-full h-[60px]">
                           Find Jobs
                        </button>
                    </div>
                    
                    
                </form>
                
            </section>
        </Layout>
    )
}