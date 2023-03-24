import Head from "next/head";
import Layout from "../../components/layout";
import { Auth } from "@/src/components/auth";

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
    <Auth />
    </Layout>
  );
}
