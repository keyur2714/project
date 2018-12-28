import { Moment } from 'moment';

export interface IProduct {
    id?: number;
    code?: string;
    description?: string;
    unitPrice?: number;
    expiryDate?: Moment;
    warranty?: boolean;
}

export class Product implements IProduct {
    constructor(
        public id?: number,
        public code?: string,
        public description?: string,
        public unitPrice?: number,
        public expiryDate?: Moment,
        public warranty?: boolean
    ) {
        this.warranty = false;
    }
}
