import Script from 'next/script';
import React from 'react';

export default function Appointment() {


    return (
        <div>
            <iframe
                id="JotFormIFrame-241935017318455"
                title="CM Appointment Request Form"
                onLoad={() => window.parent.scrollTo(0, 0)}
                allow="geolocation; microphone; camera; fullscreen"
                src="https://form.jotform.com/241935017318455"
                style={{ minWidth: "100%", maxWidth: "100%", height: "539px", border: "none" }}
              
            ></iframe>
            <Script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" strategy="beforeInteractive" onLoad={
                () => {
                    `window.jotformEmbedHandler("iframe[id='JotFormIFrame-241935017318455']", "https://form.jotform.com/");`
                }
            } />

            <Script>
                {`
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-241935017318455']", "https://form.jotform.com/");
        `}
            </Script>

        </div>
    );
}
