import React from 'react';
import { Divider } from 'antd'; 
import { Flex } from 'antd';
  
function Divide() { 
  
  return ( 
    <>
      <h4>ReactJS Ant-Design Divider Component</h4> 
      <Flex gap="small" align="center" wrap="wrap">
      Sample Text Before Divider 
      <Divider style={{ borderWidth: 5, borderColor: 'blue' }} /> 
      Sample Text After Divider 
      <Divider style={{ borderColor: 'orange' }} dashed> 
       Sample Dashed Divider 
      </Divider> 
      <Divider style={{ borderColor: 'green'}} plain> 
       Sample plain Divider 
      </Divider> 

      <Divider orientation="left">Left Text</Divider>
     <Divider orientation="right">Right Text</Divider>

      <Divider orientation="left" orientationMargin="0">
      Left Text with 0 orientationMargin
    </Divider>
   
  
    <Divider orientation="right" orientationMargin={50}>
      Right Text with 50px orientationMargin
    </Divider>
    
    </Flex> 
    </>
  ); 
  
};

export default Divide
