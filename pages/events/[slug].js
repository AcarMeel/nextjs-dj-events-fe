import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";

export default function EventPage({ evt }) {
  return <Layout>Event Page {evt.name}</Layout>;
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}
