# 유용한 Go 코드 정리

## Basic

### 문자열 자르기

```
apple := "apple"

apple[:0]  // a
apple[1:2] // pp
apple[2:]  // ple
```

### 변수 다중 선언 및 초기화

```
a, b := 3, 5
```

### Swap

```
a, b = b, a
```

## Slice

## Map

## Array

## Strconv

```
import "strconv"
```

### Itoa

정수값을 문자열로 변환

```
index := 0

strconv.Itoa(index) // "0"
```

## Strings

```
import "strings"
```

### Join

문자열 슬라이스을 exp로 합쳐서 하나의 문자열로 반환

```
strSlice := []string{"원", "투", "쓰리", "포"}

strings.Join(strSlice, ",") // "원,투,쓰리,포"
```

### Replace

특정 문자열을 n번 새 문자열로 변환

```
strings.Replace("oink oink", "oink", "moo", 1) // "moo oink"
```

### ReplaceAll

특정 문자열을 전부 새 문자열로 변환

```
strings.Replace("oink oink", "oink", "moo") // "moo moo"
```

### Repeat

특정 문자열을 n번 반복해서 반환

```
strings.Repeat("*", 8) // "********"
```

## Sort

```
import "sort"
```

### Slice

정렬 함수를 사용해 정렬해 반환

```
intSlice := []int{1,4,3,2}
strSlice := []string{"b","a","d","c"}

sort.Slice(intSlice, func (a int b int) bool {
  return intSlice[a] > intSlice[b]
}) // [4, 3, 2, 1]

sort.Slice(strSlice, func (a int b int) bool {
  return strSlice[a] < strSlice[b]
}) // ["a", "b", "c", "d"]
```

## Math

```
import "math"
```

### Max

두 float값 중에서 높은 값을 반환

```
math.Max(1, 2) // 2
```

### Min

두 float값 중에서 낮은 값을 반환

```
math.Min(1, 2) // 1
```
