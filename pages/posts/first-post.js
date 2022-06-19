import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First-Post</h1>
      <Link href="/">
        <a>Go Home🏡</a>
      </Link>
      <Image
        src="/images/profile.jpg"
        width={400}
        height={400}
        alt="Profile Photo"
      />
    </Layout>
  );
}
