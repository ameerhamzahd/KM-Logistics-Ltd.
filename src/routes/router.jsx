import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: App,
        }
    ]
)

export default router;