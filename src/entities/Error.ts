export class Error {
    constructor(
        public message: string,
        public status: number,
        public type: string
    ) { }

    public static from(error: Error): Error {
        return new Error(error.message, error.status, error.type);
    }
    
}