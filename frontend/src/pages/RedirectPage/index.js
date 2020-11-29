import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StatsContainer } from './styles';

import ShortenerService from '../../services/shortenerService';

class RedirectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            url: '',
            errorMessage: '',
        }
    }

    async componentDidMount() {
        const { code } = this.props.match.params;

        try {
            const service = new ShortenerService();
            const { url } = await service.getLink(code);

            window.location = url;
        } catch (error) {
            this.setState({ isLoading: false, errorMessage: 'Ops, a URL solicitada não existe.'})
        }
    }

    render() {
        const { errorMessage } = this.state;

        return (
            <Container>
                {errorMessage ? (
                    <>
                        <Header>Seu novo encurtador de URLs <FontAwesomeIcon size="2x" icon={["fab", "angellist"]} /></Header>
                        <StatsContainer className="text-center">
                            <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
                            <p className="m-3">{errorMessage}</p>
                            <a className="btn btn-sm btn-primary" href="/">Encurtar Nova URL</a>
                        </StatsContainer>
                    </>
                ) : (
                    <p className="text-center">Redirecionando ... </p>
                )}
            </Container>

        )
    } 
}

export default RedirectPage;