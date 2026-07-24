import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { TitleSm, Title } from '@/components/common/Title';

export default function Appointment() {
    const [iframeHeight, setIframeHeight] = useState(1200);

    useEffect(() => {
        // Clean up any existing scripts to avoid conflicts
        const existingScript = document.getElementById('jotform-embed-script');
        if (existingScript) {
            existingScript.remove();
        }

        // Function to adjust iframe height
        const adjustIframeHeight = () => {
            try {
                const iframe = document.getElementById('JotFormIFrame-241935017318455');
                if (iframe) {
                    // Set initial height to cover most forms
                    setIframeHeight(1200);
                    
                    // Add message listener for JotForm's height changes
                    window.addEventListener('message', (event) => {
                        if (event.origin === 'https://form.jotform.com') {
                            try {
                                const data = JSON.parse(event.data);
                                if (data.frameHeight) {
                                    setIframeHeight(data.frameHeight + 100); // Add padding
                                }
                            } catch (e) {
                                // Not JSON or not our message
                            }
                        }
                    });
                }
            } catch (error) {
                console.error('Error adjusting iframe height:', error);
            }
        };

        // Adjust height after a short delay to ensure iframe is loaded
        setTimeout(adjustIframeHeight, 1000);

        return () => {
            // Cleanup on unmount
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    return (
        <>
            <Head>
                <title>Request Appointment - Code Made Biz</title>
                <meta name="description" content="Schedule a consultation with CodeMadeBiz experts to discuss your web development, app development, or digital marketing project needs." />
            </Head>
            
            <section className='agency bg-top'>
                <div className='container'>
                    <div className='heading-title'>
                        <TitleSm title='REQUEST FOR QUOTE' /> <br />
                        <br />
                        <Title title='Let us know about your project' className='title-bg' />
                    </div>
                    
                    <div className='py' style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ 
                            width: "100%",
                            height: `${iframeHeight}px`,
                            overflow: "visible",
                            marginBottom: '50px'
                        }}>
                            <iframe
                                id="JotFormIFrame-241935017318455"
                                title="CM Appointment Request Form"
                                allowTransparency="true"
                                allowFullScreen={true}
                                allow="geolocation; microphone; camera"
                                src="https://form.jotform.com/241935017318455?isIframeEmbed=1"
                                frameBorder="0"
                                style={{ 
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                    overflow: "visible"
                                }}
                                scrolling="yes"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
