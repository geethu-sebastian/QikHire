import Head from "next/head"
import Layout from "../components/layout"
import Link from "next/link"
import styles from "../styles/Form.module.css"

export default function Login(){
    return(
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <section className="w-2/4 mx-auto flex flex-col gap-10">
                <div className="title">
                   <h1 className="text-black text-4xl font-medium py-4 ">Login</h1>
                </div>
                <form className="flex flex-col gap-5">
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
                    <div className="input-button">
                        <button type="submit">
                           Login
                        </button>
                    </div>
                    <div className="input-button">   
                        <button type="submit">
                           Sign In with Google
                        </button>
                    </div>
                    
                </form>
                <p className="text-center">
                    New user? <Link href={'/register'}><a className="text-blue-700">Signup</a></Link>
                </p>
            </section>
        </Layout>
    )
}