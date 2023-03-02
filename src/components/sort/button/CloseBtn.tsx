import React from 'react'

interface PropsClose {
	children: React.ReactNode
}

export const CloseBtn = ({ children }: PropsClose) => {
	return (
		<div>
			<div
				className={
					'border-gray-400 border-2 rounded-lg w-[100px] text-center py-3 ease-in-out hover:bg-gray-600 cursor-pointer'
				}
			>
				{children}
			</div>
		</div>
	)
}
