import React from 'react';
import { Container, Row } from 'react-bootstrap';

import polytope from '../assets/images/Polytope.png';
import Card from './Card';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            items: [
                {
                    id: 0,
                    title: 'First Project',
                    subTitle: 'This is my first project',
                    imgSrc: polytope,
                    link: '//https://github.com/rLoweth',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Second Project',
                    subTitle: 'This is my second project',
                    imgSrc: polytope,
                    link: 'https://github.com/rLoweth',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Third Project',
                    subTitle: 'This is my third project',
                    imgSrc: polytope,
                    link: 'https://github.com/rLoweth',
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