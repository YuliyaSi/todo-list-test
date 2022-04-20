import React from "react";

export interface ITodo {
    id: string,
    text: string,
    color: string
}

export interface IInputProps {
    todo: string,
    setTodo: (value: string) => void,
    addFromPressEnter: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    addToList: () => void,
}

export interface IList {
    list: ITodo[],
    deleteFromList: (val: string) => void,
}