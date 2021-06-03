import React from 'react';
import { Container, Row } from 'react-bootstrap';

import polytope from '../assets/images/Polytope.png';
import favicon from '../assets/images/favicon.ico';
import EQ from '../assets/images/EQ.png';
import NoshTome from '../assets/images/NoshTome.png';
import Card from './Card';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            items: [
                {
                    id: 0,
                    title: 'Jammming',
                    subTitle: 'Spotify playlist App - JS, React, Spotify API',
                    imgSrc: favicon,
                    link: 'https://github.com/rLoweth/Jammming',
                    selected: false
                },
                {
                    id: 1,
                    title: 'EQ plugin',
                    subTitle: 'A graphic equalizer audio plugin - C++, JUCE, STL',
                    imgSrc: EQ,
                    link: 'https://github.com/rLoweth/EQpedal',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Nosh Tome',
                    subTitle: 'Recipe web app - React, Rails, PostgreSQL',
                    imgSrc: NoshTome,
                    link: 'https://github.com/rLoweth/nosh_tome',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(event => this.handleCardClick(item.id, event))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel;