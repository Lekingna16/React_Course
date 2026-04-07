import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
                <li>
                    <Link to='/orders'>Orders</Link>
                </li>
                <li>
                    <Link to='/setting'>Setting</Link>
                </li>
                <li><Link to='/pr'>Checkout</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Dashboard