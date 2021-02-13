import { DragItem } from './DragItem';
import { useDrag } from "react-dnd";
import { useAppState } from './AppStateContext'

/*
The dragging logic will be similar for cards and columns, this custom hook 
will return a drag method that accepts the ref of a draggable element.
Whenever we start dragging the item - the hook will dispatch a SET_DRAG_ITEM
action to save the item in the app state. When we stop dragging it will dispatch 
this action again with undefined as payload 
*/
export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useAppState()
    const [, drag] = useDrag({
        // Contain the data about the dragged item
        item,
        // is called when we start dragging an item 
        begin: () =>
            dispatch({
                type: "SET_DRAGGED_ITEM",
                payload: item
            }),
        // is called when we release the item
        end: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined })
    })
    return { drag }
}