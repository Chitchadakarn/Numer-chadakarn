import React, { Component } from 'react';
import {Input,Button,Table} from 'antd'
import {compile,abs,derivative} from 'mathjs'

import './styles.css'
const header = [{
    title: 'xreal',
    dataIndex: 'xreal'
}, {
    title: 'output',
    dataIndex: 'output'
}, {
    title: 'Error',
    dataIndex: 'Error',
}]
class Bwoh2 extends Component {
    state = {
        result:[],
        equation: "",
        X:"",
        N:"",
        H:"",
        output: 0,
        condition: "",
    }
    input = (e) => {
        this.setState({[e.target.name]:e.target.value},console.log(this.state))
    }
    compute = () => {
        var x = this.state.X;
        x = parseFloat(x);
        var n = this.state.N;
        n = parseFloat(n);
        var h = this.state.H;
        console.log(x,h,n)

        var eq = this.state.equation;
        const code = compile(this.state.equation);
        var diff = eq;
        var check = parseFloat(check);
         
        var result1 = [];
        let fx0 = {
            x:x
        };
        let fx1 = { 
            x: x-h
        };
        let fx2 = {
            x : x-(2*h)
        };
        let fx3 = {
            x : x-(3*h)
        };
        let scope= {
            x : x
        }
        for (var i=1;i<=n;i++){
            var diff = derivative(diff,'x');
        }
        if(n===1){
            var output = ((3*code.evaluate(fx0))-(4*code.evaluate(fx1))+code.evaluate(fx2))/2*h;
        }
        else if(n===2){
            output = ((2*code.evaluate(fx0))-(5*code.evaluate(fx1))+(4*code.evaluate(fx2))-code.evaluate(fx3))/h*h;
        }
        console.log(xreal)
        
        
        var xreal = diff.evaluate(scope);
        check = abs((output-xreal) / output*100);
        console.log(check)
                result1.push({
                    'xreal': xreal,
                    'output': output,
                    'Error':check,
                });
        this.setState({ result: result1 });
    }

    render() {
        return (
            <div className='bg'>
            <h2 class="font-h2">Bw o(h^2)</h2>
                <div className='inputbox'>
                    <Input class="input" style={{width:"250px",margin:"1rem"}} name="equation" onChange={this.input.bind(this)} placeholder="f(x)" />
                    <Input class="input" style={{width:"250px",mgargin:"1rem"}} name="X" onChange={this.input.bind(this)} placeholder="x" />
                   
                </div>
                <Input class="input" style={{width:"250px",margin:"1rem"}} name="N" onChange={this.input.bind(this)} placeholder="n" />
                <Input class="input" style={{width:"250px",mgargin:"1rem"}} name="H" onChange={this.input.bind(this)} placeholder="h" />                        


                    <Button type="ghost" shape="round" size="large" onClick={this.compute.bind(this)}>Submit</Button>
                {<Table style={{width:"530px",margin:"1rem"}} dataSource={this.state.result} columns={header} pagination={false} />}
            </div>
        );
    }
}

export default Bwoh2;