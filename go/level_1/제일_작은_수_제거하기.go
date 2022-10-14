import "math"

func solution(arr []int) []int {
    
    min := math.Inf(1)
    
    intSlice := []int{}
    
    if(len(arr) == 1) {
        return []int{-1}
    }
    
    for _, value := range arr {
        min = math.Min(min, float64(value))
    }
    
    for _, value := range arr {
        if value == int(min) {
            continue
        }
        
        intSlice = append(intSlice, value)
    }
    
    return intSlice
}