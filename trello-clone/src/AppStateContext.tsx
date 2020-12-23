import React,{ createContext } from "react";
interface Task {
    id: string
    text: string
}
interface List {
    id: string
    text: string
    tasks: Task[]
}

export interface AppState {
    lists: List[]
}
const appData: AppState = [
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app"}]
        },
        {
            id: "1",
            text: "In Progess",
            tasks: [{ id: "c2", text: "Learn typescript"}]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "build a site"}]
        },
    ]
]