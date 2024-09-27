'use client';

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "../constants/index";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";

export default function Sidebar({user}: SidebarProps){
	const pathName = usePathname();

	return (
		<aside className="sidebar">
			<nav className="flex flex-col gap-4">
				<Link href="/"
					className="mb-12 cursor-pointer items-center gap-2 flex">
					<Image src={"/icons/logo.svg"}
						width={34}
						height={34}
						alt="Horizon logo"
						className="size-[24px] max-xl:size-14"
						/>
					<h1 className="sidebar-logo">Horizon</h1>
				</Link>
				{sidebarLinks.map(item => {
					const isActive = pathName === item.route//pathName.startsWith(item.route);

					return (
						<Link key={item.label} href={item.route} 
							className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
							<div className="relative size-6">
						<Image
							src={item.imgURL}
							alt={item.label}
							className={cn({
								'brightness-[3] invert-0': isActive
							})}
							fill />
							</div>
							<p className={cn('sidebar-label', {
								'!text-white': isActive
							})}>{item.label}</p>
						</Link>
						)}
					)}
				USER
			</nav>
			FOOTER
		</aside>
	)
}