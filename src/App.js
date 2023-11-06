
import React from 'react';
import { Button } from 'antd'; 
import ThreeButton from './threeButton';
import ButtonProperty from './ButtonProperty';
import SpinProp  from './spinComp';

export default function App() { 
  return ( 
    <div style={{ display: 'block', width: 700, padding: 30 }}> 
      <h4>Ant Design Button Component</h4> 
      <Button>Default Button</Button> <br /> 
      <Button type="primary">Primary Button</Button> <br /> 
      <Button type="dashed">Dashed Button</Button> <br /> 
      <Button type="text">Text Button</Button><br/>
      <Button type="link">Link Button </Button><br/>

      <ThreeButton/>  
      <ButtonProperty/>
      <SpinProp/>
    </div> 
  ); 
}

