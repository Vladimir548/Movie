import { useState, useEffect } from 'react'
export function useDebounce(value: string, delay = 300): string {
	const [debounced, setDebounced] = useState(value)
	useEffect(() => {
		const handler = setTimeout(() => setDebounced(value), delay)
		// изменяем value c задержкокой которая указана в delay
		return () => clearTimeout(handler)
	}, [value, delay])
	return debounced
}
