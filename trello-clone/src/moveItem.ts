
// takes the source array, and two indices that it will swap
export const moveItem = <T>(array: T[], from: number, to: number) => {
    // We do this because if you pass a negative index to splice function it will
    // begin that many elements from the end. So we can end up adding an item to the 
    // wrong spot
    const startIndex = to < 0 ? array.length + to : to;
    // remove the item with the from index and store it in the item const
    const item = array.splice(from, 1)[0]
    array.splice(startIndex, 0, item)
    return array 
}