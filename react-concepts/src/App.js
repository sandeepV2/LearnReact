import logo from './logo.svg';
import './App.css';
import LazyInit from './LazyInit';
import EventState from './EventState';
import CClassBased from './ClassBased';
import DigitalClock from './DigitalClock';
import MouseCord from './MouseCord';
import FocuRef from './FocusRef';
import NewFocusRef from './NewFocusRef';
import MultipleInput from './MultipleInput';
import MultipleInputObjLit from './MultipleInputObjLit';
import MultipleInputOptimized from './MultipleInputOptimized';
import ChildProps from './ChildProps';
import CartPropDrill from './CartPropDrill';
import CartRedux from './CartRedux';
import CartReduxTKT from './CartReduxTKT';

// JSX prevents injection attacks as the values are
// embedded within the JSX before rendering. 
// Basicaly user cannot inject anything other than the values present in
// App.

function App() {
  return (
    <div className="App">
     {/* <LazyInit /> */}
     {/* <EventState/>
     <CClassBased/>
     <DigitalClock/> */}
     {/* <MouseCord/> */}
     {/* <FocuRef/>
     <NewFocusRef/> */}
     {/* <MultipleInput/>
     <MultipleInputObjLit />
     <MultipleInputOptimized/>
     <ChildProps /> */}
     {/* <CartPropDrill/> */}
     {/* <CartRedux /> */}
     <CartReduxTKT />
    </div>
  );
}

export default App;
