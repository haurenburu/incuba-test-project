import React from 'react';
import PokeCard from './PokeCard';

import { Row } from 'reactstrap';

interface IPokesResult extends Response {
    results: Array<Object>
}

const PokeList: React.FC = () => {

    const [pokes, setPokes] = React.useState<Array<Object>>([{}]);

    React.useEffect(() => {
        const func = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon');
            const json: IPokesResult = await res.json();
            // console.log(json.results);
            setPokes(json.results);
        }

        func();

    }, [])

    return (
        <>
        <Row>
            { pokes.map(( poke: any, index) => {
                return <PokeCard key={poke.url + index + poke.name} url={poke.url} />
            }) }
        </Row>
        </>
    )
}

export default PokeList;