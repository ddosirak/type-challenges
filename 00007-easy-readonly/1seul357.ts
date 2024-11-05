/**
 * solved 한슬기
 * 풀이 일자 : 2024.11.05
 */

type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
};
