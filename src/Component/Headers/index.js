import React from 'react'
import { Container, List } from 'semantic-ui-react';


const styles = {
   
    bodies : {
        fontSize : "3em",
        fontFamily: 'Lalezar',
        textAlign: 'center'
    },
    footers : {
        fontSize : "4em",
        textAlign: 'center'
    },
    foots : {
        fontSize : '1.2em',
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
                        <span>Email : fadillah@merahlabs.id</span>
                    </div>  
                </div>
                <div style={styles.footers}>
                <List horizontal >
                    <List.Item><a className="text-dark" href="https://www.linkedin.com/in/fadillahbilqis/" target="_blank" rel="noopener noreferrer">LinkedIn</a></List.Item>
                    <List.Item><a className="text-dark" href="https://github.com/fabilqis" target="_blank" rel="noopener noreferrer">Github</a></List.Item>
                    <List.Item><a className="text-dark" href="https://www.behance.net/jo_anne" target="_blank" rel="noopener noreferrer">Behance</a></List.Item>
                </List>
                </div>
            </Container>
        </div>
        )
    }
}

export default Headers