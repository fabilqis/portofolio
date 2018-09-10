import React from 'react'
import Headers from '../Component/Headers'
import { Grid } from 'semantic-ui-react';

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
                <Grid centered columns={1}> 
                        <Headers/>
                </Grid>
            </div>
        </div>
        )
    }
}

export default App