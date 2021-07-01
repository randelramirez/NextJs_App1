import Head from "next/head";

export default function Layout({
  title = "DJ Events | Find the hottest parties",
  keywords = "music, dj, events, edm",
  description = "Find the latest DJ and other musicla events",
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </>
  );
}

// Layout.defaultProps = {
//   title: "DJ Events | Find the hottest parties",
//   keywords: "music, dj, events, edm",
//   description: "Find the latest DJ and other musicla events",
// };
