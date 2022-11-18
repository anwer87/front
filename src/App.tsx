import React from "react";
import * as Sentry from "@sentry/react";
import { Router } from "./router";

function App() {
	return <Router />;
}

export default Sentry.withProfiler(App);
