import React, { useState } from 'react';

function useCounter(defaultVal = 0) {
	const [count, setCount] = useState(defaultVal);

	return {
		count,
		add: () => setCount(count + 1),
		subtract: () => setCount(count - 1),
	};
}

export default useCounter;
