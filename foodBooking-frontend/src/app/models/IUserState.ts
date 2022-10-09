export default interface IState {
  _id:string,
  email:string,
  phoneNumber: String,
  fullName: string,
  role: string,
  token: string,
  lat?:string,
  long?: string,
  owner?: string
}
