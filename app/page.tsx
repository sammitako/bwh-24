import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="text-red-500">Landing Page</div>
			<div>
				<Link href="/logs">Logs History</Link>
			</div>
		</main>
	);
}
