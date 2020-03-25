import React, { Component } from 'react';
import {Input,Button,Table} from 'antd'
import {compile,abs} from 'mathjs'
import './styles.css'
const header = [{
    title: 'Iteration',
    dataIndex: 'iteration'
}, {
    title: 'xl',
    dataIndex: 'xl'
}, {
    title: 'xm',
    dataIndex: 'xm'
}, {
    title: 'xu',
    dataIndex: 'xu',
}, {
    title: 'Error',
    dataIndex: 'Error',
}]
class FalsePosition extends Component {
    state = {
        result:[],
        equation: "",
        Xl:"",
        Xu:"",
        Xm:"",
        output: 0,
        condition: "",
    }
    input = (e) => {
        this.setState({[e.target.name]:e.target.value},console.log(this.state))
    }
    compute = () => {
        var xl = this.state.Xl;
        xl = parseFloat(xl);
        var xu = this.state.Xu;
        xu = parseFloat(xu);
        var xold=xu;
        
        const code = compile(this.state.equation);
        let l = { 
            x: xl 
        };
        let u = { 
            x: xu 
        };
     
        var result1 = [];
        var i = 1;
        if (code.evaluate(l) * code.evaluate(u) < 0) {
            do {
                var xm = xu-(code.evaluate(u)*(xl-xu))/(code.evaluate(l)-code.evaluate(u));
                let m = { 
                    x: xm 
                };
                
                if (code.evaluate(l) * code.evaluate(m) < 0) {
                    xu = xm;
                }
                else {
                    xl = xm;
                }
                if(i>0){
                var check = abs((xm - xold) / xm)*100;
                }
                result1.push({
                    'iteration': i,
                    'xl': xl,
                    'xm': xm,
                    'xu': xu,
                    'Error': check,
                });
                xold = xm;
                i++;
                console.log(check)
            } while (check > 0.000001);
        }
        this.setState({ result: result1 });
    }

    render() {
        return (
            <div className='bg'>
            <h2>FalsePosition</h2>
                <div className='inputbox'>
                    <Input name="equation" onChange={this.input.bind(this)} placeholder="f(x)" />
                    <Input name="Xl" onChange={this.input.bind(this)} placeholder="Xl" />
                    <Input name="Xu" onChange={this.input.bind(this)} placeholder="Xu" />                    
                    <Button type="ghost" size="large" shape="round" onClick={this.compute.bind(this)}>Submit</Button>
                </div>
                {<Table style={{width:"900px",margin:"auto"}} dataSource={this.state.result} columns={header} pagination={false} />}
            </div>
        );
    }
}

export default FalsePosition;