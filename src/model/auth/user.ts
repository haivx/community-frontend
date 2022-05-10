export interface User {
    email: string;
    password: string;
    username: string;
}

export interface SignInParams {
    password: string;
    username: string;
}