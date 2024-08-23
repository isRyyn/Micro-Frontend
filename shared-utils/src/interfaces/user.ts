export interface User {
    id: number;
    name: string;
    first_name?: string;
    last_name?: string;
    email: string;
    role: 'admin' | 'user';
}
  