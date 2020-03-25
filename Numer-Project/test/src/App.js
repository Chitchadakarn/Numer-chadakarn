import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bisection from './Component/Bisection'
import FalsePosition from './Component/FalsePosition'
import SecantMethod from './Component/SecantMethod'
import OnePoint from './Component/OnePoint'
import NewtonRapson from './Component/NewtonRapson'
import Trapezoidal from './Component/Trapezoidal'
import Bwoh from './Component/Bwoh'
import Bwoh2 from './Component/Bwoh2'
import Oh from './Component/Oh'



import { Menu } from 'antd';

const { SubMenu } = Menu;


class App extends Component {
  render() {
    return (
     
      <div  class ='bg-success'>
        
      <Router>

        <div>
        <h1 class="font">Numerical</h1>
          <Menu mode="horizontal" class="menu">
        
          <SubMenu title="Root of Equation" key="sub1" 
          title={
            <span class="dropdown-item" class="font-sub"> 
              
              <span>Root of Equation</span>
            </span>
          }>

            <Menu.Item >
              <Link to='/Bisection'>Bisection</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/FalsePosition'>FalsePosition</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/SecantMethod'>SecantMethod</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/OnePoint'>OnePoint</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/NewtonRapson'>NewtonRapson</Link>
            </Menu.Item>
          </SubMenu>
           
           <SubMenu title="Extrapolation" key="sub2" 
          title={
          <span class="dropdown-item" class="font-sub"> 
            
            <span>Integation</span>
          </span>
        }>

            <Menu.Item >
              <Link to='/Trapezoidal'>Trapezoidal</Link>
            </Menu.Item>
        </SubMenu>

        <SubMenu title="Extrapolation" key="sub3" 
          title={
          <span class="dropdown-item" class="font-sub"> 
            
            <span>Derivative</span>
          </span>
        }>

            <Menu.Item >
              <Link to='/Bwoh'>Bwoh</Link>
            </Menu.Item>
       

        <Menu.Item >
              <Link to='/Bwoh2'>Bwoh2</Link>
            </Menu.Item>
        <Menu.Item >
              <Link to='/Oh'>Oh</Link>
            </Menu.Item> 
            
            </SubMenu>
         

          </Menu>



          <Switch>
            <Route path='/Bisection'>
              <Bisection />
            </Route>
            <Route path='/FalsePosition'>
              <FalsePosition />
            </Route>
            <Route path='/SecantMethod'>
              <SecantMethod/>
            </Route>
            <Route path='/OnePoint'>
              <OnePoint/>
            </Route>
            <Route path='/NewtonRapson'>
              <NewtonRapson/>
            </Route>
            <Route path='/Trapezoidal'>
              <Trapezoidal/>
            </Route>
            <Route path='/Bwoh'>
              <Bwoh/>
            </Route>
            <Route path='/Bwoh2'>
              <Bwoh2/>
            </Route>
            <Route path='/Oh'>
              <Oh/>
            </Route>
            
          </Switch>
        </div>
      </Router>
    </div>
    
    );
  }
}

export default App;