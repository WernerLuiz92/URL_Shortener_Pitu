import React from 'react';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap';
import { ContentContainer, Form, AdsBlock } from './styles';
import ShortnerService from '../../services/shortenerService';
import vars from '../../configs/vars';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            url: '',
            code: '',
            errorMessage: '',            
        }
    }

    handleSubmit = async(event) => {
        event.preventDefault();

        const { url } = this.state;

        this.setState({ isLoading: true, errorMessage: '' });

        if(!url) {
            this.setState({ isLoading: false, errorMessage: 'Informe uma url para encurtar!' });
        } else {
            try {
                const service = new ShortnerService();
                const result = await service.generate({ url });

                this.setState({ isLoading: false, code: result.code });
            } catch (error) {
                this.setState({ isLoading: false, errorMessage: 'Ops, ocorreu um erro ao tentar encurtar a url.' });
            }
        }
    }

    copyToClipboard = () => {
        const element = this.inputURL;
        element.select();
        document.execCommand('copy');
    }

    render() {

        const { isLoading, errorMessage, code } = this.state;

        return (
            <Container>
                <Header>Seu novo encurtador de URLs <FontAwesomeIcon size="2x" icon={["fab", "angellist"]} /></Header>
                <ContentContainer>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Digite a url para encurtar"
                                defaultValue=""
                                onChange={e => this.setState({ url: e.target.value })}
                                autoComplete="off"                            
                            />
                            <InputGroup.Append>
                                <Button variant="primary" type="submit"><FontAwesomeIcon icon="compress-alt" /> Encurtar</Button>    
                            </InputGroup.Append> 
                        </InputGroup>

                        {isLoading ? (
                            <Spinner animation="border" />
                        ) : (
                            code && (
                                <>
                                    <InputGroup>
                                        <FormControl
                                            autoFocus={true}
                                            defaultValue={vars.HOST_APP + code}
                                            ref={(input) => this.inputURL = input}                          
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary" onClick={() => this.copyToClipboard()}><FontAwesomeIcon icon={["far", "copy"]} /> Copiar</Button>    
                                        </InputGroup.Append> 
                                    </InputGroup>
                                    <p>Para acompanhar as estatísticas do seu link, acesse {vars.HOST_APP + code}/stats</p>
                                </>
                            )
                        )}
                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    </Form>
                </ContentContainer>
                <ContentContainer>
                    <AdsBlock>Adsense</AdsBlock>
                </ContentContainer>
            </Container>
        )
    } 
}

export default HomePage;