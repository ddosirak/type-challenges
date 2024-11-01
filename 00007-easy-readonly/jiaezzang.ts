/**
 * solved 김지애
 * 풀이 : https://ddiaezzang.tistory.com/12
 * 풀이 일자 : 2024.10.17
 */

/** 풀이 내용 */
type MyReadonly<T> = { readonly [P in keyof T] : T[P] }
