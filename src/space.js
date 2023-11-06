import React from 'react'
import { Space, Button } from 'antd'; 
import {Flex} from 'antd';

function SpaceComp() { 
return ( 
	<>
	<h4>ReactJS Ant-Design Space Component</h4>
	<Flex gap="small" align="center" wrap="wrap"> 
	<Space size="large"> 
		<Button>Sample Item 1</Button> <br /> 
		<Button>Sample Item 2</Button> <br /> 
		<Button>Sample Item 3</Button> <br /> 
	</Space> 
   </Flex>
   </>
); 
};
export default SpaceComp
