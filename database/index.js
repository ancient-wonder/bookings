const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookings');
const data = require('../fakeData.js');

let bookingsSchema = mongoose.Schema({
  id: Number,
  unavailableDates: Array,
  rating: Number,
  numberOfRatings: Number,
  guestMax: Number,
  cost: Number,
  minStay: Number,
  maxStay: Number,
  childrenAllowed: Boolean
});

let Booking = mongoose.model('Booking', bookingsSchema);
const save = (singleBooking, callback) => {
  const newBooking = new Booking({
    id: singleBooking.id,
    unavailableDates: singleBooking.unavailable_dates,
    rating: singleBooking.rating,
    numberOfRatings: singleBooking.rating_amount,
    guestMax: singleBooking.guest_max,
    cost: singleBooking.cost,
    minStay: singleBooking.min_stay,
    maxStay: singleBooking.max_stay,
    maxStay: singleBooking.children_allowed
  });
  newBooking.save(function (err, fluffy) {
    if (err) {
      console.error(err);
    } else {
      console.log('successfully saved');
    }
  })
};

const other = () => {
  for (var i = 0; i < data.length; i++) {
    save(data[i]);
  }
}
//other();

const find = (id, callback) => {
  Book.find({id : id}, function (err, item){
    callback(item);
  })
}



module.exports.db = mongoose;
module.exports = Booking;
module.exports = save;