func solution(s string) bool {
    
	if len(s) != 4 && len(s) != 6 {
			return false;
	}
	
	byteSlice := []byte(s)
	
	for _, value := range byteSlice {
			isNumberCondition := 48 <= value && value <= 57
			
			if !isNumberCondition {
					return false
			}
	}
	
	return true;
}