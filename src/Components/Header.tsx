import React from 'react';

interface IPokesResult extends Response {
    results: Array<Object>
}

const PokeList: React.FC = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark d-flex justify-content-center mb-2">
            <a className="navbar-brand" href="https://github.com/haurenburu">
                Incuba Test Project
            </a>
            </nav>
        </header>
    )
}

export default PokeList;