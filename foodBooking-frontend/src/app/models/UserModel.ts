export default interface UserModel {
  _id?:string,
  email:string,
  fullname?: string,
  role: string,
  password: string,
  phonenumber: string,
}
