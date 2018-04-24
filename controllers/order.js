
  var app = angular.module('pos-app');


  app.controller('OrdersController', ['$scope','$http','ModalService','NavParam','ToastService','$location', '$rootScope', function($scope, $http, ModalService, NavParam,ToastService, $location, $rootScope){
  		var thisController = this;
        this.selectedStore = JSON.parse(localStorage.getItem("storeInfo"));
        this.userinfo = JSON.parse(localStorage.getItem("userinfo"));
        this.register = JSON.parse(localStorage.getItem("registerInfo"));

        this.amountPaid = 0;
        this.charge = '';
        this.selectedOrderId = 1;
        this.selectedOrder={};
        this.selectedOrderIndex = -1;
        this.currentTab = 1;
        this.paymentMethod ='Cash';
        this.selectedDelivery ={
                id: null,
                order_id: null,
                name: null,
                phone: null,
                date: null,
                customer_id: null,
                delivery_location: null,
                type_of_order: 'delivery',
                delivery_charge: null
            };








        this.initialize = function(){

             var req = {
                method: 'GET',
                url: $rootScope.apiUrl +'/get_orders_not_deliveries/' + thisController.selectedStore.id , 
                headers: {
                'appkey' : $rootScope.JAPPKEY
                }
                };
        
        $http(req).then(function(response){
            if ((response.status)=="200"){
                thisController.orders = response['data'];
            }
            else{
                console.log("no");
            }
        });

      };


       // this.initialize();





      this.loadDeliveries = function(){

          var req = {
                method: 'GET',
                url: $rootScope.apiUrl +'/get_deliveries_in_store/' + thisController.selectedStore.id , 
                headers: {
                'appkey' : $rootScope.JAPPKEY
                }
                };
        
        $http(req).then(function(response){
            if ((response.status)=="200"){
                thisController.deliveries = response['data'];
                // console.log(thisController.deliveries);
            }
            else{
                console.log("no");
            }
        });
      };


      

    this.loadCancelledOrders = function(){
        var req = {
                method: 'GET',
                url: $rootScope.apiUrl +'/get_cancelled_orders/' + thisController.selectedStore.id , 
                headers: {
                'appkey' : $rootScope.JAPPKEY
                }
                };
        
        $http(req).then(function(response){
            if ((response.status)=="200"){
                thisController.cancelledOrders = response['data'];
                            }
            else{
                console.log("no");
            }
        });
      };


        this.loadSales = function(){

                var req = {
                method: 'GET',
                url: $rootScope.apiUrl +'/get_sales/' + thisController.selectedStore.id +'/'+thisController.register.id, 
                headers: {
                'appkey' : $rootScope.JAPPKEY
                }
                };
        
        $http(req).then(function(response){
            if ((response.status)=="200"){
                thisController.sales = response['data'];
            }
            else{
                console.log("no");
            }
        });
      };

//loading riders 

        this.loadRiders = function(){

                var req = {
                method: 'GET',
                url: $rootScope.apiUrl +'/get_riders/' + thisController.selectedStore.id , 
                headers: {
                'appkey' : $rootScope.JAPPKEY
                }
                };
        
        $http(req).then(function(response){
            if ((response.status)=="200"){
                thisController.riders = response['data'];
                // console.log(thisController.riders);
            }
            else{
                console.log("no");
            }
        });
      };

      this.initialize();
     this.loadRiders();
    this.loadDeliveries();
    this.loadSales();
    this.loadCancelledOrders();



      this.change = function(total,amount){
        if(amount > total){
          return (amount - total).toFixed(2);
        }
        return 0.00;
      };

      this.closeOrder = function(){
                var request = {
                method: 'PUT',
                url: $rootScope.apiUrl + '/close_sale/'+ thisController.selectedOrder.id +'/' + thisController.amountPaid +'/'+ thisController.paymentMethod.toLowerCase(),
                headers: {
                'appkey' : $rootScope.JAPPKEY
                },
                };

    
                $http(request).then(function(response){
                    
                    if((response.status)=="200"){

                        thisController.closeModal('checkout');
                        thisController.orders.splice(thisController.selectedOrderIndex,1);
                         ToastService.success('Successfully checked out order')                  
                     }
                    else{
                        console.log('not successful');
                    }
                    });  

        };

        this.openModal = function(id, chargeForDisplay, order, index){
            thisController.selectedOrderIndex = index;
            thisController.selectedOrder = order;
            thisController.charge = chargeForDisplay;

                        var req = {
            method: 'GET',                                                                                                                                
            url: $rootScope.apiUrl + '/get_order_sale_items/'+ order.id,
            headers: {
            'appkey' : $rootScope.JAPPKEY
            },
                // data: this.user_root_id
            };
        
        $http(req).then(function(response){
            if ((response.status)=="200"){
                thisController.cartItems = response['data'];
                console.log(thisController.cartItems);

                angular.forEach(thisController.cartItems, function(cart_item){  
                   cart_item.modifier_types = angular.fromJson(cart_item.modifier_types);
                 });  
            }

        });


            ModalService.Open(id);
        };


        this.total = function() {
            var total = 0;
        angular.forEach(thisController.cartItems, function(item) {
            total += item.cost * item.qty;
        })
         thisController.subtotal = total;

         return thisController.subtotal;

        };







        this.closeModal = function(id){
            ModalService.Close(id);
        };


        this.updateOrder = function(order){
          NavParam.set(order);
          NavParam.setState('editOrder');
        };


        this.updateDelivery = function(delivery){
            console.log(delivery);
            var delivery = {
                id: delivery.sales_id,
                name: delivery.name,
                phone: delivery.phone,
                customer_id: delivery.customer_id,
                default_location: delivery.delivery_location,
                type_of_order: 'delivery',
                delivery_charge: delivery.delivery_charge
            };

            console.log(delivery);
            NavParam.set(delivery);
            NavParam.setState('editOrder');

        };








        this.cancelOrder = function(cancel){

            if(cancel){

             var request = {
                method: 'PUT',
                url: $rootScope.apiUrl + '/cancel_order/'+ thisController.selectedOrderId,
                headers: {
                'appkey' : $rootScope.JAPPKEY
                },
                };

    
                $http(request).then(function(response){
                    
                    if((response.status)=="200"){

                        ToastService.success('Sucessfully cancelled order');
                        ModalService.Close('cancel-order');
                        thisController.orders.splice(thisController.selectedOrderIndex,1);
                    }
                    else{

                        ModalService.Close('cancel-order');
                    }
                    });  
                
            }
            else{
            ModalService.Close('cancel-order');
            }

        };

        this.cancelOrderConfrim = function(orderId, index){

            thisController.selectedOrderId = orderId;
            thisController.selectedOrderIndex = index;

            ModalService.Open('cancel-order');

        };









        this.changeOrderType = function(order, index){
             var request = {
                method: 'PUT',
                url: $rootScope.apiUrl + '/update_order_type/'+ order.id + '/'+order.type_of_order,
                headers: {
                'appkey' : $rootScope.JAPPKEY
                },
                };

    
                $http(request).then(function(response){
                    
                    if((response.status)=="200"){
                        ToastService.success('Order type has been changed');
                        if (order.type_of_order =='delivery') {
                            thisController.orders.splice(index, 1);
                        }
                    }
                    else{
                        console.log('not successful');
                    }
                    });  
        };

        this.restoreClosedOrder = function(orderId, index){
            var request = {
                method: 'PUT',
                url: $rootScope.apiUrl + '/restore_order/'+ orderId,
                headers: {
                'appkey' : $rootScope.JAPPKEY
                },
                };

    
                $http(request).then(function(response){
                    
                    if((response.status)=="200"){

                        ToastService.success('Sucessfully restored order');
                        thisController.cancelledOrders.splice(index,1);
                    }
                    else{

                        ModalService.Close('cancel-order');
                    }
                    });  
        };


        this.updateDeliveryRider = function(orderId,riderId){

            console.log(orderId);

                var request = {
                method: 'PUT',
                url: $rootScope.apiUrl + '/update_delivery_rider/'+ orderId +'/' +riderId,
                headers: {
                'appkey' : $rootScope.JAPPKEY
                },
                };

    
                $http(request).then(function(response){
                    
                    if((response.status)=="200"){

                        ToastService.success('Sucessfully updated the rider');
                    }
                    else{

                    }
                    });  
        };


        this.closeDelivery = function(orderId, index){

                if(thisController.selectedDelivery.status == 'delivered'){

                var request = {
                method: 'PUT',
                url: $rootScope.apiUrl + '/close_delivery/'+ orderId,
                headers: {
                'appkey' : $rootScope.JAPPKEY
                },
                };

    
                $http(request).then(function(response){
                    
                    if((response.status)=="200"){
                        thisController.deliveries.splice(index,1);
                        ToastService.success('Sucessfully closed delivery');
                    }
                    else{

                    }
            });
            }
            else{
                ToastService.error('Cannot close delivery. Not delivered');
            }  
        };

        this.cancelDelivery = function(cancel){
            if(cancel){

             var request = {
                method: 'PUT',
                url: $rootScope.apiUrl + '/cancel_delivery/'+ thisController.selectedOrderId,
                headers: {
                'appkey' : $rootScope.JAPPKEY
                },
                };

    
                $http(request).then(function(response){
                    
                    if((response.status)=="200"){

                        ToastService.success('Sucessfully cancelled delivery');
                        ModalService.Close('cancel-delivery');
                        thisController.deliveries.splice(thisController.selectedOrderIndex,1);
                    }
                    else{

                        ModalService.Close('cancel-order');
                    }
                    });  
                
            }
            else{
            ModalService.Close('cancel-order');
            }

        };

         this.cancelDeliveryConfrim = function(orderId, index){

            thisController.selectedOrderId = orderId;
            thisController.selectedOrderIndex = index;

            ModalService.Open('cancel-delivery');

        };

     

        this.getPeriod =function(departureTime, deliveryTime){

            if(departureTime != null && deliveryTime != null){
            var now = moment(deliveryTime);
            var then = moment(departureTime);

            return moment.duration(now.diff(then)).humanize();
            }
            else{
               return '- -' 
            }
        };

        this.printDeliveryReceipt = function(delivery, index){

            thisController.selectedDelivery = delivery;
            thisController.selectedDelivery.index = index;
   

                        var req = {
            method: 'GET',                                                                                                                                
            url: $rootScope.apiUrl + '/get_order_sale_items/'+ delivery.order_id,
            headers: {
            'appkey' : $rootScope.JAPPKEY
            },
                // data: this.user_root_id
            };
        
        $http(req).then(function(response){
            if ((response.status)=="200"){
                thisController.cartItems = response['data'];
                console.log(thisController.cartItems);

                angular.forEach(thisController.cartItems, function(cart_item){  
                   cart_item.modifier_types = angular.fromJson(cart_item.modifier_types);
                 });  
            }

        });

            ModalService.Open('delivery-order-receipt');
        };

        this.closeDeliveryReceipt = function(){
            ModalService.Close('delivery-order-receipt');
        }


        this.getDateNow = function(){
            return new Date();
        }





	}]);
	



    