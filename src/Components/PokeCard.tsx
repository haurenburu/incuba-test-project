import React from 'react';
import { Row, Col, Card, CardBody, Badge } from 'reactstrap';

import PokeStats from './PokeStats';
import PokeBadge from './PokeBadge';

function formatNumber(num: Number) {
    if(num < 10) return '00' + num;
    else if (num < 100) return '0' + num;
    return num;
}

function formatName(name: String) {
    return ' ' + name.charAt(0).toUpperCase() + name.slice(1);
}


interface IProps {
    url: string;
}

interface IPokemon {
    id: Number;
    name: string;
    sprites: ISprites;
    types: Array<Object>;
}

interface ISprites {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
}


const PokeCard: React.FC<IProps> = ({ url }) => {

    const [pokemon, setPokemon] = React.useState<IPokemon>()

    React.useEffect(() => {
        const func = async () => {
            const res = await fetch(url);
            const json: IPokemon = await res.json();
            setPokemon(json);
        }
        func();
    }, [url])

    return(
        <Col xs='12' md='6' lg='3' className='my-2 my-2'>
            <Card color='light'>
                <CardBody>
                    {/* <h4><Badge color="secondary">#{formatNumber(pokemon?.id!)}</Badge> {pokemon?.name}</h4> */}
                    <h4><Badge color="secondary">#{formatNumber(pokemon?.id!)}</Badge>
                        { pokemon && formatName(pokemon?.name!) }
                    </h4>
                </CardBody>
                <img style={{ margin: '0 5%', maxWidth: '500px', width: '90%' }} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber(pokemon?.id!)}.png`} alt=""/>
                <Badge>SPRITES</Badge>
                <Row className="d-flex justify-content-center">
                    <Col xs='5'><img src={ pokemon?.sprites.front_default} alt={`${pokemon?.name} font normal`}/></Col>
                    <Col xs='5'><img src={ pokemon?.sprites.front_shiny} alt={`${pokemon?.name} back shiny`}/></Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xs='5'><img src={ pokemon?.sprites.back_default} alt={`${pokemon?.name} back normal`}/></Col>
                    <Col xs='5'><img src={ pokemon?.sprites.back_shiny} alt={`${pokemon?.name} back shiny`}/></Col>
                </Row>
                <Badge>TYPE</Badge>
                <CardBody>
                    {pokemon?.types.map((tp: any, index) => {
                        return <PokeBadge key={tp.name + index + tp.type.name} type={tp.type.name} />
                    })}

                    {/* <PokeBadge type={pokemon?.types[0].type.name}/>
                    <PokeBadge type=''/> */}
                </CardBody>
                <Badge>STATS</Badge>
                <CardBody>
                    <PokeStats/>
                </CardBody>
                <Badge>GENDER RATIO</Badge>
                {/* <CardBody>
                    <Progress multi>
                        <Progress bar value="50" />
                        <Progress bar value="50" color='danger'/>
                    </Progress>
                    <div className="text-center mt-2">50% Male, 50% Female</div>
                </CardBody> */}

            </Card>
        </Col>
    )
}

export default PokeCard;

//<></>