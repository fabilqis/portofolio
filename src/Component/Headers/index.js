import React from 'react'
import { Container, List } from 'semantic-ui-react';


const styles = {
   
    bodies : {
        fontSize : "3.2em",
        fontFamily: 'Lalezar',
        textAlign: 'center'
    },
    foots : {
        fontSize : '1.4em',
        textAlign: 'center'
    }
}

class Headers extends React.Component {
    render(){
        return(
        <div>
            <Container>
                <div style={styles.bodies}>
                    <p>Fadillah Bilqis</p>
                </div>
                <div>
                    <div style={styles.foots}>
                        <p>Email : fadillah@merahlabs.id</p>
                    </div>  
                </div> 
            </Container>
        </div>
        )
    }
}

export default Headers