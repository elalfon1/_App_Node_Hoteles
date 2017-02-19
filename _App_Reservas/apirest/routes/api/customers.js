var express = require("express");
var modelCustomers = require("../../modelo/customers-modelo");
var router = express.Router();

var leerDefault = function(req, res, next) {

    modelCustomers.leerAllCustomer((error, clientes) => {
        if (error)
            console.error(error);
        else
            res.send(clientes);
    });
}

router.get("/nombre/:nombreCliente?", function(req, res, next) {

    let nombreCliente = req.params.nombreCliente;

    if (nombreCliente == null) {
        leerDefault(req, res, next);
    } else {
        modelCustomers.leerCustomersPorNombre(nombreCliente, (error, cliente) => {
            if (error)
                console.error(error);
            else
                res.send(cliente);
        });
    }
});

router.get("/email/:emailCliente?", function(req, res, next) {

    let emailCliente = req.params.emailCliente;

    if (emailCliente == null) {
        leerDefault(req, res, next);
    } else {
        modelCustomers.leerCustomersPorEmail(emailCliente, (error, cliente) => {
            if (error)
                console.error(error);
            else
                res.send(cliente);
        });
    }

});


router.get("/:id?", function(req, res, next) {
    let id = req.params.id;
    if (id == null) {
        leerDefault(req, res, next);
    } else {

        modelCustomers.leerCustomerPorId(id, (error, cliente) => {
            if (error)
                console.error(error);
            else
                res.send(cliente);
        });

    }
    /*else {
           console.log("No existe");
           res.sendStatus(404);
       }*/

});


router.delete("/:id", function(req, res, next) {
    let id = req.params.id;

    if (id != null) {
        modelCustomers.borrarCustomer(id, (error, cliente) => {
            if (error)
                console.error(error);
            else
                res.send("Borrado el cliente con id: " + id);
            //res.send(cliente);
        });
    } else {
        res.sendStatus(404);
    }
});






/*
router.get("/:nombreCliente", function(req, res, next) {
    let nombreCliente = req.params.nombreCliente;
    modelo.acceder("leerReservasByNombreCliente", (reservasLeidas) => {
        res.send(reservasLeidas);
    }, nombreCliente);
});

router.get("/fecha/:anio?/:mes?/:dia?", function(req, res, next) {
    let anio = req.params.anio;
    let mes = req.params.mes;
    let dia = req.params.dia;

    if (anio && mes && dia)
        res.send("El año es " + anio + " y el mes es " + mes + " y el dia es " + dia);
    else if (anio && mes)
        res.send("El año es " + anio + " y el mes es " + mes);
    else if (anio)
        res.send("El año es " + anio);
    else
        res.send("Sin año, mes, ni dia");


});
*/

module.exports = router;