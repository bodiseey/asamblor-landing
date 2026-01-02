"use client";

import Script from "next/script";

export default function UnicornStudio() {
    return (
        <Script
            src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"
            strategy="lazyOnload"
            onLoad={() => {
                // @ts-ignore
                if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
                    // @ts-ignore
                    window.UnicornStudio.init();
                    // @ts-ignore
                    window.UnicornStudio.isInitialized = true;
                }
            }}
        />
    );
}
