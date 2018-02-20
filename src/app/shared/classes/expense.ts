import { Category } from './category';

export class Expense {
    private id: number;
    private category: string;
    private value: number;
    private description: string;

    constructor(object) {
        this.id = object && object.id || null;
        this.category = object && object.category.name || object.category || null;
        this.value = object && object.value || null ;
        this.description = object && object.description || null;
    }

    public get $id(): number {
        return this.id;
    }

    public get $category(): string {
        return this.category;
    }

    public get $value(): number {
        return this.value;
    }

    public get $description(): string {
        return this.description;
    }
}
