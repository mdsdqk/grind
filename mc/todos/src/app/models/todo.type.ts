export type TODO = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
    createdAt?: Date;
    updatedAt?: Date;
}