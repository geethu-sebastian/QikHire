import Head from "next/head"
import Layout from "../components/layout"
import Link from "next/link"
import styles from "../styles/Form.module.css"
import Image from "next/image"

export default function Login(){
    return(
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <section className="w-2/4 mx-auto flex flex-col gap-5 items-center">
                <div className="title">
                   <h1 className="text-black text-4xl font-medium py-4 ">Login</h1>
                </div>
                <form className="flex flex-col gap-5 items-center">
                    <div className={styles.input_group}>
                        <input type="email"
                         name="email" 
                         placeholder="Email"
                         className={styles.input_text}
                        />
                    </div>
                    <div className={styles.input_group}>
                        <input type="password"
                         name="password" 
                         placeholder="password"
                         className={styles.input_text}
                        />
                    </div>
                    <div className="input-button py-2 bg-blue w-[50%] rounded-md text-bold">
                        <button type="submit">
                           <Link href="/jobsearch"><p className="font-semibold">Login</p></Link>
                        </button>
                    </div>
                    <div className="flex w-[70%] h-[50%] bg-slate-400">   
                        
                          <div className="flex flex-row w-full h-full bg-red-400 ">
                            <div className="flex w-full h-full justify-center items center bg-green-200">
                               <Image src="google.svg" height={15} width={15}/>
                            </div>
                            <div className="flex w-full h-full text-center bg-blue">
                               <p>Sign In with Google</p>
                            </div>
                            </div> 
                        
                    </div>
                    
                </form>
                <p className="text-center">
                    New user? <Link href={'/register'}><a className="text-blue-700">Signup</a></Link>
                </p>
            </section>
        </Layout>
    )
}