// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
var pontos = 0;
var um = false;
var dois = false;
var três = false;
var quatro = false;
var cinco = false;
var seis = false;
var sete = false;
var oito = false;
var nove = false;
var dez = false;
function respostaCorreta(num){
  if (num == 1 && um == false) {
    document.getElementById('um').style.display='none';
    document.getElementById('perguntas2').style.display='none';
    um=true;
    pontos = pontos + 10;}
  if (num == 2 && dois == false) {
    document.getElementById('dois').style.display='none';
    dois=true;
    pontos = pontos + 10;}
  if (num == 3 && três == false) {
    document.getElementById('tres').style.display='none';
    três=true;
    pontos = pontos + 10;}
  if (num == 4 && quatro == false) {
    document.getElementById('quatro').style.display='none';
    quatro=true;
    pontos = pontos + 10;}
  if (num == 5 && cinco == false) {
    document.getElementById('cinco').style.display='none';
    cinco=true;
    pontos = pontos + 10;}
  if (num == 6 && seis == false) {
    document.getElementById('seis').style.display='none';
    seis=true;
    pontos = pontos + 10;}
  if (num == 7 && sete == false) {
    document.getElementById('sete').style.display='none';
    sete=true;
    pontos = pontos + 10;}
  if (num == 8 && oito == false) {
    document.getElementById('oito').style.display='none';
    oito=true;
    pontos = pontos + 10;}
  if (num == 9 && nove == false) {
    document.getElementById('nove').style.display='none';
    nove=true;
    pontos = pontos + 10;}
  if (num == 10 && dez == false) {
    document.getElementById('dez').style.display='none';
    dez=true;
    pontos = pontos + 10;}    
  if (num == 11) {
    document.getElementById('onze').style.display='none';
    pontos = pontos + 10;}
  if (num == 12) {
    document.getElementById('doze').style.display='none';
    pontos = pontos + 10;}
  if (num == 13) {
    document.getElementById('treze').style.display='none';
    pontos = pontos + 10;}
  if (num == 14) {
    document.getElementById('quatrorze').style.display='none';
    pontos = pontos + 10;}
  if (num == 15) {
    document.getElementById('quinze').style.display='none';
    pontos = pontos + 10;}
  if (num == 16) {
    document.getElementById('dezesseis').style.display='none';
    pontos = pontos + 10;}
  if (num == 17) {
    document.getElementById('dezessete').style.display='none';
    pontos = pontos + 10;}
  if (num == 18) {
    document.getElementById('dezoito').style.display='none';
    pontos = pontos + 10;}
  if (num == 19) {
    document.getElementById('dezenove').style.display='none';
    pontos = pontos + 10;}
  if (num == 20) {
    document.getElementById('vinte').style.display='none';
    pontos = pontos + 10;}
}

function fecharPergunta(num){
  if (num == 1) {
    document.getElementById('um').style.display='none';
    document.getElementById('perguntas2').style.display='none';}
  if (num == 2 ) {
    document.getElementById('dois').style.display='none';}
  if (num == 3) {
    document.getElementById('tres').style.display='none';}
  if (num == 4) {
    document.getElementById('quatro').style.display='none';}
  if (num == 5) {
    document.getElementById('cinco').style.display='none';}
  if (num == 6) {
    document.getElementById('seis').style.display='none';}
  if (num == 7) {
    document.getElementById('sete').style.display='none';}
  if (num == 8) {
    document.getElementById('oito').style.display='none';}
  if (num == 9) {
    document.getElementById('nove').style.display='none';}
  if (num == 10) {
    document.getElementById('dez').style.display='none';}  
  if (num == 11) {
    document.getElementById('onze').style.display='none';}
  if (num == 12 ) {
    document.getElementById('doze').style.display='none';}
  if (num == 13) {
    document.getElementById('treze').style.display='none';}
  if (num == 14) {
    document.getElementById('quatrorze').style.display='none';}
  if (num == 15) {
    document.getElementById('quinze').style.display='none';}
  if (num == 16) {
    document.getElementById('dezesseis').style.display='none';}
  if (num == 17) {
    document.getElementById('dezessete').style.display='none';}
  if (num == 18) {
    document.getElementById('dezoito').style.display='none';}
  if (num == 19) {
    document.getElementById('dezenove').style.display='none';}
  if (num == 20) {
    document.getElementById('vinte').style.display='none';}  
}

function finalizar(){
  document.getElementById('perguntas').style.display='none';
  document.getElementById('perguntas2').style.display='none';
  document.getElementById('resultado').style.display='block';
  document.getElementById('pontos').value = pontos;
}

function finalizar2(){
  document.getElementById('perguntas').style.display='none';
  document.getElementById('perguntas2').style.display='none';
  document.getElementById('resultado2').style.display='block';
  document.getElementById('resultado').style.display='none';  
  document.getElementById('pontos2').value = pontos;
}

$('.modal-trigger').leanModal();

function proximoNivel(){
  pontos = pontos;
  document.getElementById('perguntas').style.display='none';
  document.getElementById('perguntas2').style.display='block';
  document.getElementById('resultado').style.display='none';
  document.getElementById('resultado2').style.display='none';
  document.getElementById('onze').style.display='block';
  document.getElementById('doze').style.display='block';
  document.getElementById('treze').style.display='block';
  document.getElementById('quatrorze').style.display='block';
  document.getElementById('quinze').style.display='block';
  document.getElementById('dezesseis').style.display='block';
  document.getElementById('dezessete').style.display='block';
  document.getElementById('dezoito').style.display='block';
  document.getElementById('dezenove').style.display='block';
  document.getElementById('vinte').style.display='block';
}

function zerar(){
  goInserir();
  queryDB();
  document.getElementById('perguntas').style.display='block';
  document.getElementById('resultado').style.display='none';
  document.getElementById('resultado2').style.display='none';
  document.getElementById('perguntas2').style.display='none';
  document.getElementById('um').style.display='block';
  document.getElementById('dois').style.display='block';
  document.getElementById('tres').style.display='block';
  document.getElementById('quatro').style.display='block';
  document.getElementById('cinco').style.display='block';
  document.getElementById('seis').style.display='block';
  document.getElementById('sete').style.display='block';
  document.getElementById('oito').style.display='block';
  document.getElementById('nove').style.display='block';
  document.getElementById('dez').style.display='block';
  pontos = 0;
  um = false;
  dois = false;
  três = false;
  quatro = false;
  cinco = false;
  seis = false;
  sete = false;
  oito = false;
  nove = false;
  dez = false;
}


// Espere por Cordova para carregar
  // Primeira função
  document.addEventListener("deviceready", onDeviceReady, false);

   // Cordova está pronto

  //Dispositivo pronto
  function onDeviceReady() {
      var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
      db.transaction(criaDB, errorCB, successCB);
  }

  function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  }

  var currentRow;
  // Preencher o banco de dados
  // Cria tabela 
  function criaDB(tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS recordes (id INTEGER PRIMARY KEY AUTOINCREMENT, nome, pontos)');
  }

  // Transação sucesso callback
  //
  function successCB() {
      var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
      db.transaction(queryDB, errorCB);
  }

  // Consultar o banco de dados
  //
  function queryDB(tx) {
      tx.executeSql('SELECT * FROM recordes', [], querySuccess, errorCB);
  }
  //Busca por elemento na tabela
  function searchQueryDB(tx) {
      tx.executeSql("SELECT * FROM recordes where nome like ('%"+ document.getElementById("nome").value + "%')",
              [], querySuccess, errorCB);
  }
  // Consultar o callback sucesso
  
  function querySuccess(tx, results) {
      var tblText='<table id="t01" class="striped"> <thead> <tr><th data-field="nome">Nome</th> <th data-field="pontos">Pontos</th></tr></thead>';
      var len = results.rows.length;
      for (var i = 0; i < len; i++) {
          var tmpArgs=results.rows.item(i).nome + ",'" + results.rows.item(i).pontos
                 + "','";
          tblText +='<tbody><tr><td>' + results.rows.item(i).nome +'</td><td>'
                 + results.rows.item(i).pontos +'</td></tr></tbody>';
      }
      tblText +="</table>";
      document.getElementById("tblDiv").innerHTML =tblText;
  }

  //excluir linha da tabela
  function deleteRow(tx) {
    tx.executeSql('DELETE FROM recordes WHERE id = ' + currentRow, [], queryDB, errorCB);
  }

  // erro de retorno de chamada de transação
  //
  function errorCB(err) {
      alert("Error processing SQL: "+err.code);
  }


  //Chama função para inserir linha na tabela
  function goInserir() {
     var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
      db.transaction(insertDB, errorCB, successCB);
  }
  //Insere linha na tabela
  
  function insertDB(tx) {
      tx.executeSql('INSERT INTO recordes (nome,pontos) VALUES ("' +document.getElementById("nome").value
              +'","'+document.getElementById("pontos2").value+'")');
  }
  //Chama função para fazer consulta na tabela
  function goSearch() {
      var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
      db.transaction(searchQueryDB, errorCB);
  }
  //Chama função para deletar linha da tabela
  function goDelete() {
       var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
       db.transaction(deleteRow, errorCB);
       document.getElementById('elemento').style.display='none';
       document.getElementById('inserir').style.display='block';
  }

  //Mostrar o pop-up depois de tocar em uma linha na tabela
  
  function goPopup(row,rowname,rownum) {
      document.getElementById('inserir').style.display='none';
      currentRow=row;
      document.getElementById("elemento").style.display="block";
      document.getElementById("editNameBox").value = rowname;
      document.getElementById("editNumberBox").value = rownum;
  }

  //Chama função para editar linha da tabela
  function goEdit() {
      var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
      db.transaction(editRow, errorCB);
      document.getElementById('elemento').style.display='none';
      document.getElementById('inserir').style.display='block';
	}
  //Função para editar linha da tabela
  function editRow(tx) {
      tx.executeSql('UPDATE recordes SET nome ="'+document.getElementById("editNameBox").value+
              '", pontos= "'+document.getElementById("editNumberBox").value+ '" WHERE id = '
              + currentRow, [], queryDB, errorCB);
  }



