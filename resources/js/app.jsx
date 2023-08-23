import './bootstrap';
import '../css/app.css';

import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import ReactGA from 'react-ga';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID || null;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({el, App, props}) {

        if (gaTrackingId) {
            ReactGA.initialize(gaTrackingId);
            ReactGA.pageview(window.location.pathname + window.location.search);
        }

        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
