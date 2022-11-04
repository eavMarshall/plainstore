import React from "react";
import AppStore from "src/AppStore";

const useAppStore = AppStore.useStore();

const App = () => {
    const key1 = useAppStore(state => state.key1);
    const key2 = useAppStore(state => state.key2);
    const key3 = useAppStore(state => state.key3);

    return <div>
        <h1>Hello world</h1>

        <div onClick={() => AppStore.setState({key1: "I'm clicked!!"})}>Key1 = {key1}</div>
        <div onClick={() => AppStore.setState({key2: "I'm clicked!!"})}>Key2 = {key2}</div>
        <div onClick={() => AppStore.setState({key3: "I'm clicked!!"})}>Key3 = {key3}</div>
        <div onClick={() => AppStore.resetStore()}>Reset</div>
    </div>
};

export default App;
