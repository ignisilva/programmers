func solution(numbers []int) int {
	result := 0
	
	coefficientArray := [10]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0}
	
	for _, value := range numbers {
			coefficientArray[value] = 1
	}
	
	for index, value := range coefficientArray {
			if value == 0 {
					result = result + index
			}
	}
	
	return result
}