import { createContext } from "react";
import CounterStore from "./counterStore";
import { UiStore } from "./uiStore";

interface Store{
    counterStore: CounterStore
    uniStore: UiStore
}

export const store: Store={
    counterStore: new CounterStore(),
    uniStore:new UiStore()
}

export const StoreContext = createContext(store);