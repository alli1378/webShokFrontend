import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashord from '../dashboard/Dashboard'
import Customers from '../dashboard/Customers'
const Routes = () => {
    return (
        <div>
            <Switch>
            <Route path='/' component={Dashord}/>
            <Route path='/costomers' component={Customers}/>
                
            </Switch>
        </div>
    )
}

export default Routes
