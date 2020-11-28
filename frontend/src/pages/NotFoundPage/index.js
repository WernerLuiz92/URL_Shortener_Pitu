import React from 'react';
import { render } from 'react-dom';

class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>Erro 404 - Página não encontrada!</p>
        )
    } 
}

export default NotFoundPage;