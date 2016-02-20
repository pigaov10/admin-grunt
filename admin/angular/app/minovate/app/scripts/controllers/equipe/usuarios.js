'use strict';

app
  .controller('EquipeUsuariosCtrl', function($scope,$http){
      var usuarios = [
        {
          status: "red", 
          grupo: "Comerciais", 
          colaborador: "Ana Maria", 
          bateria: 20,
          conexao: 20,
          velocidade: 100,
          armazenamento: 47,
          localizacao: {
            nome: 'matriz',
            lat: -17.9999,
            long: -17.1212
          },
          gps: '200m'
        } , 
        {
          status: "blue", 
          grupo: "Comerciais", 
          colaborador: "Marcos", 
          bateria: 20,
          conexao: 20,
          velocidade: 100,
          armazenamento: 47,
          localizacao: {
            nome: 'matriz',
            lat: -17.9999,
            long: -17.1212
          },
          gps: '200m'
        }        
      ];

      $scope.usuarios = usuarios
  })