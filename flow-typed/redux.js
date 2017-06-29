/* @flow */

declare module 'flow-typed/redux' {

    declare export type VoidActionType = {
        +type: string,
    };

    declare export type ActionType<P> = VoidActionType & {
        +payload: P,
    };

    declare export type AnyActionType = VoidActionType | ActionType<any>;

    declare export type DispatchType<A, S> =
            ( action: VoidActionType | ActionType<A> | ThunkAction<A, S> | PromiseAction<A> ) => any;

    declare export type GetStateType<S> = () => S;

    declare export type ThunkAction<A, S> =
            ( dispatch: DispatchType<A, S>, getState: GetStateType<S> ) => any;

    declare export type PromiseAction<A> = Promise<ActionType<A>>;
}
