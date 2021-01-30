/*
When we begin to drag some item we have to provide informdation about it to
react-dnd. We'll pass an onject that will describe the item we are currently
dragging. This object will have the type field that for now will be COLUMN. We'll
also pass the column's id, text and index that we'll get from the Column component
*/
export type ColumnDragItem = {
    index: number
    id: string
    text: string
    type: "COLUMN"
}