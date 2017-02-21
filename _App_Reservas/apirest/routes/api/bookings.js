var express = require("express");
var modelBookings = require("../../modelo/bookings-modelo"); //En Node no hace falta el .js
var router = express.Router();

router.get("/fecha/:anio/:mes/:dia/fechafin/:anioFin/:mesFin/:diaFin", function(req, res, next) {
    let anio = parseInt(req.params.anio);
    let mes = parseInt(req.params.mes) - 1;
    let dia = parseInt(req.params.dia);

    let anioFin = parseInt(req.params.anioFin);
    let mesFin = parseInt(req.params.mesFin) - 1;
    let diaFin = parseInt(req.params.diaFin);


    let fecha = new Date(anio, mes, dia);
    let fechaFin = new Date(anioFin, mesFin, diaFin);

    modelBookings.leerBookingsEntreFechas(fecha, fechaFin, (error, reserva) => {
        if (error) {
            console.error(error);
            res.send(error.message);
        } else {
            if (reserva[0] != null) {
                res.send(reserva);
            } else {
                console.log("No existe");
                res.sendStatus(404);
            }
        }
    });

});

router.get("/fecha/:anio?/:mes?/:dia?", function(req, res, next) {
    let anio = parseInt(req.params.anio);
    let mes = parseInt(req.params.mes) - 1;
    let dia = parseInt(req.params.dia);

    if (anio && mes && dia) {

        let fecha = new Date(anio, mes, dia);

        modelBookings.leerBookingsPorFecha(fecha, fecha, (error, reserva) => {
            if (error) {
                console.error(error);
                res.send(error.message);
            } else {
                if (reserva[0] != null) {
                    res.send(reserva);
                } else {
                    console.log("No existe");
                    res.sendStatus(404);
                }
            }
        });

    } else if (anio && (mes || mes == 0)) {

        let fechaInicio = new Date(anio, mes, 1);
        let fechaFin = new Date(anio, mes + 1, 0);

        modelBookings.leerBookingsPorFecha(fechaInicio, fechaFin, (error, reserva) => {
            if (error) {
                console.error(error);
                res.send(error.message);
            } else {
                if (reserva[0] != null) {
                    res.send(reserva);
                } else {
                    console.log("No existe");
                    res.sendStatus(404);
                }
            }
        });
    } else if (anio) {

        let fechaInicio = new Date(anio, 1, 1);
        let fechaFin = new Date(anio, 12, 31);

        modelBookings.leerBookingsPorFecha(fechaInicio, fechaFin, (error, reserva) => {
            if (error) {
                console.error(error);
                res.send(error.message);
            } else {
                if (reserva[0] != null) {
                    res.send(reserva);
                } else {
                    console.log("No existe");
                    res.sendStatus(404);
                }
            }
        });

    } else {
        modelBookings.leerAllBookings((error, reservas) => {
            if (error)
                console.error(error);
            else
                res.send(reservas);
        });
    }

});

router.get("/:id?", function(req, res, next) {
    let id = req.params.id;

    if (id == null) {
        modelBookings.leerAllBookings((error, reservas) => {
            if (error)
                console.error(error);
            else
                res.send(reservas);
        });

    } else {

        modelBookings.leerBookingPorId(id, (error, reserva) => {
            if (error) {
                console.error(error);
                res.send(error.message);
            } else {
                if (reserva[0] != null) {
                    res.send(reserva);
                } else {
                    console.log("No existe");
                    res.sendStatus(404);
                }
            }
        });

    }


});




module.exports = router;