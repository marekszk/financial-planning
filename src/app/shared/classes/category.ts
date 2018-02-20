import { Type } from '../consts/types';

export class Category {
    private id: number;
    private name: string;
    private type: string;

    constructor(object) {
        console.log(object);
        this.id = object && object.id || null;
        this.name = object && object.name || null ;
        this.type = (object && object.type) ? this.changeTypeValue(object.type) : null ;
    }

    private changeTypeValue(type): string {
        if ( type = 'r' ) {
            return 'revenue';
        } else {
            return 'expense';
        }
    }
    public get $id(): number {
        return this.id;
    }

    public get $name(): string {
        return this.name;
    }

    public get $type(): string {
        return this.type;
    }
}
