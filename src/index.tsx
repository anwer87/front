import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { store } from "./redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/sass/index.sass";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			suspense: true,
		},
	},
});

Sentry.init({
	dsn: "https://4a2b22bebd37431da36eb45c7eb998cc@o826672.ingest.sentry.io/4503992513462272",
	integrations: [new BrowserTracing()],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
});
root.render(
	<React.StrictMode>
		<Sentry.ErrorBoundary showDialog>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<BrowserRouter>
						<App />
						<ToastContainer
							position="top-right"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="light"
						/>
					</BrowserRouter>
				</Provider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</Sentry.ErrorBoundary>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
