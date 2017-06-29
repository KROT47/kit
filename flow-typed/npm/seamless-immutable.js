/* @flow */

declare module 'seamless-immutable' {
  declare type fromType = Object | Array<*>;

  declare export type Immutable<T: fromType> = T & {
    // Array methods
    flatMap(fn: Function): Array<any>;
    asObject(fn: Function): Object;
    asMutable(): Array<any>;
    // Object methods
    merge(collection: Array<any> | Object, deep?: Object): Object;
    set(key: string, value: any): Object;
    setIn(keyPath: Array<string>, value: any): Object;
    update(key: string, fn: Function): Object;
    updateIn(keyPath: Array<string>, fn: Function): Object;
    without(fn: Function): Object;
    without(keys: Array<string>): Object;
    without(...keys: Array<string>): Object;
    asMutable(): Array<any> | Object;
  };

  declare export function from<T: fromType> (spec: T): Immutable<T>;

  declare export function isImmutable(x: *): boolean;

  declare export default typeof from;
}
