import React, { Component } from 'react';
import {Input,Button,Table} from 'antd'
import {compile,abs} from 'mathjs'
import Algebrite from 'algebrite'
import './styles.css'
const header = [{
    title: 'a',
    dataIndex: 'a'
}, {
    title: 'b',
    dataIndex: 'b'
}, {
    title: 'output',
    dataIndex: 'output'
}, {
    title: 'Intregral',
    dataIndex: 'Intregral',
}, {
    title: 'Error',
    dataIndex: 'Error',
}]
class Trapezoidal extends Component {
    state = {
        result:[],
        equation: "",
        a:"",
        b:"",
        output: 0,
        condition: "",
    }
    input = (e) => {
        this.setState({[e.target.name]:e.target.value},console.log(this.state))
    }
    compute = () => {
        var a = this.setState.A;
        a = parseFloat(a);
        var b = this.setState.B;
        b = parseFloat(b);
        const code = compile(this.state.equation);
        var result1 = [];
        let fxa = { 
            x: a
        };
        let fxb= { 
            x: b
        };

        var output = ((a-b)/2)*code.evaluate(fxa)+code.evaluate(fxb);
        
        var intregralr = compile((Algebrite.integral(this.state.equation).toString()))
        console.log("gggg",intregralr)
        intregralr = intregralr.evaluate(fxb)-intregralr.evaluate(fxa);
        console.log(intregralr)
        var check = abs((intregralr - output) / intregralr)*100;
        console.log(check)
                result1.push({
                    'a': a,
                    'b': b,
                    'output': output,
                    'intregral': intregralr,
                    'error':check,
                });
        this.setState({ result: result1 });
    }

    render() {
        return (
            <div className='bg'>
            <h2 class="font-h2">Trapezoidal</h2>
                <div className='inputbox'>
                    <Input class="input" style={{width:"250px",margin:"1rem"}} name="A" onChange={this.input.bind(this)} placeholder="a" />
                    <Input class="input" style={{width:"250px",mgargin:"1rem"}} name="B" onChange={this.input.bind(this)} placeholder="b" />
                   
                </div>
                <Input class="input" style={{width:"250px",margin:"1rem"}} name="equation" onChange={this.input.bind(this)} placeholder="f(x)" />
                                        
                    <Button type="ghost" shape="round" size="large" onClick={this.compute.bind(this)}>Submit</Button>
                {<Table style={{width:"530px",margin:"1rem"}} dataSource={this.state.result} columns={header} pagination={false} />}
            </div>
        );
    }
}

export default Trapezoidal;