
import Divide from './divider';
import LayComp from './layoutComp';
import SpaceComp from './space';

function App() {
  return (
  <div style={{ display: 'block', width: 700, padding: 30 }}>  
   <Divide/>
   <LayComp/>
   <SpaceComp/>
  </div>
  );
};

export default App;
