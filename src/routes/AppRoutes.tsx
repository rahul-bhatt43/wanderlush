import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/common/PageTransition';
import { Layout } from '../components/layout/Layout';
import { LandingPage } from '../pages/LandingPage';
import { SchedulePage } from '../pages/SchedulePage';

const AppRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={
                            <PageTransition>
                                <LandingPage />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/schedule"
                        element={
                            <PageTransition>
                                <SchedulePage />
                            </PageTransition>
                        }
                    />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AppRoutes;
