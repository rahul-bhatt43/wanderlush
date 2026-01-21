import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Outlet } from 'react-router';
import { FloatingDock } from '../ui/FloatingDock';

export const Layout = () => {
    return (
        <div className="relative min-h-screen container mx-auto">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <FloatingDock />
            <Footer />
        </div>
    );
};
