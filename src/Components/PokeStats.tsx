import React from 'react';
import { Progress } from 'reactstrap';

const PokeStats: React.FC = () => {
    return(
        <>
            HP:     <Progress value="75" max="300" color='danger'/>
            ATK:    <Progress value="60" max="300" color='info'/>
            DEF:    <Progress value="70" max="300" color='warning'/>
            SATK:   <Progress value="70" max="300" color='info'/>
            SDEF:   <Progress value="70" max="300" color='warning'/>
            SPEED:  <Progress value="70" max="300" color='primary'/>
        </>
    )
}

export default PokeStats;

//<></>