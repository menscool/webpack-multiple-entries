import {createEvent, createStore} from "effector";

export const increase = createEvent()
export const decrease = createEvent()
export const counter$ = createStore(0)
    .on(increase, (state) => (state + 1))
    .on(decrease, (state) => (state - 1))
