import React from 'react'

interface PropsApply {
	children: React.ReactNode
}

export const ApplyBtn = ({ children }: PropsApply) => {
	return (
		<div>
			<div
				className={
					'border-2 border-blue-600 py-3 w-[100px]   rounded-lg ease-in-out hover:bg-blue-800 cursor-pointer'
				}
			>
				<div className='text-center'>{children}</div>
			</div>
		</div>
	)
}
