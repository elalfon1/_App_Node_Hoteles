$(function () {

	var date = new Date();
	date.setDate(date.getDate()-1)

	$('#fecha_inicio').datetimepicker({
		minDate: date,
		locale: 'es',
		format: 'DD/MM/YYYY',
		disabledDates: [  date
                        ]
	});
	$('#fecha_fin').datetimepicker({
		useCurrent: false, //Important! See issue #1075
		locale: 'es',
		format: 'DD/MM/YYYY'
	});
	$("#fecha_inicio").on("dp.change", function (e) {
		$('#fecha_fin').data("DateTimePicker").minDate(e.date);
	});
	$("#fecha_fin").on("dp.change", function (e) {
		$('#fecha_inicio').data("DateTimePicker").maxDate(e.date);
	});

	/*$('#calendario').availabilityCalendar()*/
});