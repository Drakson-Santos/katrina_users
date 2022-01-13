
export class User {
    
    public name: string;
    public email: string;
    public password: string;
    public _id: string;
    
    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props)
        // if (!id) this.id = uuid();
    }
}