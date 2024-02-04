import React from 'react';
import Link from 'next/link';

const NavBar = () => {
	return (
		<div className="absolute top-9 flex flex-row text-white gap-2 items-center w-screen px-28 text-lg justify-between ">
			<div className="flex flex-row text-white gap-1">
				<Link href="/" className="py-2 pr-6 text-rose-300 font-bold text-2xl ">
					SafeHaven
				</Link>
				<Link href="/logs" className="border border-transparent rounded-xl  py-2 px-6 hover:border-white">
					Entries
				</Link>
				<Link href="" className="border border-transparent rounded-xl  py-2 px-6 hover:border-white">
					File Report
				</Link>
				<Link href="/journal" className="border border-transparent rounded-xl  py-2 px-6 hover:border-white">
					Journal
				</Link>
			</div>
			<div className="flex flex-row text-white gap-x-3">
				<Link href="" className="rounded-xl py-2 px-5 bg-red-500 text-white font-semibold hover:bg-red-600">
					Emergency
				</Link>
				<Link href="/" className="border border-transparent rounded-xl  py-2 px-6 hover:border-white">
					Sign Out
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
