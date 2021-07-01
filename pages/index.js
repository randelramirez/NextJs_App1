import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div>
        <h1>Home</h1>
        <Link href="/about">About/</Link>
      </div>
    </Layout>
  );
}
