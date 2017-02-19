var moduloAplicacion = angular.module("appNodeHotel", []);

moduloAplicacion.directive('miCalendario', function(){
    return {
        restrict: 'E',
        link: function(scope,element,attrs){
            $(element).availabilityCalendar(scope.$eval(attrs.miCalendario));
            	
            	scope.hola = "hola";

        }
    };
});


