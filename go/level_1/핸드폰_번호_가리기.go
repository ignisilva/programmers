package main

import "strings"

func solution(phone_number string) string {
    
    viewCount := 4
    
    blindCount := len(phone_number) - viewCount
    
    strSlice := []string{}
    
    strSlice = append(strSlice, strings.Repeat("*", blindCount))
    
    strSlice = append(strSlice, phone_number[blindCount:])
    
    return strings.Join(strSlice, "")
}

func main() {
	phone_number := "01033334444"

	println(solution(phone_number))
}