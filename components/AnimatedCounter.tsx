"use client";
import CountUp from "react-countup";

interface AnimatedCounterProps{
	end: number,
	prefix?: string,
	duration?: number
}

export default function AnimatedCounter(props: AnimatedCounterProps){
	return (
	<div className="w-full">
		<CountUp 
			decimal="."
			decimals={2}
			{...props}
		/>
	</div>
	)
}