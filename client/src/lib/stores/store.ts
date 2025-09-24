import { createContext } from "react";
import CounterStore from "./counterStore";
import { UiStore } from "./uiStore";
import { ActivityStore } from "./activityStore";

interface Store{
    counterStore: CounterStore
    uniStore: UiStore
    activityStore: ActivityStore
}

export const store: Store={
    counterStore: new CounterStore(),
    uniStore:new UiStore(),
    activityStore: new ActivityStore()
}

export const StoreContext = createContext(store);