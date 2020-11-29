import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/Header';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Header title="Título">Header Customizado</Header>
                <FontAwesomeIcon icon="check-square" /> Pitu - URL Shortener
            </Container>
        )
    } 
}

export default HomePage;