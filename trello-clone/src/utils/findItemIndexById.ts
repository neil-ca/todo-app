interface Item {
    id: string
}

// We will use generic type T that extends Item. That means that we constrained
// our generic to have the fields that are defined on the Item interface -> id field
export const findItemIndexById = <T extends Item> (items: T[], id: string) => {
    return items.findIndex((item: T) => item.id === id)
}