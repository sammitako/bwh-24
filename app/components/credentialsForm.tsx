'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

interface CredentialsFormProps {
	csrfToken?: string;
}

export function CredentialsForm(props: CredentialsFormProps) {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);

	const submit = () => {
		router.push('/');
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);

		const signInResponse = await signIn('credentials', {
			email: data.get('email'),
			password: data.get('password'),
			redirect: false,
		});

		if (signInResponse && !signInResponse.error) {
			//Redirect to homepage (/timeline)
			router.push('/timeline');
		} else {
			console.log('Error: ', signInResponse);
			setError('Your Email or Password is wrong!');
		}
	};

	return (
		<div
			className="w-full mt-3 text-xl text-black font-semibold flex flex-col"
			// onSubmit={handleSubmit}
		>
			{error && <span className="p-4 mb-2 text-lg font-semibold text-white bg-red-500 rounded-md">{error}</span>}
			<input type="email" name="email" placeholder="Email" required className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md" />

			<input type="password" name="password" placeholder="Password" required className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md" />
			<Link href="/journal">
				<button
					onClick={submit}
					type="submit"
					className="w-full h-12 px-6 mt-4 text-lg text-white transition-colors duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-gray-600"
				>
					Create account
				</button>
			</Link>
		</div>
	);
}
