import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import qs from "qs";
import { FaSearch, FaHome } from 'react-icons/fa'
import Link from 'next/link'

export default function SearchPage({ events }) {
  const router = useRouter();
  return (
    <Layout title="Search Results">
      <Link href="/"><a><FaHome /> Go Back Home</a></Link>
      <h1><FaSearch /> Search Results for "{router.query.term}"</h1>
      {events.length === 0 && <h3>No Events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const data = await res.json();
  return {
    props: {
      events: data,
    },
  };
}
