import React from 'react';
import PokeCard from './PokeCard';

import { Row } from 'reactstrap';

interface IPokesResult extends Response {
    results: Array<Object>
}

interface IProps {
    page: Number;
}
/**
 * 
 * @param param0 Gets a page number from react props, that number going to be multiplied
 * by 21 (actually the number of items per page we want) in that case we have 21 per page
 * on 3 "rows" which means 7 by 3
 */
const PokeList: React.FC<IProps> = ({ page }) => {

    const [pokes, setPokes] = React.useState<Array<Object>>([{}]);

    
    React.useEffect(() => {
        const func = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${Number(page) * 21}&limit=21`);
            const json: IPokesResult = await res.json();
            // console.log(json.results);
            setPokes(json.results);
        }

        func();

    }, [page])

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