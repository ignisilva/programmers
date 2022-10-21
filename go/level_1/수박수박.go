import "strings"

func solution(n int) string {
    
    strSlice := []string{}
    
    strSlice = append(strSlice, strings.Repeat("수박", n/2))
    
    if(n % 2 == 1) {
        strSlice = append(strSlice, "수")
    }
    
    return strings.Join(strSlice, "")
}