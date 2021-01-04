import React from 'react';
import { Row, Col, Card, CardBody, Badge } from 'reactstrap';

import PokeStats from './PokeStats';
import PokeBadge from './PokeBadge';
import PokeGender from './PokeGender';

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
    height: string;
    weight: string;
    types: Array<Object>;
    stats: Array<Object>;
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
            if(url){
                const res = await fetch(url);
                const json: IPokemon = await res.json();
                setPokemon(json);
            }
        }
        func();
    }, [url])

    return(
        <Col xs='12' md='6' lg='3' className='my-2 my-2'>
            <Card color='light'>
                <CardBody>
                    <h4><Badge color="secondary">#{formatNumber(pokemon?.id!)}</Badge>
                        { pokemon && formatName(pokemon?.name!) }
                    </h4>
                </CardBody>
                {pokemon?.id &&
                    <img style={{ margin: '0 5%', maxWidth: '500px', width: '90%' }} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber(pokemon?.id!)}.png`} alt=""/>
                }
                
                <Badge>SPRITES</Badge>
                <Row className="d-flex justify-content-center">
                    <Col xs='5'><img src={ pokemon?.sprites.front_default} alt={`${pokemon?.name} font normal`}/></Col>
                    <Col xs='5'><img src={ pokemon?.sprites.back_default} alt={`${pokemon?.name} back normal`}/></Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xs='5'><img src={ pokemon?.sprites.back_shiny} alt={`${pokemon?.name} back shiny`}/></Col>
                    <Col xs='5'><img src={ pokemon?.sprites.front_shiny} alt={`${pokemon?.name} back shiny`}/></Col>
                </Row>
                <Badge>TYPE</Badge>
                <CardBody>
                    {pokemon?.types.map((tp: any, index) => {
                        return <PokeBadge key={tp.name + index + tp.type.name} type={tp.type.name} />
                    })}
                </CardBody>
                <Badge>STATS</Badge>
                <Col className="pt-3" xs='12'>Height: {Number(pokemon?.height)/10} m </Col>
                <Col xs='12'>Weight: {Number(pokemon?.weight)/10} Kg</Col>
                <CardBody>
                    <PokeStats stats={
                        pokemon! &&
                        pokemon?.stats!}/>
                </CardBody>
                <Badge>GENDER RATIO</Badge>
                <PokeGender id={pokemon?.id!}/>
            </Card>
        </Col>
    )
}

export default PokeCard;

//<></>