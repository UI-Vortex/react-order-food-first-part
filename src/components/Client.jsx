import React from 'react'

function Client() {
    return (
        <>
            <div className="flexbox-client">
                <div className="client">
                    <h1 style={{ fontSize: '50px', marginLeft: '100px' }}>Client Name:</h1>
                    <div className="line" style={{ background: 'black', width: '1000px', height: '10px' }}></div>
                </div>
                <div className="client-ordered-food">

                </div>
                <div className="client-food" style={{ transform: 'translateY(443px)' }}>
                    <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Choose Food You like
                        </button>
                        <ul className="dropdown-menu w-100 bg-warning">
                            <li><a className="dropdown-item" href="#">Chicken</a></li>
                            <li><a className="dropdown-item" href="#">coke</a></li>
                            <li><a className="dropdown-item" href="#">Palov</a></li>
                            <li><a className="dropdown-item" href="#">cake</a></li>
                            <li><a className="dropdown-item" href="#">Burger</a></li>
                            <li><a className="dropdown-item" href="#">Pizza</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Client
