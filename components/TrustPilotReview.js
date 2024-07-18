import Script from 'next/script'
import React from 'react'

export default function TrustPilotReview() {
    return (
        <div className='my-4' style={
            {
                marginTop: '50px',
                marginBottom: '50px',
            }
        }>
            <div class="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="6698bd994bade719bbb144c1" data-style-height="52px" data-style-width="100%">
                <a href="https://www.trustpilot.com/review/cm.vigneshnu.com" target="_blank" rel="noopener">Trustpilot</a>
            </div>

            <Script
                src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                async
            />

        </div>
    )
}
