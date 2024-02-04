import Link from 'next/link';
import NavBar from '@/components/navBar';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

export default function Home() {
	return (
		<div className="bg-bgGradient relative">
			<NavBar></NavBar>
			<div className="flex min-h-screen flex-col items-center justify-between p-28 bg-bgGradient">
				<div className="bg-white rounded-xl flex w-4/5 items-center mt-10 justify-center p-8">
					<div className="grid w-full gap-3 ">
						<Label htmlFor="date" className="scroll-m-20 py-1.5 text-lg text-[#011638] font-semibold tracking-tight">
							02.04.2024
						</Label>
						<Separator className="my-1 bg-[#011638]" />
						<Label htmlFor="picture" className="text-lg text-[#011638] text-center mt-8">
							Upload Photo Evidence
						</Label>
						<div className="flex flex-col items-center justify-between">
							<Input id="picture" type="file" className="w-56 text-blue-950 border-[#011638]" />
						</div>

						<Textarea placeholder="Please make sure to describe everything with details.." id="message" className="h-48 mt-8 border-[#011638]" />
						<div className="flex flex-col items-center justify-between">
							<Button className="w-52 pt-2 w-56 mt-8 mb-2 bg-[#011638]">Save</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
