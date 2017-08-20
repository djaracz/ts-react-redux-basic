export interface Action<T, P> {
    readonly type: T;
    readonly payload?: P;
    readonly error?: boolean;
    readonly meta?: any;
}
