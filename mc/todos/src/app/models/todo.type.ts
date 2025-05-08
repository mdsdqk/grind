export type Todo = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export type TodosResponse = {
    todos: Todo[];
    total: number;
    skip: number;
    limit: number;
}
