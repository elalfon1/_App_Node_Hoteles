// var modelBookings = require("../modelo/bookings-modelo");
// var assert = require("assert");

// describe("Pruebas CRUD Bookings", function() {

//     var idReserva1 = null;

//     var myDate = new Date(2017, 03, 11);

//     // var myNextDate = new Date(fecha1.setTime(fecha1.getTime() + 86400000));

//     describe("Pruebas Create", function() {
//         it("Reserva Sergio Casado", function(done) {

//             modelBookings.grabarBooking("58a8800feb40a103c0561c83", 102, false, myDate, function(error, reserva) {
//                 if (error) {
//                     //assert.ok(false, error.message);
//                     done(error);
//                 } else {
//                     idReserva1 = reserva._id;
//                     assert.ok(reserva.room_id == 102 && reserva.check_date == myDate);
//                     done();
//                 }

//             });
//         });

//     });

//     describe("Pruebas Read", function() {

//         it("Leer Reserva", function(done) {

//             modelBookings.leerBookingsPorFecha(myDate, myDate, function(error, reservas) {
//                 if (error) {
//                     done(error);
//                 } else {
//                     assert.ok(reservas[0].check_date.toISOString() == myDate.toISOString());
//                     done();
//                 }

//             });
//         });

//         it("Leer All Booking", function(done) {

//             modelBookings.leerAllBookings(function(error, reserva) {
//                 if (error) {
//                     done(error);
//                 } else {
//                     done();
//                 }

//             });
//         });

//         describe("Pruebas Delete", function() {

//             it("Borrar Reserva Sergio Casado 25-03-2017", function(done) {
//                 modelBookings.borrarBooking(idReserva1, function(error, reserva) {
//                     if (error) {
//                         done(error);

//                     } else {
//                         assert.ok(reserva != null);
//                         done();
//                     }

//                 });
//             });

//         });

//     });

// });