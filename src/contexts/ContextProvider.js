import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();

// states of all our components
//all the initial states are false and they remain as they are
// when handle click is clicked, it takes the initial state and only changes one value
const initialState = {
    chat: false,
    cart: false,
    useProfile: false,
    notification: false
}

export const ContextProvider =({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)

    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings ] = useState(false);


    const setMode = (e)=>{
        setCurrentMode(e.target.value)
        localStorage.setItem('themeMode', e.target.value);
    }

    const setColor = (color)=>{
        setCurrentColor(color)
        localStorage.setItem('currentColor', color)
    }

    const handleClick =(clicked)=>{
        setIsClicked((initstat)=>{
            setIsClicked({ ...initialState, [clicked]:!initstat[clicked]})
        })
        // setIsClicked({ ...initialState, [clicked]:true})
    }

    // const hideClick = (clicked)=>{
    //     setIsClicked({ ...initialState, [clicked]:false})
    // }


    return (
        <StateContext.Provider value={{ 
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick, 
            screenSize, setScreenSize,
            currentColor, setColor,
            currentMode, setMode,
            themeSettings, setThemeSettings

         }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext); 

