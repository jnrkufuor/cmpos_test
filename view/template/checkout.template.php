<modal id="checkout">
    <div class="modal">
        <div class="modal-body" style="width:auto;">
            
         <img class="close-btn" src="web/img/close.svg" ng-click="ctrl.closeModal('checkout')">
         <div class="receipt-container">
             <div class="modal-header">Receipt</div>
             <div class="receipt-block" id="order-receipt-block">
                 <h1 class="receipt-header">Sale.no:{{ctrl.selectedOrder.id}}</h1>
                 <div class="receipt-order-info">
                     <p>Date:  {{ctrl.selectedOrder.date}}</p>
                     <p>OrderType:  {{ctrl.selectedOrder.type_of_order}}</p>
                     <p>Customer:  {{ctrl.selectedOrder.name}} - {{ctrl.selectedOrder.phone}} - {{ctrl.selectedOrder.default_location}}</p>
                 </div>
                 <table class="uk-table uk-table-divider receipt-cart-table">
    <thead>
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="item in ctrl.cartItems">
            <td>{{item.name}}</td>
            <td>{{item.qty}}</td>
            <td>GH₵ {{item.cost | number:2}}</td>
        </tr>
    </tbody>
</table>
        <div class="order-charge-summary">
            <div class="order-charge-summary-entry"><span class="receipt-title">Subtotal</span><span class="receipt-dotted-line-container"><hr  class="receipt-dotted-line" style="border-top: dotted 1px;" /></span><span class="receipt-summary-value">GH₵ {{ctrl.subtotal}}</span></div>

          <div class="order-charge-summary-entry"><span class="receipt-title">Discount</span><span class="receipt-dotted-line-container"><hr  class="receipt-dotted-line" style="border-top: dotted 1px;" /></span><span class="receipt-summary-value">GH₵ 0.00</span></div>

          <div class="order-charge-summary-entry"><span class="receipt-title">Tax</span><span class="receipt-dotted-line-container"><hr  class="receipt-dotted-line" style="border-top: dotted 1px;" /></span><span class="receipt-summary-value">GH₵ 0.00</span></div>

            <div class="order-charge-summary-entry"><span class="receipt-title">Total</span><span class="receipt-dotted-line-container"><hr  class="receipt-dotted-line" style="border-top: dotted 1px;" /></span><span class="receipt-summary-value">GH₵ {{ctrl.total()}}</span></div>



           <hr style="width:calc(100% - 20px); margin: 10px 0px;" />

      <div  class="order-charge-summary-entry"><span style="width:85px" class="receipt-title">Amount paid</span><span class="receipt-dotted-line-container"><hr  class="receipt-dotted-line" style="border-top: dotted 1px;width:90px" /></span><span style="font-weight: bold" class="receipt-summary-value">GH₵ {{ctrl.amountPaid | number:2}}</span></div>



      <div  class="order-charge-summary-entry"><span class="receipt-title">Change</span><span class="receipt-dotted-line-container"><hr  class="receipt-dotted-line" style="border-top: dotted 1px;" /></span><span style="font-weight: bold" class="receipt-summary-value">GH₵ {{ctrl.change(ctrl.total(),ctrl.amountPaid) | number:2}}</span></div>

        </div>
             </div>
        </div>
        <div class="check-out-info-block" >
        <div class="modal-header">Checkout</div>
        <div class="modal-content checkout-amount-paid-container">
            <div style="font-size:20px;text-align:right;color:white;    margin-bottom: 10px;">GH₵</div>
            <div style="text-align:left"><h1><p>Amount to be paid</p>{{ctrl.charge | number:2}}</h1></div>
        </div>
        <div class="modal-content">
            <div style="width: 125px;
    padding-right: 5px;display: inline-block;">
            <h1>Amount Paid</h1>
            <div><input  class="modal-text-input" type="text" placeholder="0.00" type="number"  id="openBalance" ng-model="ctrl.amountPaid"></div>
        </div>
         <div style="width: 125px;display: inline-block;">
            <h1>Change</h1>
            <div><input  class="modal-text-input" type="text" type="number"  id="openBalance" value="GH₵ {{ctrl.change(ctrl.charge,ctrl.amountPaid)}}"></div>
        </div>
        </div>
            <div class="modal-content">
            <h1>Payment method</h1>
            <select ng-model="ctrl.paymentMethod" class="uk-select">
                    <option>Cash</option>
                    <option>Credit</option>
            </select>
        </div>
        <div style="text-align: center";>
   
              <button class="cancel-button" ng-click="ctrl.closeModal('checkout')" onclick="printJS({ printable: 'order-receipt-block', type: 'html'})"><span  uk-icon="icon:  album; ratio: 1"></span>Print</button>
                 <button class="save-button" ng-click="ctrl.closeOrder()"><span  uk-icon="icon: check; ratio: 1"></span> Checkout Order</button>

            <button class="save-button" ng-click="ctrl.closeOrder()"  onclick="printJS({ printable: 'order-receipt-block', type: 'html'})"><span  uk-icon="icon: cart; ratio: 1"></span> Checkout & Print Receipt</button>


        </div>
        </div>


    </div>
    </div>
    <div class="modal-background"></div>
</modal>