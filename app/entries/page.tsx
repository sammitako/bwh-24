'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/navBar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Home() {
	return (
		<div className="bg-bgGradient relative">
			<NavBar></NavBar>
			<div className="flex min-h-screen flex-col items-center justify-between p-28 bg-bgGradient">
				<div className="w-full bg-gray-100 p-5 border rounded-md mt-10">
					<Accordion type="single" collapsible className="w-full">
						<h4 className="scroll-m-20 py-1.5 text-lg text-blue-950 font-semibold tracking-tight">Your Entries</h4>
						<AccordionItem value="item-1">
							<AccordionTrigger className="text-blue-950">01.13.2024</AccordionTrigger>
							<AccordionContent>
								<p className="leading-7 [&:not(:first-child)]:mt-6 text-blue-950">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perspiciatis explicabo beatae, unde nam, eaque suscipit
									tempora officia temporibus esse, laborum alias dolorem! Quos, tenetur? At delectus quia odio laudantium. Lorem ipsum dolor
									sit, amet consectetur adipisicing elit. Dolorum, culpa voluptatibus facilis doloremque ipsam praesentium ab veniam
									doloribus ducimus consectetur harum dolorem nisi obcaecati ipsum quibusdam, deleniti ipsa, quae beatae.
								</p>
								<div className="flex flex-row flex-wrap gap-x-4">
									<img
										src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2023/10/Oct23-Trigger-Warnings-Featured-1024x682.jpg"
										className="h-48 w-52 py-4"
									></img>
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
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perspiciatis explicabo beatae, unde nam, eaque suscipit
									tempora officia temporibus esse, laborum alias dolorem! Quos, tenetur? At delectus quia odio laudantium. Lorem ipsum dolor
									sit, amet consectetur adipisicing elit. Dolorum, culpa voluptatibus facilis doloremque ipsam praesentium ab veniam
									doloribus ducimus consectetur harum dolorem nisi obcaecati ipsum quibusdam, deleniti ipsa, quae beatae.
								</p>
								<div className="flex flex-row flex-wrap gap-x-4">
									<img
										src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2023/10/Oct23-Trigger-Warnings-Featured-1024x682.jpg"
										className="h-48 w-52 py-4"
									></img>
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
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perspiciatis explicabo beatae, unde nam, eaque suscipit
									tempora officia temporibus esse, laborum alias dolorem! Quos, tenetur? At delectus quia odio laudantium. Lorem ipsum dolor
									sit, amet consectetur adipisicing elit. Dolorum, culpa voluptatibus facilis doloremque ipsam praesentium ab veniam
									doloribus ducimus consectetur harum dolorem nisi obcaecati ipsum quibusdam, deleniti ipsa, quae beatae.
								</p>
								<div className="flex flex-row flex-wrap gap-x-4">
									<img
										src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2023/10/Oct23-Trigger-Warnings-Featured-1024x682.jpg"
										className="h-48 w-52 py-4"
									></img>
									<img
										src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2023/10/Oct23-Trigger-Warnings-Featured-1024x682.jpg"
										className="h-48 w-52 py-4"
									></img>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<div className="flex justify-center py-6 text-xl">
						<Button className="bg-blue-950">File Report</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
