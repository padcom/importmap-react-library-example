import { sayHello, Hello } from 'library1'

import React from 'react'
import ReactDOM from 'react-dom/client'

const app = ReactDOM.createRoot(document.getElementById('app'))
app.render(React.createElement(Hello, { name: 'Jane Smith' }))

console.log('[HOST] app', app)
console.log('[HOST] Using the library')

sayHello()
