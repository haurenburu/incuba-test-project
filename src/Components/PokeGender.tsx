import React from 'react';

import { CardBody, Progress } from 'reactstrap';

interface IProps {
    id: Number;
}

interface IPokesResult extends Response {
    gender_rate: Number
}

const PokeGender: React.FC<IProps> = ({ id }) => {
    const [gender, setGender] = React.useState<Number>();
    const [males, setMales] = React.useState<Number>(0);
    const [females, setFemales] = React.useState<Number>(0);

    React.useEffect(() => {
        const func = async () => {
            if(id) {
                const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/'+id);
                const json: IPokesResult = await res.json();
                setGender(json.gender_rate);
            }
        }

        func();

        setMales(100 - Number(gender) * 12.5)
        setFemales(Number(gender) * 12.5)
    }, [id, gender])
    
    return(
         <CardBody>
            <Progress multi>
                <Progress bar value={`${males}`} />
                <Progress bar value={`${females}`} color='danger'/>
            </Progress>
            <div className="text-center mt-2">
                {`${males}% Males, ${females}% Females`}
            </div>
        </CardBody>
    )
}

export default PokeGender;

//<></>