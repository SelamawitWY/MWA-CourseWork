export default interface BookingModel {
  _id?:string,
  owner: {
    _id: string,
    fullName: string,
    email: string,
    phoneNumber: string,
  },
  food: {
    _id: string,
    name: string,
    description: string,
    price: Number,
    imageUrl: string,
    recipe: Array<string>,
    extras: [
      {
        _id: string,
        name: string,
        price: Number,
        imageUrl: string,
        quantity: Number,
      },
    ],
  },
  restaurant: {
    _id: string,
    name: string,
    workingHourFrom: string,
    workingHourTo: string,
  },
  extras: [{
      name: string,
      price: Number,
      imageUrl: string,
      _id: string,
  }],
  quantity: Number,
  reservedDate: Date,
  status: string,
  reservationCode: string,
  totalPrice: Number
}
