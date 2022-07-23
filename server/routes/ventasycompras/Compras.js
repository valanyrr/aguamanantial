// requires conexion db
const Conexion = require('../../config/dbconnect')

// requires express and more
const router = require('express').Router()

$(document).ready(function() {
    CargarFacturas();
});

//  Cargar todos los datos
function CargarFacturas() {
    $.ajax({
        url: UrlGetFacturas,
        type: 'GET',
        datatype: 'JSON',
        success: function(reponse) {
            var MiItems = reponse;
            var Valores = '';

            for (i = 0; i < MiItems.length; i++) {

                Valores += '<tr>' +
                    '<td>' + MiItems[i].ID + '</td>' +
                    '<td>' + MiItems[i].NUMERO_FACTURA + '</td>' +
                    '<td>' + MiItems[i].ID_SOCIO + '</td>' +
                    '<td>' + MiItems[i].FECHA_FACTURA + '</td>' +
                    '<td>' + MiItems[i].DETALLE + '</td>' +
                    '<td>' + MiItems[i].SUB_TOTAL + '</td>' +
                    '<td>' + MiItems[i].TOTAL_ISV + '</td>' +
                    '<td>' + MiItems[i].TOTAL + '</td>' +
                    '<td>' + MiItems[i].FECHA_VENCIMIENTO + '</td>' +
                    '<td>' + MiItems[i].ESTADO + '</td>' +
                    '</tr>';

                $('.Facturas').html(Valores);
            }
        }
    });
}


// Agregar un usuario
form_factura.addEventListener('submit', e => {
    e.preventDefault()

    var datosFacturas = {
        ID: $('#ID').val(),
        NUMERO_FACTURA: $('#NUMERO_FACTURA').val(),
        ID_SOCIO: $('#ID_SOCIO').val(),
        FECHA_FACTURA: $('#FECHA_FACTURA').val(),
        DETALLE: $('#DETALLE').val(),
        SUB_TOTAL: $('#SUB_TOTAL').val(),
        TOTAL_ISV: $('#TOTAL_ISV').val(),
        TOTAL: $('#TOTAL').val(),
        FECHA_VENCIMIENTO: $('#FECHA_VENCIMIENTO').val(),
        ESTADO: $('#ESTADO').val()
    };


    var datosFacturasjson = JSON.stringify(datosFacturas);
    $.ajax({
        url: InsertPostFacturas,
        type: 'POST',
        data: datosFacturasjson,
        dataType: 'JSON',
        "Content-Type": 'application/json',
        success: function(reponse) {
            console.log(reponse);
        },
        error: function() {
            alert('Error al crear Factura');
        }
    });
    alert('Factura agregada exitosamente');
    location.reload() // Recargar pagina
})


// Actualizar Usuario
form_factura_edit.addEventListener('submit', e => {
    e.preventDefault()

    const datosFacturas = {
        ID: $('#ID_EDIT').val(),
        NUMERO_FACTURA: $('#NUMERO_FACTURA_EDIT').val(),
        ID_SOCIO: $('#ID_SOCIO_EDIT').val(),
        FECHA_FACTURA: $('#FECHA_FACTURA_EDIT').val(),
        DETALLE: $('#DETALLE_EDIT').val(),
        SUB_TOTAL: $('#SUB_TOTAL_EDIT').val(),
        TOTAL_ISV: $('#TOTAL_ISV_EDIT').val(),
        TOTAL: $('#TOTAL_EDIT').val(),
        FECHA_VENCIMIENTO: $('#FECHA_VENCIMIENTO_EDIT').val(),
        ESTADO: $('#ESTADO_EDIT').val()
    };

    const datosFacturasjson = JSON.stringify(datosFacturas);
    console.log(datosFacturas)

    $.ajax({
        url: actualizarFactura,
        type: 'PUT',
        data: datosFacturasjson,
        dataType: 'JSON',
        "Content-Type": 'application/json',
        success: function(reponse) {
            console.log(reponse);
        },
        error: function() {
            alert('Error al actualizar Factura');
        }
    });
    alert('Factura actualizada exitosamente');
    location.reload() // Recargar pagina


})


function eliminarUsuario(idUsuario) {
    const idUser = {
        ID: idUsuario
    }

    var idDelUser = JSON.stringify(idUser);
    $.ajax({
        url: facturaDelete,
        type: 'DELETE',
        data: idDelUser,
        dataType: 'JSON',
        "Content-Type": 'application/json',
        success: function(reponse) {
            console.log(reponse);
        },
        error: function() {
            alert('Error al eliminar Factura');
        }
    });
    alert('Factura eliminada exitosamente');
}


function verFactura(idUsuario) {
    const idUser = {
        ID: idUsuario
    }

}
    var idDelUser = JSON.stringify(idUser);
