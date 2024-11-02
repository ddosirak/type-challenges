/**
 * solved 김지애
 * 풀이 : https://ddiaezzang.tistory.com/13
 * 풀이 일자 : 2024.10.22
 */

/** 풀이 내용 */
type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K;
  }