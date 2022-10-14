package main

import "strconv"
import "strings"

func solution(seoul []string) string {
    
    strSlice := []string{}
    strSlice = append(strSlice, "김서방은 ")
    
    for index, value := range seoul {
        if value == "Kim" {
            strSlice = append(strSlice, strconv.Itoa(index))
            break
        }
    }
    
    strSlice = append(strSlice, "에 있다")
    
    return strings.Join(strSlice, "")
}

func main() {
	seoul := []string{"Jhon", "Kim"}

	println(solution(seoul))
}