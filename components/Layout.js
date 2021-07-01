import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import Showcase from "./Showcase";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({
  title = "DJ Events | Find the hottest parties",
  keywords = "music, dj, events, edm",
  description = "Find the latest DJ and other musicla events",
  children,
}) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}

// Layout.defaultProps = {
//   title: "DJ Events | Find the hottest parties",
//   keywords: "music, dj, events, edm",
//   description: "Find the latest DJ and other musicla events",
// };
