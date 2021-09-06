import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

export default function EventPage({ event }) {
  const deleteEvent = () => {};
  return (
    <Layout title={`Event: ${event.name}`}>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${event.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" onClick={deleteEvent} className={styles.delete}>
            <FaTimes /> Delete Event
          </a>
        </div>

        <span>
          {event.date} at {event.time}
        </span>
        <h1>{event.name}</h1>
        {event.image && (
          <div className={styles.image}>
            <Image
              src={event.image.formats.medium.url}
              alt={event.name}
              width={960}
              height={600}
            />
          </div>
        )}
        <h3>Performers:</h3>
        <p>{event.performers}</p>
        <h3>Venue: {event.venue}</h3>
        <p>{event.address}</p>

        <Link href="/events">
          <a className={styles.back}>{"<"} Go Back </a>
        </Link>
      </div>
    </Layout>
  );
}

// data is fetched everytime page is requested
// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const data = await res.json();

//   return { props: { event: data[0] } };
// }

// gets called during build time
// because this page is a dynamic route we need to use getStaticPaths(to generate all possible pages/routes)
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  // we use slug = because [slug].js
  const paths = events.map((event) => ({ params: { slug: event.slug } }));
  return {
    paths,
    fallback: true,
  };
}

// gets called during build time
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return { props: { event: events[0], revalidate: 1 } };
}
