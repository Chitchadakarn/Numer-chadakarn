import React, { Component } from 'react';
import {Input,Button,Table} from 'antd'
import axios from 'axios';


import './styles.css'
const header = [{
    title: 'Iteration',
    dataIndex: 'iteration'
}, {
 
    title:'xnew',
    dataIndex:'xnew'
}, {
    title: 'Error',
    dataIndex: 'Error',
}]
export default class NewtonRapson extends Component {
    state = {
        result:[],
        equation: "",
        Xnew:"",
        Xold:"",
        X:"",
        diiffX:"",
        output: 0,
        condition: "",
    }
    input = (e) => {
        this.setState({[e.target.name]:e.target.value},console.log(this.state))
    }
   
    
    cal=() =>{
        axios
      .post("http://localhost:8000/newtonapi/newtonapi", {
        x :parseFloat(this.state.X),
       equation: this.state.equation
      })
      .then(res => {
        this.setState({result:res.data.result})
        console.log(this.state.result)
      })
      .catch(err => {
        console.log(err);
      });
        
    }

    render() {
        return (
            <div className='bg'>
            <h2 class="font-h2">NewtonRapson</h2>
                <div className='inputbox'>
                <Input class="input" style={{width:"250px",margin:"1rem"}}name="equation" onChange={this.input.bind(this)} placeholder="f(x)" />
               
                <Input style={{width:"250px",mgargin:"1rem"}} name="X" onChange={this.input.bind(this)} placeholder="X" />                    
                
                </div>
                <Button size="middle" shape="round" type="ghost" style={{margin:"1rem"}}  onClick={this.cal.bind(this)}>Submit</Button>
                {<Table style={{width:"530px",margin:"1rem"}} dataSource={this.state.result} columns={header} pagination={false} />}
            </div>
        );
    }
}

