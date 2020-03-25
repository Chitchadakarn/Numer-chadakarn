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
    title: 'xu',
    dataIndex: 'xu'
}, {
    title: 'xm',
    dataIndex: 'xm',
}, {
    title: 'Error',
    dataIndex: 'Error',
}]
class Bisection extends Component {
    state = {
        result:[],
        equation: "",
        Xl:0,
        Xu:0,
        Xm:0,
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
        var check = parseFloat(0.000000);
        const code = compile(this.state.equation);
        let l = { 
            x: xl 
        };
        let u= { 
            x: xu 
        };
     
        var result1 = [];
        var i = 1;
        if (code.evaluate(l) * code.evaluate(u) < 0) {
            do {
                var xm = (xl+xu)/2;
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
                check = abs((xm - xold) / xm)*100;
                }
                result1.push({
                    'iteration': i,
                    'xl': xl,
                    'xu': xu,
                    'xm': xm,
                    'Error': check,
                });
                xold = xm;
                i++;
                console.log(check)
            } while (check >= 0.000001);
        }
        this.setState({ result: result1 });
    }

    render() {
        return (
            <div className='bg'>
            <h2 class="font-h2">Bisection</h2>
                <div className='inputbox'>
                    <Input class="input" style={{width:"250px",margin:"1rem"}} name="equation" onChange={this.input.bind(this)} placeholder="f(x)" />
                    <Input class="input" style={{width:"250px",mgargin:"1rem"}} name="Xl" onChange={this.input.bind(this)} placeholder="Xl" />
                   
                </div>
                <Input class="input" style={{width:"250px",margin:"1rem"}} name="Xu" onChange={this.input.bind(this)} placeholder="Xu" />
                                        
                    <Button type="ghost" shape="round" size="large" onClick={this.compute.bind(this)}>Submit</Button>
                {<Table style={{width:"530px",margin:"1rem"}} dataSource={this.state.result} columns={header} pagination={false} />}
            </div>
        );
    }
}

export default Bisection;