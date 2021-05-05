import { useRouter } from 'next/router';

export default function EventPage() {
    const router = useRouter();
    console.log(router)
    return (
        <div>
            Event Page {router.query.slug}
        </div>
    )
}
