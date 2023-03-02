import React from 'react'

interface PropsApply {
	children: React.ReactNode
}

export const ApplyBtn = ({ children }: PropsApply) => {
	return (
		<div>
			<button
				className={
					'border-2 border-blue-600 py-3 w-[100px] rounded-lg ease-in-out hover:bg-blue-800'
				}
			>
				{children}
			</button>
		</div>
	)
}
