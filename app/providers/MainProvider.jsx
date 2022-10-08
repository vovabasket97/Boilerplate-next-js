import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import store from '@/store/index';

import HeadProvider from './HeadProvider';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
});

const MainProvider = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			</Provider>
		</HeadProvider>
	);
};

export default MainProvider;
