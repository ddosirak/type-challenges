/**
 * solved 송현주
 * 풀이 : https://shyunju7.tistory.com/104
 * 풀이 일자 : 2024.10.20
 */

/** 풀이 내용 */
type MyPick<T, K extends keyof T> = { [key in K]: T[key] };

/** (번외) Pick을 이용한 풀이 */
type MyPick<T, K extends keyof T> = Pick<T, K>;
