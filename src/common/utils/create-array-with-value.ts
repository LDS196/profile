export const createArrayWithValue = (arr: string[], num: number) => {
    let newArr = []
    if (arr.length === 0) {
        let i = 0
        while (i < num) {
            newArr.push({ value: "" })
            i++
        }
    } else {
        newArr = arr.map((el) => ({ value: el }))
    }
    return newArr
}
