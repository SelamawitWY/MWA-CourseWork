import FoodModel from "./FoodModel";

export default interface RestaurantModel {
  _id?:string,
  name: string,
  description: string,
  workingHourFrom: string,
  workingHourTo: string,
  address: {
    city: string,
    state: string,
    country: string,
    location: [string, string],
  },
  owner: any,
  foods?: Array<FoodModel>
}
