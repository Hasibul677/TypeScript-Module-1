import { type } from "os";

// we are using alias for primitive data type
type User = {
  name: string;
  age: number;
};

// we can also intersection alias with another alias like a interface

type extendsIntersectionUser = User & {
  role: string;
};

// using new user using intersection

const intersectionUser: extendsIntersectionUser = {
  name: "Hasibul",
  age: 24,
  role: "student",
};

// we are using interface only for object type data
interface IUser {
  name: string;
  age: number;
}

// we can extends one interface to another interface

interface IUserDetails extends IUser {
  villeage: string;
  salary: number;
  isAdmin: boolean;
}

// using exteds interface to new object
const userfullInfo: IUserDetails = {
  name: "Md Hasibul Hasan",
  age: 24,
  villeage: "Pabna",
  salary: 0,
  isAdmin: false,
};
