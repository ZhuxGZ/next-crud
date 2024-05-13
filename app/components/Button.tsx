'use client';
export const Button = ({ children, sx }: { children: string; sx?: string }) => {
	return (
		<button
			className={`rounded-xl bg-white text-black pl-2 pr-2 pt-1 pb-1 border-black font-semibold ${sx}`}
		>
			{children}
		</button>
	);
};
