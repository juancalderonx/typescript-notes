interface User {
  id?: number;
  name?: string;
  email?: string;
}

const user: Required<User> = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
};
