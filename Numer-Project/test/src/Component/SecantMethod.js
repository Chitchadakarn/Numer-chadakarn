import React, { Component } from 'react';
import {Input,Button,Table} from 'antd'
import {compile , abs} from 'mathjs'
import './styles.css'
const header = [{
    title: 'Iteration',
    dataIndex: 'iteration'
}, {
    title:'x',
    dataIndex:'x'
},{
    title:'xnew',
    dataIndex:'xnew'
},{
    title: 'Error',
    dataIndex: 'Error',
}]
class SecantMethod extends Component {
    state = {
        result:[],
        equation: "",
        Xnew:"",
        Xold:"",
        X:"",
        output: 0,
        condition: "",
    }
    input = (e) => {
        this.setState({[e.target.name]:e.target.value},console.log(this.state))
    }
    compute = () => {
    
        var xold = this.state.Xold;
        xold = parseFloat(xold);
        var x = this.state.X;
        x = parseFloat(x);
        
        const code = compile(this.state.equation);
     
        var result1 = [];
        var i = 1;
        
            do {
                
            
                let fo = {
                    x:xold
                };
                let fx = {
                    x:x
                };
                var diff = (code.evaluate(fo)-code.evaluate(fx))/(xold-x);
                var xnew = x-(code.evaluate(fx)/diff)
                
                var check = abs((xnew-x)/xnew)*100;
                           
                xold = x;
                x = xnew;
                result1.push({
                    'iteration': i,
                    'x' : xold,
                    'Error': check,
                });
           
                i++;
                console.log(check)
            } while (check > 0.000001 && i<100);
    
        this.setState({ result: result1 });
    }

    render() {
        return (
            <div className='bg' class="container">
            <h2>SecantMethod</h2>
                <div className='inputbox'>
                <Input name="equation" onChange={this.input.bind(this)} placeholder="f(x)" />
                <Input name="Xold" onChange={this.input.bind(this)} placeholder="Xold" />
                <Input name="X" onChange={this.input.bind(this)} placeholder="X" />                    
                <Button type="ghost" size="large" shape="round"onClick={this.compute.bind(this)}>Submit</Button>
                </div>
                {<Table style={{width:"900px",margin:"auto"}} dataSource={this.state.result} columns={header} pagination={false} />}
            </div>
        );
    }
}

export default SecantMethod;