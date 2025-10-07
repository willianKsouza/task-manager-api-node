export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
}

export type UpdateUserDTO = {
  id: string;
  name?: string;
  email?: string;
  password?: string;
}