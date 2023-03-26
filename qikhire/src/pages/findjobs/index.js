import Head from "next/head";
import Layout from "../../components/layout";
import styles from '../../styles/Form.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
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
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className={styles.input_group}>
            <input
              type="password"
              name="password"
              placeholder="password"
              className={styles.input_text}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="py-2 bg-blue w-[50%] rounded-md text-bold">
            <button type="submit">
              
                <p className="font-semibold">Login</p>
              
            </button>
          </div>
          <div className="flex flex-row w-[90%] md:w-[70%] h-full justify-center items-center">
            <div className="flex w-[10%] h-full justify-center items center ">
              <Image src="/google.svg" height={20} width={20} />
            </div>
            <div className="flex w-full h-full justify-center text-center">
              <p>Continue with Google</p>
            </div>
          </div>
        </form>
        <p className="text-center">
          New user?{" "}
          <Link href={"/register"}>
            <a className="text-blue-700">Signup</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
