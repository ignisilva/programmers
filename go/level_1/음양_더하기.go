func solution(absolutes []int, signs []bool) int {
    
	sum := 0
	
	for i := 0; i < len(signs); i++ {
			value := absolutes[i]
			
			if signs[i] == false {
					value = -1 * value
			}
			
			sum = sum + value
	}
	
	return sum
}