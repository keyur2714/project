export interface IStudent {
    id?: number;
    rollNo?: number;
    name?: string;
    city?: string;
}

export class Student implements IStudent {
    constructor(public id?: number, public rollNo?: number, public name?: string, public city?: string) {}
}
