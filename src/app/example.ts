// class User {
//   constructor(public id : number, public firstName : string, public lastName : string){}
// }

// interface Serializer<T> {
//   fromJson(json : any): T;
//   toJson(user : T): any;
// }

// class UserSerializer implements Serializer<User> {
//   fromJson(json: any): User {
//       return new User(json.id, json.firstName, json.lastName);
//   }
//   toJson(user: User): any {
//       return {
//         id : user.id,
//         firstName : user.firstName,
//         lastName : user.lastName,
//       }
//   }
// }

// const user = new User(1, 'Giorgi', 'Mindiashvili');

// const userSerializer = new UserSerializer();

// const jsonRepresentation = userSerializer.toJson(user);

// const deserializedUser = userSerializer.fromJson(user);

// console.log(jsonRepresentation + "\n" + deserializedUser);
