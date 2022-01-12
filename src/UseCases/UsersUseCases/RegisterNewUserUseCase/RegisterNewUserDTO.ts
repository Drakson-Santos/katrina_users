export interface IDatarRegisterUser {
    name: string;
    email: string;
    password: string;
    repeated_password: string;
}

export interface IRegisterNewUserDTO {
    name: string;
    email: string;
    password: string;
}