import { useMemo } from 'react';

const useArray = length => {
	const array = useMemo(() => Array.apply(null, { length: length }).map(Number.call, Number), [length]);
	return array;
};

export default useArray;
