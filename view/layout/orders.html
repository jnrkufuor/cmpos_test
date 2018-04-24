<div ng-controller="OrdersController as ctrl" ng-init="ctrl.currentTab = 2">
<div class="order-page-head-container">
<div class="order-page-section-head">
        <h1>Orders</h1>
 </div>


<div class="summary-block">
	
</div>


<ul uk-tab class="order-page-tabs">
       <li class="uk-active" ng-click="ctrl.currentTab = 2;ctrl.loadDeliveries();ctrl.loadRiders()"><a>Pending deliveries ({{ctrl.deliveries.length}})</a></li>
    <li  ng-click="ctrl.currentTab = 1;ctrl.initialize()"><a> Pending Orders ({{ctrl.orders.length}})</a></li>
    <li ng-click="ctrl.currentTab = 4;ctrl.loadSales()"><a>Sales</a></li>
        <li ng-click="ctrl.currentTab = 3;ctrl.loadCancelledOrders()"><a>Cancelled Orders</a></li>

</ul>
</div>
<div class="order-page-outer-container">
<table class="uk-table uk-table-striped order-table" ng-if="ctrl.currentTab == 1">
    <div ng-if="ctrl.orders.length == 0 && ctrl.currentTab == 1"style="width:100%;text-align: center">No pending orders</div>
    <thead ng-if="ctrl.orders.length > 0 && ctrl.currentTab == 1">
        <tr>
        	
            <th>Order id</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>Order Type</th>
            <th>Amount</th>
            <!-- <th>Status</th> -->
            <th>Date</th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="order in ctrl.orders" >
      
        	<td>{{order.id}}</td>
        	<td>{{order.name}}</td>
        <td>{{order.phone}}</td>
        <td><a style="text-decoration: none; color: #666">{{order.type_of_order}} <span class="uk-margin-small-left" uk-icon="icon: triangle-down"></span></a>
        <div class="order-type-dropdown" uk-dropdown="mode: click">
                 <ul class="uk-nav uk-dropdown-nav">
                     <li ng-click="order.type_of_order = 'walk in'; ctrl.changeOrderType(order)"><a href="#">Walk in</a></li>
                     <li ng-click="order.type_of_order = 'pick up'; ctrl.changeOrderType(order)"><a href="#">Pick up</a></li>
                     <li ng-click="order.type_of_order = 'delivery'; ctrl.changeOrderType(order, $index)"><a href="#">Delivery</a></li>
                 </ul>
         </div>
       </td>
       <td>{{order.total_amount | number:2}}</td>
        <!-- <td>{{order.status}}</td> -->
        <td>{{order.date}}</td>
            
              <td> <button class="edit-order-btn" ng-click="ctrl.openModal('checkout',order.total_amount,order, $index)"><span>Checkout</span></button></td>
            <td><button ng-click="ctrl.updateOrder(order);mCtrl.initializeOrderDetails();mCtrl.switchTab('pos','orders')" class="edit-order-btn"><span uk-icon="icon: pencil; ratio: 0.9"></span><span> edit order</span></button></td>
            <td> <button ng-click="ctrl.cancelOrderConfrim(order.id, $index)" class="delete-container">
              <img src="web/img/error.svg" style="display: inline-block;height:20px"><span style="font-size: 13px"> Cancel</span></button>
            </td>
        </tr>
    </tbody>
</table>
<table class="uk-table uk-table-striped order-table" ng-if="ctrl.currentTab == 2">
    <div ng-if="ctrl.deliveries.length == 0 && ctrl.currentTab == 2"style="width:100%;text-align: center">No deliveries</div>
    <thead ng-if="ctrl.deliveries.length > 0 && ctrl.currentTab == 2">
        <tr>
          
            <th>Order id</th>
            <th>Customer</th>
            <th>location</th>
            <th>Phone</th>
            <th>Rider</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Departure time</th>
            <th>Period</th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="delivery in ctrl.deliveries">
         
          <td>{{delivery.order_id}}</td>
          <td>{{delivery.name}}</td>
           <td>{{delivery.delivery_location}}</td>
          <td>{{delivery.phone}}</td>
          
           <td><a ng-if="delivery.firstname == null" style="text-decoration: none; color: #BF6359">Unassigned <span class="uk-margin-small-left" uk-icon="icon: triangle-down"></span></a>
            <a ng-if="delivery.firstname != null" style="text-decoration: none; color: #666">{{delivery.firstname}} {{delivery.lastname}} <span class="uk-margin-small-left" uk-icon="icon: triangle-down"></span></a>

        <div class="order-type-dropdown" uk-dropdown="mode: click">
                 <ul class="uk-nav uk-dropdown-nav scrollable-dropdown">
                     <li ng-repeat="rider in ctrl.riders" ng-click="delivery.firstname = rider.firstname; delivery.lastname=rider.lastname; ctrl.updateDeliveryRider(delivery.id, rider.id);delivery.departure_time = ctrl.getDateNow()"><a href="#">{{rider.firstname}} {{rider.lastname}}</a></li>
                 </ul>
                 <div ng-if="ctrl.riders.length > 0" class="scroll-down-arrow">
                   <span uk-icon="icon: triangle-down"></span>
                 </div>
         </div>
       </td>
       <td>{{delivery.total_amount}}</td>

       <td>{{delivery.status}}</td>
       <td><span ng-if="delivery.departure_time == null">- -</span>{{delivery.departure_time | date:'yyyy-MM-dd HH:mm:ss'}} </td>
        <td>{{ctrl.getPeriod(delivery.departure_time, delivery.delivery_time)}}

        </td>
          <td> <button class="edit-order-btn" ng-click="ctrl.printDeliveryReceipt(delivery, $index)"><span>checkout</span></button></td>
        

          <td> <button class="edit-order-btn" ng-click="ctrl.updateDelivery(delivery);mCtrl.initializeOrderDetails();mCtrl.switchTab('pos','orders')"><span>edit delivery</span></button></td>
          

            <td>
              <button ng-click="ctrl.cancelDeliveryConfrim(delivery.id, $index)"><img src="web/img/error.svg" style="display: inline-block;height:20px"><span style="font-size: 13px"> Cancel</span></button>
            </td>
        </tr>
    </tbody>
</table>
<table class="uk-table uk-table-striped order-table" ng-if="ctrl.currentTab == 3">
    <div ng-if="ctrl.cancelledOrders.length == 0 && ctrl.currentTab == 3"style="width:100%;text-align: center">No cancelled orders</div>
    <thead ng-if="ctrl.cancelledOrders.length > 0 && ctrl.currentTab == 3">
        <tr>
            <th>Id</th>
            <th>Customer</th>
            <th>Order Type</th>
            <th>Total Charge</th>
            <th>Phone</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="cancelled in ctrl.cancelledOrders">
          <td>{{cancelled.id}}</td>
          <td>{{cancelled.name}}</td>
          <td>{{cancelled.type_of_order}}</td>
            <td>{{cancelled.total_amount}}</td>
            <td>{{cancelled.phone}}</td>
            <td>
              <button ><img src="web/img/undo.svg" ng-click="ctrl.restoreClosedOrder(cancelled.id, $index)" style="display: inline-block;height:20px"><span style="font-size: 13px">Restore</span></button>
            </td>
        </tr>
    </tbody>
</table>
<table class="uk-table uk-table-striped order-table" ng-if="ctrl.currentTab == 4">
        <div ng-if="ctrl.sales.length == 0 && ctrl.currentTab == 4"style="width:100%;text-align: center">No Sales</div>
    <thead ng-if="ctrl.sales.length > 0 && ctrl.currentTab == 4">
        <tr>
            <th>Id</th>
            <th>Customer</th>
            <th>Order Type</th>
            <th>Total Charge</th>
            <th>Amount Paid</th>
            <th>Change</th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="sale in ctrl.sales">
          <td>{{sale.id}}</td>
          <td>{{sale.name}}</td>
            <td>{{sale.type_of_order}}</td>
            <td>{{sale.total_amount | number:2}}</td>
            <td>{{sale.amount_paid | number:2}}</td>
            <td>{{ctrl.change(sale.total_amount,sale.amount_paid) | number:2}}</td>
        </tr>
    </tbody>
</table>
</div>
<div ng-include = "'view/template/cancel_delivery.template.php'"></div>
<div ng-include = "'view/template/checkout.template.php'"></div>
<div ng-include = "'view/template/cancel_order.template.php'"></div>
<div ng-include = "'view/template/delivery_receipt.template.php'"></div>
</div>

