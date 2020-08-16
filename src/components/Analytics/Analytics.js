import React, { Component } from 'react';

//css
import classes from './Analytics.module.css';

//components
// import Form from '../Form/Form';

class analytics extends Component {
    
    render (){
        return (
            <div className={classes.Analytics}>
                <p>Avilable: <strong>08</strong></p>
                <p>Total: <strong>{this.props.total}</strong></p>
                <button className={classes.AnalyticsButton} onClick={this.props.addEmployee}>+ Add Employee</button>
                {/* <Form/> */}
            </div>
        );
    }
    
}

export default analytics;