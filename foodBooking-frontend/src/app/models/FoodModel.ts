import ExtraModel from "./ExtraModel";

export default interface FoodModel {
    _id?: string,
    name: string,
    description: string,
    price: Number,
    image?: any,
    imageUrl?:string,

    recipe: Array<string>,
    extras?: Array<ExtraModel>,
    bestBeforeUse: Date,
    totalQuantity: Number,
    remainingQuantity?: Number,
    isAvailable?: Boolean
}
