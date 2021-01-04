import React from 'react';
import { Progress } from 'reactstrap';

interface IProps {
    stats: Array<Object>;
}
const colors = [
    'danger',
    'info',
    'warning',
    'info',
    'warning',
    'primary',
]

const PokeStats: React.FC<IProps> = ({ stats }) => {
    return(
        <div>
            {
                stats && 
                stats.map((a:any, index) => <div key={a.base_stat + index + a.stat.name}>{a.stat.name.toUpperCase().replace('-', ' ')}
                    <Progress color={colors[index]} value={a.base_stat} max='200'>{a.base_stat}</Progress>
                    </div>)
            }
        </div>
    )
}

export default PokeStats;