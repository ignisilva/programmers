func solution(s string) string {
    
	startIndex := (len(s) - 1)/2
	
	endIndex := len(s)/2 + 1
	
	return s[startIndex:endIndex]
}