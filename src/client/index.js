import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from '../Routes'
import getStore from '../store'

const App = () => {
    return (
        <Provider store={ getStore() }>
            <BrowserRouter>
                <div>
                    { Routes.map(route => {
                        <Route { ...route } />
                    }) }
                </div>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.hydrate(
    <App />,
    document.getElementById('root')
)