/**
 * solved 김지애
 * 풀이 : https://ddiaezzang.tistory.com/12
 * 풀이 일자 : 2024.10.17
 */

type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
