import React from 'react';
import { Badge } from 'reactstrap';

interface IProps {
    type: String;
}

function pickAColor(type: String) {
    switch(type) {
        case 'normal': return '#A8A878';
        case 'fighting': return '#B93328';
        case 'flying': return '#A890F0';
        case 'poison': return '#A14CA0';
        case 'ground': return '#E0C068';
        case 'rock': return '#B8A038';
        case 'bug': return '#A8B82A';
        case 'ghost': return '#705898';
        case 'steel': return '#B8B8D0';
        case 'fire': return '#F08030';
        case 'water': return '#6890F0';
        case 'grass': return '#78C850';
        case 'electric': return '#F8D036';
        case 'psychic': return '#F15687';
        case 'ice': return '#98D8D8';
        case 'dragon': return '#776BF8';
        case 'dark': return '#705848';
        case 'fairy': return '#EE99AC';
        default: return '#68A090';
    }
}

const PokeBadge: React.FC<IProps> = ({ type }) => {
    return(
        <Badge style={{background: pickAColor(type), padding: '10px', margin: '2.5%', minWidth: '80px', width: '45%' }}>
            { type }
        </Badge>
    )
}

export default PokeBadge;

//<></>