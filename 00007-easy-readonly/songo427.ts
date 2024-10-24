/**
 * solved 송현주
 * 풀이 : https://shyunju7.tistory.com/104
 * 풀이 일자 : 2024.10.20
 */

/** 풀이 내용 */
type MyReadonly<T> = { readonly [key in keyof T] : T[key] };

/** (번외) Readonly를 이용한 풀이 */
type MyReadonly<T> = Readonly<Todo1>;
