
(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]'; 
    var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
    var config = {
      apiKey: "AIzaSyCuFeLBRsyRmY2FoUrEblkAQulaI4dfOsw",
      authDomain: "coffeerun-62c5d.firebaseapp.com",
      databaseURL: "https://coffeerun-62c5d.firebaseio.com",
      projectId: "coffeerun-62c5d",
      storageBucket: "coffeerun-62c5d.appspot.com",
      messagingSenderId: "16828675956",
      appId: "1:16828675956:web:09288a04acc9ae5650de21",
      measurementId: "G-0399EHVQ5C"
    };

    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var RemoteDataStore = App.RemoteDataStore;
    var FirebaseDataStore = App.FirebaseDataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;
    var remoteDS = new FirebaseDataStore(config)
    

    
    var myTruck = new Truck('ncc-1701', remoteDS);
    window.myTruck = myTruck;
    var checkList = new CheckList(CHECKLIST_SELECTOR);


    //Using the remote datastore and the checklist, init the checklist with the stuff from the db

    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));


    //Initialize the 

    var formHandler = new FormHandler(FORM_SELECTOR);

    remoteDS.initalizeChecklist(checkList);


    formHandler.addSubmitHandler(function (data){
      myTruck.createOrder.call(myTruck, data).then(function () {
        checkList.addRow.call(checkList, data);
      });
    });  
  
    formHandler.addInputHandler(Validation.isCompanyEmail);

    console.log(formHandler);
  })(window);