import React from 'react';
import PokeList from './Components/PokeList';
import Header from './Components/Header';

import { Container } from 'reactstrap';

const App: React.FC = () => {
    const [pages, setPages] = React.useState([0]);
    const [infinity, setInfinity] = React.useState(true);

    React.useEffect(() => {
        let waiting = false;
        const infinityScroll = () => {
            if (Number(pages) >= 55) setInfinity(false);
            
            if(infinity){
                const scroll = window.scrollY;
                const height =  document.body.offsetHeight - window.innerHeight;

                if(scroll > height * .75 && !waiting) {
                    setPages((pages) => [...pages, pages.length])
                    waiting = true;
                    setTimeout(() => {
                        waiting = false;
                    }, 500);
                }
            }
            

        }
        window.addEventListener('wheel', infinityScroll);
        window.addEventListener('scroll', infinityScroll);

        return () => {
            window.removeEventListener('wheel', infinityScroll);
            window.removeEventListener('scroll', infinityScroll);
        }
    }, [infinity, pages])
    
    return (
        <>
            <Header />
            <Container>

                {pages.map((page) => {
                    return <PokeList key={page} page={page} />
                })}

            </Container>
        </>
  );
}

export default App;
