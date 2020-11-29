import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';

import ShortenerService from '../../services/shortenerService';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StatsContainer, StatsRow, StatsBox, StatsBoxTitle } from './styles';

class StatsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            shortenedURL: {},
            errorMessage: '',
        }
    }

    render() {
        const { errorMessage, shortenedURL } = this.state;
        
        return (
            <Container>
                <Header>Estatísticas:</Header>
                {errorMessage ? (
                    <StatsContainer>
                        <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
                        <p className="m-3">{errorMessage}</p>
                        <a className="btn btn-sm btn-primary" href="/">Encurtar Nova URL</a>
                    </StatsContainer>

                ) : (
                    <p>Texto qualquer</p>
                )}
            </Container>
        )
    } 
}

export default StatsPage;