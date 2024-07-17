import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//...
// import * as Sentry from '@sentry/react'

// Sentry.init({
// 	dsn: 'https://d9e70da395646cce23d4bb893241d3ef@o4507430470549504.ingest.de.sentry.io/4507617604272208',
// 	integrations: [
// 		Sentry.browserTracingIntegration(),
// 		Sentry.metrics.metricsAggregatorIntegration(),
// 		Sentry.reactRouterV6BrowserTracingIntegration({
// 			useEffect: React.useEffect,
// 		}),
// 		Sentry.replayIntegration({ maskAllText: false, blockAllMedia: false }),
// 		Sentry.replayIntegration(),
// 	],
// 	tracesSampleRate: 1.0,
// 	tracePropagationTargets: ['localhost', /^https:\/\/localhost:5173\.io\/api/],
// 	replaysSessionSampleRate: 0.1,
// 	replaysOnErrorSampleRate: 1.0,
// })

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
