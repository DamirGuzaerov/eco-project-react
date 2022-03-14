import React from 'react'
import mainStore from "../../stores/mainStore";

export const useStores = () => React.useContext(React.createContext(mainStore));