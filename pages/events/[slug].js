import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function EventPage() {
  const router = useRouter();
  return (
    <Layout title={`Event: ${router.query.slug}`}>
      <div>Event Page {router.query.slug}</div>
    </Layout>
  );
}
