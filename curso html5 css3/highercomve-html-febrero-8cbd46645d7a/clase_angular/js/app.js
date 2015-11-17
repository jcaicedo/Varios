var app = angular.module('TodoApp', []);

app.factory('Proyectos', function ($rootScope) {
  var proyectos = [];
  return {
    add: function(proyecto) {
      proyectos.push({ 
                        nombre: proyecto, 
                        descripcion: '',
                        tareas: []
                    });
      $rootScope.$broadcast('nuevoProyecto', proyectos);
      $rootScope.$apply();
    },
    getAll: function() {
      return proyectos;
    },
    getUrl: function(nombre) {
      return nombre.toLowerCase().replace(/\ +/g, '-')
    }
  };
});

app.controller('MenuCtrl', function ($scope, Proyectos) {
  $scope.listaProyectos = Proyectos.getAll();
  $scope.Proyectos = Proyectos;
  $scope.$on('nuevoProyecto', function(event, proyectos) {
    $scope.listaProyectos = proyectos;
  });

});

app.controller('HeaderCtrl', function ($scope, Proyectos) {
  $scope.init = function () {
    $('[data-toggle="tooltip"]').tooltip();
  };
  
  $scope.agregarProyecto = function () {
    swal(
      {
        title: "Agregar nuevo proyecto",
        text: "escriba el nombre de su proyecto:",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top"
      }, 
      function (inputValue) {
        if (inputValue === false) return false;
        if (inputValue === "") {
          swal.showInputError("You need to write something!");
          return false
        }
        console.log(Proyectos.add(inputValue));
        return true;
      }
    );
  };

  $scope.init();
});

app.controller('ProyectosCtrl', function ($scope, Proyectos) {
  $scope.proyectos = Proyectos.getAll();
  $scope.Proyectos = Proyectos;
  
  $scope.$on('nuevoProyecto', function(event, proyectos) {
    $scope.proyectos = proyectos;
  });
  
  $scope.agregarTarea = function(index) {
    swal(
      {
        title: "Agregar nueva tarea",
        text: "Que tienes que hacer?",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top"
      }, 
      function (inputValue) {
        if (inputValue === false) return false;
        if (inputValue === "") {
          swal.showInputError("You need to write something!");
          return false
        }
        $scope.proyectos[index].tareas.push({ nombre: inputValue, checked: false });
        $scope.$apply();
        return true;
      }
    );
  };
  $scope.marcarTarea = function(indexProyecto, indexTarea) {
    var oldvalue = $scope.proyectos[indexProyecto].tareas[indexTarea].checked;
    $scope.proyectos[indexProyecto].tareas[indexTarea].checked = (oldvalue) ? false:true;
    $scope.$apply();
  }
  $scope.borrarTarea = function (indexProyecto, indexTarea) {
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel plx!",
      closeOnConfirm: false,
      closeOnCancel: false
    }, function (isConfirm) {
      if (isConfirm) {
        $scope.proyectos[indexProyecto].tareas.splice(indexTarea, 1);
        $scope.$apply();
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
      } else {
        swal("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }
  
});









