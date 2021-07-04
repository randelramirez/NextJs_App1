import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </Layout>
  );
}

//fetch from the server
// this will execute everytime we go this page
// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/events`);
//   const events = await res.json();
//   console.log({ events });
//   return { props: { events } };
// }

// build time, data is reteived during build time
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  console.log({ events });
  return { props: { events }, revalidate: 1 };
}
