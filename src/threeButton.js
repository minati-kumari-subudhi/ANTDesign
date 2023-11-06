import { Button } from "antd";

function ThreeButton(){
    return(
      <>
      <h4>Use color property in Button</h4> 

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <Button style={{ backgroundColor: 'blue', color: 'white' }}>Button 1</Button>
      <Button style={{ backgroundColor: 'red', color: 'white' }}>Button 2</Button>
      <Button style={{ backgroundColor: 'orange', color: 'white' }}>Button 3</Button>
    </div>
   </> 
    );
};

export default ThreeButton;
