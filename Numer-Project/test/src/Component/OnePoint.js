import React, { Component } from 'react';
import {Input,Button,Table} from 'antd'
import {compile,abs} from 'mathjs'
import './styles.css'
const header = [{
    title: 'Iteration',
    dataIndex: 'iteration'
}, {
    title: 'x',
    dataIndex: 'x'
}, {
    title: 'Error(%)',
    dataIndex: 'Error',
}]
class OnePoint extends Component {
    state = {
        result:[],
        equation:"",
        X:"",
        output: 0,
        condition: "",
    }
    input = (e) => {
        this.setState({[e.target.name]:e.target.value},console.log(this.state))
    }
    compute = () => {
        var x = this.state.X;
        x = parseFloat(x);
        var check = parseFloat(0.000000);
        
        const code = compile(this.state.equation);
      
        var result1 = [];
        var i = 1;
            do {  
                let fx = { 
                x: x
                };
     
                var xnew = code.evaluate(fx);
                console.log(xnew)
            if (i>0){
                check = abs(((xnew - x) / xnew)*100);
                console.log(check)
            }
            i++;
            
             x = xnew;
                result1.push({
                    'iteration': i,
                    'x': x,
                    'Error': check,
                });
                
           
                
            } while (check > 0.000001 && i < 100);
        
        this.setState({ result: result1 });
    }

    render() {
        return (
            <div className='bg' >
            <h2 class="font-h2">OnePoint</h2>
                <div className='inputbox' >
                    <Input class="input" style={{width:"250px",margin:"1rem"}} name="equation" onChange={this.input.bind(this)} placeholder="f(x)" />
                    <Input  style={{width:"250px",mgargin:"1rem"}} name="X" onChange={this.input.bind(this)} placeholder="X" />
                    
                </div>
                <Button  size="middle" shape="round" type="ghost" style={{margin:"1rem"}} onClick={this.compute.bind(this)}>Submit</Button>
                {<Table class="table" style={{width:"530px",margin:"1rem"}} dataSource={this.state.result} columns={header } pagination={false} />}
            
            </div>
        );
    }
}

export default OnePoint;