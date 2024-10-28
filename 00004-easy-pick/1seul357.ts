/**
 * solved 한슬기
 * 풀이 일자 : 2024.10.16
 */

type MyPick<T, K extends keyof T> = {
    [k in K]: T[k];
};
