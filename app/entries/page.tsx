'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/navBar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import toast, { Toaster } from 'react-hot-toast';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from 'react';

export default function Home() {
	const [clicked, setClicked] = useState(false);

	const save = async () => {
		setClicked(true);

		setTimeout(() => {
			setClicked(false);
			toast.success('Form saved successfully!');
		}, 2000);
	};
	return (
		<div className="bg-bgGradient relative">
			<Toaster />
			<NavBar></NavBar>
			<div className="flex min-h-screen flex-col items-center justify-between p-28 bg-bgGradient">
				<div className="w-full bg-gray-100 p-5 border rounded-md mt-10">
					<Accordion type="single" collapsible className="w-full">
						<h4 className="scroll-m-20 py-1.5 text-lg text-blue-950 font-semibold tracking-tight">Your Entries</h4>
						<AccordionItem value="item-1">
							<AccordionTrigger className="text-blue-950">01.13.2024</AccordionTrigger>
							<AccordionContent>
								<p className="leading-7 [&:not(:first-child)]:mt-6 text-blue-950">
									Right away he started telling people I was his wife. He would not allow me to go anywhere without letting him know. I once
									lied to him to go play Scrabble with some people. He found out and got very angry. He constantly would bring up that he
									couldn't trust me because I lied about that.
								</p>
								<div className="flex flex-row flex-wrap gap-x-4">
									<img
										src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2023/10/Oct23-Trigger-Warnings-Featured-1024x682.jpg"
										className="h-48 w-52 py-4"
									></img>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger className="text-blue-950">01.18.2024</AccordionTrigger>
							<AccordionContent>
								<p className="leading-7 [&:not(:first-child)]:mt-6 text-blue-950">
									You don't realise the damage you are doing by believing the lies you are told to control you and isolate you from everyone
									who can potentially take you away. You shrug off the occasional pushing and shoving, and item throwing, slamming doors and
									threats of violence because you're scared that if you confront them, the irrational behaviour intensifies.
								</p>
								<div className="flex flex-row flex-wrap gap-x-4">
									<img
										src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2023/10/Oct23-Trigger-Warnings-Featured-1024x682.jpg"
										className="h-48 w-52 py-4"
									></img>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger className="text-blue-950">01.25.2024</AccordionTrigger>
							<AccordionContent>
								<p className="leading-7 [&:not(:first-child)]:mt-6 text-blue-950">
									Then he was throwing things, slamming doors, breaking or taking my things, threatening me. In time, I would just walk away
									from that, so he began putting his hands on me. Yanking me by the hair, shoving me, grabbing my wrists, physically putting
									me outside and locking the door, etc.
								</p>
								<div className="flex flex-row flex-wrap gap-x-4">
									<img
										src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2023/10/Oct23-Trigger-Warnings-Featured-1024x682.jpg"
										className="h-48 w-52 py-4"
									></img>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger className="text-blue-950">02.05.2024</AccordionTrigger>
							<AccordionContent>
								<p className="leading-7 [&:not(:first-child)]:mt-6 text-blue-950">
									I'm in an abusive relationship and I don't know what to do.
								</p>
								<div className="flex flex-row flex-wrap gap-x-4">
									<img src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2023/10/Oct23-Trigger-Warnings-Featured-1024x682.jpg" className="h-48 w-52 py-4"></img>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<div className="flex justify-center py-6 text-xl">
						<Button className="bg-blue-950" onClick={save}>
							{clicked ? 'Reporting...' : 'File Report'}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
