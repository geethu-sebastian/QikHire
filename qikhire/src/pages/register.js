import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Form.module.css"
import Link from "next/link";

export default function Register() {
  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <section className="w-2/4 mx-auto flex flex-col gap-5 items-center">
        <div className="title">
          <h1 className="text-black text-4xl font-medium py-2 ">Register</h1>
        </div>
        <form className="flex flex-col gap-3 items-center">
        <div className={styles.input_group}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={styles.input_text}
            />
          </div>     
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
            />
          </div>
          <div className={styles.input_group}>
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              className={styles.input_text}
            />
          </div>
          <div className={styles.input_group}>
            <input
              type="password"
              name="password"
              placeholder="password"
              className={styles.input_text}
            />
          </div>
          <div className="input-button py-2 bg-indigo-200 w-[50%] rounded-md">
            <button type="submit">Register</button>
          </div>
          
          <div className="input-button">
            <button type="submit">Sign In with Google</button>
          </div>
        </form>
        
      </section>
      
    </Layout>
  );
}
