
import Divide from './divider';
import LayComp from './layoutComp';
import SpaceComp from './space';
import LayoutComp1 from './layoutComp1';
import FlexLay from './flexLayout';

function App() {
  return (
  <div style={{ display: 'block', width: 700, padding: 30 }}>  
   <Divide/>
   <LayComp/>
   <LayoutComp1/>
   <SpaceComp/>
   <FlexLay/>
  </div>
  );
};

export default App;
