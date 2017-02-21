// var modelRooms = require("../modelo/rooms-modelo");
// var assert = require("assert");

// describe("Pruebas CRUD Rooms", function() {


// before((done) => {
//     modelRooms.grabarRoom(101, true);
//     modelRooms.grabarRoom(102, false);
//     done();
// });


// describe("Pruebas Create", function() {
//     it("Habitacion 101 - Doble", function(done) {
//         modelRooms.grabarRoom(101, true, function(error, habitacion) {
//             if (error) {
//                 //assert.ok(false, error.message);
//                 done(error);

//             } else {
//                 assert.ok(habitacion._id == 101 && habitacion.isDouble == true);
//                 done();
//             }

//         });
//     });
//     it("Habitacion 102 - Simple", function(done) {
//         modelRooms.grabarRoom(102, false, function(error, habitacion) {
//             if (error)
//                 done(error);
//             else {
//                 assert.ok(habitacion._id == 102 && habitacion.isDouble == false);
//                 done();
//             }
//         });
//     });
// });

// describe("Pruebas Read", function() {

//     it("Leer Id - 102", function(done) {
//         modelRooms.leerRoomPorId(102, function(error, habitacion) {
//             if (error) {
//                 done(error);

//             } else {
//                 assert.ok(habitacion._id == 102 && habitacion.isDouble == false);
//                 done();
//             }

//         });
//     });
//     it("Leer Id - 103", function(done) {
//         modelRooms.leerRoomPorId(103, function(error, habitacion) {
//             if (error) {
//                 done(error);

//             } else {
//                 assert.ok(habitacion != null, "Habitacion 103 no existe");
//                 done();
//             }

//         });
//     });
// it("Borrar Id - 103", function(done) {
//     modelRooms.leeborrarRoom(103, function(error, habitacion) {
//         if (error) {
//             done(error);

//         } else {
//             assert.ok(habitacion != null);
//             done();
//         }

//     });
// });

//         after((done) => {
//             modelRooms.borrarRoom(101);
//             modelRooms.borrarRoom(102);
//             done();
//         });

// });

// });