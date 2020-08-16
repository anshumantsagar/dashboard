import React from 'react';

//css
import classes from './Table.module.css'

class table extends React.Component {
    state = {
        list:this.props.list
    }
    render () {
        let newList = this.state.list.map((person) => {
            return (
                <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.designation}</td>
                    <td><input className={classes.Input} type="checkbox" checked={person.avilable} onChange={() => false}/></td>
                    <td><button className={classes.GreenButton} onClick={this.props.onEdit}>Edit</button><button className={classes.RedButton}>Delete</button></td>
                </tr>
            )
        })
        let table = <div style={{color:'red'}}>There are no employees to display</div>
        if(this.state.list.length > 0) {
            table = <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Avilability</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newList}
                        </tbody>
                    </table>
        }
        return (
            <div className={classes.Container}>
                {table}
            </div>
        );
    }
    
}

export default table;