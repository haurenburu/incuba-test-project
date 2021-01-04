import React from 'react';
import PokeList from './Components/PokeList';
import { Container } from 'reactstrap';

const App: React.FC = () => {
    return (
        <Container>
            <PokeList />
        </Container>
  );
}

export default App;
