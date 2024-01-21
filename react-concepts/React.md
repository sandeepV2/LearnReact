Before JSX came into existence, React.createElement method was used to create a React component.

This involved importing React into every component page.

This is optimized in React 17. Developers don't need to import the React hence reducing the bundle size.

(New JSX Trasform)

Note : JSX does not disply the premitive boolean values. It has to be converted into string.

It there is object literal in the useState. 
The existing state of the object has to be preserver using spread operator before update.

Before React 16.8

- Stateful components ( Class)
- Stateless components (Fuction)

After React 16.8 both class and function are enabled to have states.

Class components have lifecycle methods, that are executed automatically in well defined sequence.

life cycle has 4 phases
# Mounting  -> Constructor, static getDerivedStateFromProps, render, ComponentDidMount, 

# Updating -> getDerivedStateFromProps, shouldComponentUpdate,render, getSnapShotBeforeUpdate, ComponentDidUpdate, 

# Unmounting -> componentWillUnmount
# Error handling -> componentDidCatch

useEffect
componentDidMount, componentDidUpdate, componentWillUnmount.

Mutations, times, subscriptions, logging are not allowed in the main body of the function.

event parameter to the component.
```<button onClick={handleClick}></button>
function handleClick(e){
    // e is the synthetic event object wrapped around the native browser event object and is passed to every function automatically.
    console.log(e.target.value)
    
}
```
`e.preventDefault()`
// form on submit by default sends data to the server. In order to prevent in JavaScript we have return false, but in react only way is to preventDefault.


Updating the states directly like below is not the best way. This may lead incorrect data if react is updating the multiple state simultaneously.
setInfo({...info, [e.target.name]: e.target.value})
Refer : MultipleInputOptimized
Use functional update the correct way, as the states are not updated immediately. react puts them in queue and updates them in batches for performance.


Value of attribute by default is always true. If you don't pass value in props 
<DomoComponent value> (value = true)

Refer : ChildProps.js
Whenever there is content inside a custom component it is passed as props.children. 


**Context API**:
Prop drilling. 
Passing the parameters from root to all the components in the UI. 
Example, Login (usename and session info) > Dashboard > Comp1 > Comp2 etc.

Refer : CardPropDrill.js
// Steps to create Context
// Create -> createContext
// Provider -> <context.Provider {value: string}> <Component/> <context.Provider />
// Consumer -> <context.Consumer> (value) => <Component {value}/> <context.Consumer />

// Newer version of Consumer makes use of hoook
// useContext - const value = useContext(context)

**Redux**
State Management tool.
1. Create global store and reducer.

all the events has to be registered in the reducer.
events that change the state.
These events are dispatched from the component.

const reducer = (state=dataObj, action) {
    if (action.type === 'ADD){
        return {
            ...state,
            action.payload
        }
    }
}

2. Use Provider to pass the stored data to components.

<Provider store={data}><Comp /></Provider>
3. Access the stored data at component level.
useSelector, useStore or Connect (class component)
useStore gets all the data vs useSelector only pics up the
selected data.
4. Dispatch the actions if there are events.
the action is object containing 
type and payload. {type=ADD, payload=0}

Action could be dispatched on every event.
onClick, onChange etc.

Refere : CartRedux.js
for class based component with event and disatch refer: CartReduxComponents/PurchaseCl.js

**Action creator pattern**

Combine Reducers are used to logically group and 
modularize the reducers. refer : CartStoreRedux/store.js.

Note : the combine reducers are replaced by slices in redux toolkit

Define all the actions as constants.

ReducxToolkit.

CreateSlice combines the state and reducers into a single scope.

It allows developers to derictily mutate the state in the reducers. 
Though it appears that we are modifying the state directly, it uses immer library to create new state without mutations.

We don't have to install redux-thunk. It is readily available with TKT. 

**BUG** : ReduxTKTLogin, login user changes every second.
1. Select 2 users one after the other.


**Rules for hook** 
We need to use the hooks at top level of the code.
Hooks cannot be used in:
* if condition
* loop
* functions.


