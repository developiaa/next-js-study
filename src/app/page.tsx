import Link from 'next/link';

function HomePage() {
    return (
        <div>
            <Link href='/posts' prefetch={false}>Home</Link>
            <Link href='/greet' prefetch={false}>Greet</Link>
        </div>
    )
}

export default HomePage;
