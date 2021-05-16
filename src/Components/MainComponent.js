import React from 'react';
import FromComponent from './FormComponent.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function MainComponent (){
        return (
            <form style={{textAlign: 'center'}}>
                <CssBaseline />
                <Container>
                    <FromComponent/>
                </Container>
            </form>
        )
}

export default MainComponent;