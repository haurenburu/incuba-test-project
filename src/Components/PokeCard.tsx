import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Progress, Badge } from 'reactstrap';

import PokeStats from './PokeStats';
import PokeBadge from './PokeBadge';

function formatNumber(num: Number) {
    if(num < 10) {
        return '00' + num;
    } else if (num < 100) {
        return '0' + num;
    } else {
        return num;
    }
}

const PokeCard: React.FC = () => {
    return(
        <Col xs='12' md='6' lg='3' className='my-2 my-2'>
            <Card color='light'>
                <CardBody>
                    <h3><Badge color="secondary">#001</Badge> Heading</h3>
                </CardBody>
                <img style={{ margin: '0 5%', maxWidth: '500px', width: '90%' }} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt=""/>
                <Badge>SPRITES</Badge>
                <Row>
                    <Col xs='3' lg='2'><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""/></Col>
                    <Col xs='3' lg='2'><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png" alt=""/></Col>                  
                    <Col xs='3' lg='2'><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" alt=""/></Col>                  
                    <Col xs='3' lg='2'><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png" alt=""/></Col>                  
                </Row>
                <Badge>TYPE</Badge>
                <CardBody>
                    <PokeBadge />
                    <PokeBadge />
                </CardBody>
                <Badge>STATS</Badge>
                <CardBody>
                    <PokeStats/>
                </CardBody>
                <Badge>GENDER RATIO</Badge>
                <CardBody>
                    <Progress multi>
                        <Progress bar value="50" />
                        <Progress bar value="50" color='danger'/>
                    </Progress>
                    <div className="text-center mt-2">50% Male, 50% Female</div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default PokeCard;

//<></>