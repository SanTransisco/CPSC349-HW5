(function (window) {
    'use strict';
    var App = window.App || {};
  
    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }

    Truck.prototype.createOrder = function (order) {
        console.log('Adding order for ' + order.emailAddress);
        return this.db.add(order.emailAddress, order);
    };
  
    Truck.prototype.deliverOrder = function (customerId) {
        console.log('Delivering order for ' + customerId);
        return this.db.remove(customerId);
    };

    Truck.prototype.printOrders = function () {
        var customerIdArray = Object.keys(this.db.getAll());

        console.log('Truck #' + this.truckId + ' has pending orders:');
        customerIdArray.forEach(function (id) {
            console.log(this.db.get(id));
        }.bind(this));
 
    };

    Truck.prototype.getOrders = function() {
        console.log(this.db.getAll.call(this.db))
        //var customerIdArray = Object.keys();
        console.log("array is");
        //console.log(customerIdArray);
        var dict = {};
        var counter = 0;
        console.log('Truck #' + this.truckId + ' has pending orders:');
        customerIdArray.forEach(function (id) {
            console.log(counter);
            dict[id]=(this.db.get(id));
            counter++;
        }.bind(this));
        return dict;
    }
    
    App.Truck = Truck;
    window.App = App;
  
  })(window);