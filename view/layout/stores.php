
      <div class="stores-section-head">
        <h1>Store Select</h1>
      </div>

      <div class="stores-select-body" ng-controller="StoreController as ctrl">

      		<div class="box widget store-card" ng-repeat = "store in ctrl.stores" ng-click="ctrl.enterStore($index)">
              <div class="store-img"><img src="web/img/shop.svg"></div>
              <div class="store-info">
              		<div class="store-name">{{store.name}}</div>
              		<div class="store-location">{{store.location}}</div>
              </div>
            </div>
            <div ng-include = "'view/template/open_register_modal.template.php'"></div>
      </div>
      <div class="menu-bar" ng-controller="MenuController as mCtrl">
<div class="bottom-menu">

</div>

<div ng-include = "'view/template/close_register.template.php'"></div>
<div ng-include = "'view/template/side_menu.template.php'"></div>
<div class="foot-hamburger-container">
   <span ng-click="mCtrl.openMenu()" uk-icon="icon: menu; ratio: 1.5" class="uk-icon">
   </span>
</div>
</div>

