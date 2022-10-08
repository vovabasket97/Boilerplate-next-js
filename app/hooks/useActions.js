import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export const useActions = () => {
	const dispatch = useDispatch();
	const actions = useMemo(() => ({
		// ...here will some actions
	}), []);

	return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};
