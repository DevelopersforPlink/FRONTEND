"use client";

import { fullScreenPlugin, } from '@react-pdf-viewer/full-screen';

// Import styles
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

const fullScreenPluginInstance = fullScreenPlugin({
    getFullScreenTarget: (pagesContainer) => {
        // Returns the target element in full screen mode
    },
});