import React from "react";

const TotalC = React.createContext(0);

export default TotalC;

// Steps to create Context
// Create -> createContext
// Provider -> <context.Provider {value: string}> <Component/> <context.Provider />
// Consumer -> <context.Consumer> (value) => <Component {value}/> <context.Consumer />

// Newer version of Consumer makes use of hoook
// useContext - const value = useContext(context)