import React from 'react'

interface ICLear {
	children: React.ReactNode
}

export const ClearBtn = ({ children }: ICLear) => {
	return (
		<div>
			<button
				className={
					'border-2 border-red-600 py-3 w-[100px] rounded-lg ease-in-out hover:bg-red-600'
				}
			>
				{children}
			</button>
		</div>
	)
}
