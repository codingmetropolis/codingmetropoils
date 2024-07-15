import Script from 'next/script';
import React, { useEffect } from 'react';

export default function Appointment() {


    return (
        <div>
            <iframe
                id="JotFormIFrame-241935017318455"
                title="CM Appointment Request Form"
                onLoad={() => window.parent.scrollTo(0, 0)}
                allowtransparency="true"
                allow="geolocation; microphone; camera; fullscreen"
                src="https://form.jotform.com/241935017318455"
                frameBorder="0"
                style={{ minWidth: "100%", maxWidth: "100%", height: "539px", border: "none" }}
                scrolling="no"
            ></iframe>
            <Script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" strategy="beforeInteractive" />

            <Script>
                {`
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-241935017318455']", "https://form.jotform.com/");
        `}
            </Script>

        </div>
    );
}
