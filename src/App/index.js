import React from 'react'
import Headers from '../Component/Headers'
import { Grid } from 'semantic-ui-react'
import images from '../Component/Headers/eng.png'

const styles = {
    parents: {
        position : 'relative'
    },
    child: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}

class App extends React.Component {
    render(){
        return (
        <div style={styles.position}>
            <div style={styles.child}>
                <Grid centered>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <img src={images} alt="imgs"/>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Headers/>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
        )
    }
}

export default App