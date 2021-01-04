import React from 'react';
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Row } from 'reactstrap';

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
                    <CardTitle>#{formatNumber(1)}</CardTitle>
                    <CardSubtitle>Bulbasaur</CardSubtitle>
                </CardBody>
                <img style={{ margin: '5%', maxWidth: '500px', width: '90%' }} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt=""/>
                <Row>
                    <Col xs='3' lg='2'><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""/></Col>
                    <Col xs='3' lg='2'><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png" alt=""/></Col>                  
                    <Col xs='3' lg='2'><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png" alt=""/></Col>                  
                    <Col xs='3' lg='2'><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png" alt=""/></Col>                  
                </Row>
                <CardBody>
                    <CardText>GRASS POISON</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default PokeCard;

//<></>