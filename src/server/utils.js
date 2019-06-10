import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from '../Routes'
import getStore from '../store'

export const render = req => {
    const content = renderToString((
        <Provider store={ getStore() }>
            <StaticRouter location={req.path} context={{}}>
                { Routes }
            </StaticRouter>
        </Provider>
        
    ))
    return (`
        <html>
            <head>
                <title>不知道起个什么名字</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src='/index.js'></script>
            </body>
        </html>
    `)
}