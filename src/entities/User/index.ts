
export class User {
    public _id: string;
    public name: string;
    public email: string;
    public password: string;
    public projects?: string[] = [];
    public data_projects?: any[] = [];

    constructor(props: any) {
        Object.assign(this, props)
    }
}