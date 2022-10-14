import "sort"

func solution(arr []int, divisor int) []int {
    
    intSlice := []int{}
    
    for _, value := range arr {
        if value % divisor == 0 {
            intSlice = append(intSlice, value)
        }
    }
    
    if len(intSlice) == 0 {
        
        return []int{-1}
    }
    
    sort.Slice(intSlice, func(a int, b int) bool {
        return intSlice[a] < intSlice[b]
    })
    
    return intSlice
}