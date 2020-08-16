import React, { Component } from 'react';
import Modal from 'react-modal';


//css
import classes from './App.module.css'

//components
import Navbar from './components/Navbar/Navbar';
import Analytics from './components/Analytics/Analytics';
import Table from './components/Table/Table';
Modal.setAppElement('#root')

class App extends Component {
  state = {
    isModalOpen : false,
    name: '',
    gender: '',
    age: '',
    designation:'',
    department:'',
    joiningDate:'',
    employeeList: []
  } 

  addEmployee = () => {
    const data = {
      id:Date.now(),
      name: this.state.name,
      gender: this.state.gender,
      age: this.state.age,
      designation: this.state.designation,
      department: this.state.department,
      joiningDate: this.state.joiningDate,
      avilable: true
    };
    let newEmployeeList = this.state.employeeList;
    newEmployeeList.push(data);
    this.setState({employeeList:newEmployeeList});
    console.log(this.state.employeeList);
    this.setState({isModalOpen:false});
  }

  render () {
    return (
      <div className="App">
        <Navbar/>
        <Analytics 
          addEmployee={() =>this.setState({isModalOpen:true})} 
          total={this.state.employeeList.length}/>
        <Table 
          onEdit={() =>this.setState({isModalOpen:true})}
          list={this.state.employeeList}/>
        <Modal
          isOpen={this.state.isModalOpen} 
          onRequestClose={() =>this.setState({isModalOpen:false})}
          style={{
            overlay: {
              backgroundColor: 'grey'
            }
          }}
          >
              <div className={classes.Form}>
                  <section>Add Employee </section>
                  <section>
                      <span>
                          <label>Name</label>
                          <input 
                            placeholder="Enter" 
                            // onChange={(event) => {
                            //   this.setState((prevState) => {
                            //     prevState.addEmployeeData.name = event.target.value;
                            //     return prevState;
                            //   })
                            // }}
                            onChange={event => this.setState({name:event.target.value})}
                            value={this.state.name}
                          />
                      </span>
                      <span>
                          <label>Gender</label>
                          <select 
                            onChange={event => this.setState({gender:event.target.value})}
                            value={this.state.gender}>
                              <option>Select</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                          </select>
                      </span>
                  </section>
                  <section>
                      <span>
                          <label>Age</label>
                          <input 
                            placeholder="Enter"
                            onChange={event => this.setState({age:event.target.value})}
                            value={this.state.age}/>
                      </span>
                      <span>
                          <label>Designation</label>
                          <input 
                            placeholder="Enter"
                            onChange={event => this.setState({designation:event.target.value})}
                            value={this.state.designation}/>
                      </span>
                  </section>
                  <section>
                      <span>
                          <label>Department</label>
                          <input 
                            placeholder="Enter"
                            onChange={event => this.setState({department:event.target.value})}
                            value={this.state.department}/>
                      </span>
                      <span>
                          <label>Joining Date</label>
                          <input 
                            type="date" 
                            onChange={event => this.setState({joiningDate:event.target.value})}
                            value={this.state.joiningDate}/>
                      </span>
                  </section>
                  <section>
                      <span style={{display:'flex',flexDirection:'row'}}>
                          <button className={classes.CanceButton} onClick={() =>this.setState({isModalOpen:false})}>Cancel</button>
                          <button className={classes.SaveButton} onClick={this.addEmployee}>Save</button>
                      </span>
                  </section>
              </div>
        </Modal>
      </div>
    );
  }
  
  
}

export default App;
