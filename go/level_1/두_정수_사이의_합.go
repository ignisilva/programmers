package main

func solution(a int, b int) int {
    
	var n int = 0
	
	if a > b {
			a, b = b, a    
	}
	
	for i := a; i<=b; i++ {
			n += i
	}
	
	return n
}

func main() {
	// var a int = 3
	// var b int = 5

	a, b := 3, 5

	println(solution(a, b))
}