import { AnyAction } from "redux";

type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type'];
    match(action: AnyAction): action is ReturnType<AC>;
}

export function withMatcher<AC extends () => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;

// purpose of withMatcher is to extract the type of the action that comes out of the `actionCreator` and it is used to match actions within the reducer
export function withMatcher(actionCreator: Function) {
    const type = actionCreator().type;
    return Object.assign(actionCreator, {
        type,
        match(action: AnyAction) {
            return action.type === type;
        }
    });
}

export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
}

export type Action<T> = {
    type: T;
}

// function overload - two function declarations and one implementation. The first signature has two parameters of type Generric, whereas the second signature has two parameters with one void
// to achieve function overloading, the functions must be declared with all possible signatures
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function createAction<T extends string>(type: T, payload: void): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P) {
    return { type, payload }
}

// export const createAction = (type, payload) => ({ type, payload });
