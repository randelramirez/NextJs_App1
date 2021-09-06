import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import qs from "qs";
import { useRouter } from "next/router";

export default function SearchPage({ events }) {
  const router = useRouter();
  return (
    <Layout title="Search Results">
      <Link href="/events">Go Back</Link>
      <h1>Search Results for: {router.query.term}</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </Layout>
  );
}

// fetch from the server (search cannot be static)
/* 
    getServerSideProps, has access to context object which contains a key named query, 
    which then holds the query string parameters 
*/
export async function getServerSideProps({ query: { term } }) {
  const search = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${search}`);
  const events = await res.json();

  return { props: { events } };
}
