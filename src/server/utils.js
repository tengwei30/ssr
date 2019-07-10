import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import Routes from '../Routes'
import getStore from '../store'

export const render = req => {

    const store = getStore()
    // 根据路由的路径，给store添加数据
    const matchRedoutes = matchRoutes(Routes, req.path)
    console.log(matchRedoutes)
    // const matchRoutes = []
    // Routes.some(route => {
    //     const match = matchPath(req.path, route)
    //     if (match) {
    //         matchRoutes.push(route)
    //     }
    // })

    console.log(matchRoutes)

    const content = renderToString((
        <Provider store={ store }>
            <StaticRouter location={req.path} context={{}}>
                <div>
                    { Routes.map(route => {
                        <Route { ...route } />
                    }) }
                </div>
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