import { useEffect, useRef } from 'react';

export const useObserver = (ref, canLoad, isLoading, callback) => {
	const observer = useRef();

	useEffect(() => {
		if (observer.current) observer.current.disconnect();
		if (!ref.current) return;

		let cb = function (entries, observer) {
			if (entries[0].isIntersecting && canLoad) {
				callback();
			}
		};

		observer.current = new IntersectionObserver(cb);
		observer.current.observe(ref.current);
	}, [canLoad, isLoading, callback, ref]);
};
