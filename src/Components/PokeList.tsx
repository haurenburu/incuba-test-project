import React from 'react';
import PokeCard from './PokeCard';

import { Row } from 'reactstrap';

const PokeList: React.FC = () => {
    return (
        <>
        <h1>PokeList</h1>
        <Row>
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
        </Row>
        </>
    )
}

export default PokeList;