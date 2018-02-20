export default class Table {
    private values: Array<Array<string>>;
    private keys: Array<string>;
    private headers: Array<string>;
    private widths: Array<number>;
    private actions: Array<any>;

    constructor(
        data: Array<any>,
        headers: Array<string>,
        widths: Array<number>,
        actions: Array<any>
    ) {
        this.headers = headers;
        this.widths = widths;
        this.actions = actions;
        this.values = this.mappingForValues(data);
        this.keys = Object.keys(data[0]);
    }

    static setWidths(cellList: NodeListOf<Element> | Array<any>, widths: Array<number>) {
        Array.from(cellList).forEach(
            (element, i) => {
                const lastElem = i === widths.length - 1 ? -1 : 0;
                element.setAttribute('style', `width: ${widths[i] + lastElem}%`);
            }
        );
    }

    private mappingForValues(data: Array<any>): Array<Array<string>> {
        return data.map(
            element => {
              return Object.values(element);
            }
        );
    }

    public get $values(): Array<Array<string>> {
        return this.values;
    }

    public get $keys(): Array<string> {
        return this.keys;
    }

    public get $headers(): Array<string> {
        return this.headers;
    }

    public get $widths(): Array<number> {
        return this.widths;
    }

    public get $actions(): Array<any> {
        return this.actions;
    }

    public areActions(): boolean {
        return this.actions.length > 0;
    }

}
