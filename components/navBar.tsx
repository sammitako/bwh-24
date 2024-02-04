import React from 'react';
import Link from 'next/link';

const NavBar = () => {
	return (
		<div className="absolute top-9 flex flex-row text-white gap-2 items-center w-screen px-28 text-lg justify-between ">
			{/* <h4 className="text-rose-300">SafeHaven</h4> */}

			<div className="flex flex-row text-white gap-1">
				<Link href="/" className="py-2 px-6 text-rose-300">
					SafeHaven
				</Link>
				<Link href="" className="border border-transparent rounded-xl  py-2 px-6 hover:border-white">
					Entries
				</Link>
				<Link href="" className="border border-transparent rounded-xl  py-2 px-6 hover:border-white">
					File Report
				</Link>
				<Link href="" className="border border-transparent rounded-xl  py-2 px-6 hover:border-white">
					Journal
				</Link>
			</div>
			<div className="flex flex-row text-white gap-x-3">
				<Link href="" className="border border-transparent rounded-xl  py-2 px-6 hover:border-white">
					Sign Out
				</Link>
				<Link href="" className="border rounded-xl py-2 px-6 text-white border-rose-300 hover:bg-zinc-200 hover:text-red-800 hover:border-none">
					Emergency
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
