import React from 'react';
import { Badge } from 'reactstrap';

function pickAColor(type: String) {
    return '#f0f';
}

const PokeBadge: React.FC = () => {
    return(
        <Badge style={{background: pickAColor('asda'), padding: '10px', margin: '2.5%', minWidth: '80px', width: '45%' }}>
            THUNDER
        </Badge>
    )
}

export default PokeBadge;

//<></>