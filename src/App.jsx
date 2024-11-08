import React from 'react'
import FoodOrder from './components/FoodOrder'
import Client from './components/Client'

function App() {
    return (
        <div className='d-flex p-5 gap-5'>
            <FoodOrder />
            <Client />
        </div>
    )
}

export default App
