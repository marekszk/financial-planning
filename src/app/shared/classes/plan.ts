export class Plan {
    private id: number;
    private category: string;
    private value: number;

    constructor(object) {
        this.id = object && +object.id || null;
        this.category = object && object.category.name || object.category || null;
        this.value = object && +object.value || null;
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

}
