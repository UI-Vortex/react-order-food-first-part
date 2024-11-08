import React, { useState } from 'react'
import foodLogo from '../assets/Good-Food-King-Logo-Template.webp'

function FoodOrder() {
    const [name, setName] = useState('')
    const [todo, setTodo] = useState([])
    const [phone, setPhone] = useState('')

    const handleAdd = () => {
        if (name !== '' && phone !== '' && todo !== '') {
            setTodo([...todo, name, phone])
        }
        setName('')
        setPhone('')
    }

    return (
        <>
            <div className="flexbox-food">
                <div className="food-order-flexbox" style={{ width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '50px', position: 'relative' }}>Best Food</h1>
                    <div className="line" style={{ background: 'black', width: '225px', height: '10px', }}></div>
                    <div className="food-order-customers mt-3" style={{padding: '5px 10px' }} >
                        <ul className='d-flex flex-column gap-1' style={{textDecoration: 'none', listStyle: 'none'}}>
                            <li className='d-flex flex-column gap-1 bg-warning text-successful' style={{width: '230px', transform: 'translateX(-15px)'}}>
                                {
                                    todo.map(todos =>
                                        <a key={todos}>{todos}</a>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="food-todos d-flex flex-column align-items-center" style={{ transform: 'translateY(400px)', position: 'absolute', bottom: '60%' }}>
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="food-input-name form-control" placeholder=' write your name...' required style={{ width: '200px' }} />
                        <input onChange={(e) => setPhone(e.target.value)} value={phone} type="number" className="food-input-phone form-control" placeholder='write your number...' required style={{ width: '200px' }} />
                        <button onClick={() => handleAdd()} className="food-add btn btn-success" style={{ width: '200px', marginTop: '10px' }}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodOrder
