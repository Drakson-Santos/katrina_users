
export class User {
    
    public _id: string;
    public name: string;
    public email: string;
    public password: string;
    public projects?: string[] = [];
    
    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props)
    }
}