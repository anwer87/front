/* eslint-disable no-undef */
import React, { lazy, Suspense } from "react";
import { Route, useLocation, Navigate, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { Loader } from "../../components";
import { RootLayout } from "../../layout";
import { NormalProps } from "../../types";
import { userTypeRoute } from "../../util";

const Users = lazy(() => import("../../pages/users"));
const Upload = lazy(() => import("../../pages/upload"));
const Export = lazy(() => import("../../pages/export"));
const Demontage = lazy(() => import("../../pages/demontage"));
const Recap = lazy(() => import("../../pages/recap"));
const Operation = lazy(() => import("../../pages/operation"));
const Ensemble = lazy(() => import("../../pages/ensemble"));
const Zinguage = lazy(() => import("../../pages/zinguage"));
const Montage = lazy(() => import("../../pages/montage"));
const Blocage = lazy(() => import("../../pages/blocage"));

const PrivateRoute: React.FC<NormalProps> = (): JSX.Element => {
	const location = useLocation();
	const user = JSON.parse(localStorage.getItem("user") || "{}");

	if (user?.access_token) {
		// check auth
		// @ts-ignore
		const { role } = jwtDecode(user.access_token);
		if (role === userTypeRoute.admin) {
			// must be changed
			// check user permissions // admin routes
			return (
				<Routes>
					<Route
						index
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Users />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/upload"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Upload />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/export"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Export />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/demontage"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Demontage />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/recap"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Recap />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/operation"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Operation />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/ensemble"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Ensemble />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/zinguage"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Zinguage />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/montage"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Montage />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/blocage"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Blocage />
								</RootLayout>
							</Suspense>
						}
					/>
				</Routes>
			);
		}
		if (role === userTypeRoute.production) {
			return (
				<Routes>
					<Route
						path="/export"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Export />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/demontage"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Demontage />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						index
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Recap />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/operation"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Operation />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/ensemble"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Ensemble />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/zinguage"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Zinguage />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/montage"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Montage />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/blocage"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Blocage />
								</RootLayout>
							</Suspense>
						}
					/>
				</Routes>
			);
		}
		if (role === userTypeRoute.demontage) {
			return (
				<Routes>
					<Route
						index
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Demontage />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/recap"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Recap />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/operation"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Operation />
								</RootLayout>
							</Suspense>
						}
					/>
				</Routes>
			);
		}
		if (role === userTypeRoute.montage) {
			return (
				<Routes>
					<Route
						path="/export"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Export />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/recap"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Recap />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/operation"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Operation />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						index
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Montage />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/blocage"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Blocage />
								</RootLayout>
							</Suspense>
						}
					/>
				</Routes>
			);
		}
		if (role === userTypeRoute.export) {
			return (
				<Routes>
					<Route
						index
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Export />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/operation"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Operation />
								</RootLayout>
							</Suspense>
						}
					/>
				</Routes>
			);
		}
		if (role === userTypeRoute.sous_ensemble) {
			return (
				<Routes>
					<Route
						path="/recap"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Recap />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/operation"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Operation />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						index
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Ensemble />
								</RootLayout>
							</Suspense>
						}
					/>
					<Route
						path="/zinguage"
						element={
							<Suspense fallback={<Loader />}>
								<RootLayout>
									<Zinguage />
								</RootLayout>
							</Suspense>
						}
					/>
				</Routes>
			);
		}
	}
	return <Navigate to="/" state={{ from: location }} replace />;
};

export default PrivateRoute;
