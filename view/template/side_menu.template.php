
<nav class="nav" id="side-bar-nav">
	<div style="font-size:16px"><a>{{$rootScope.user_info.firstname}}</a>
<a>{{$rootScope.user_info.email}}</a></div>

</div>

	<ul>

    <li ng-click="mCtrl.openCloseRegister()"><a>Close Register</a></li>

    <li ng-click="mCtrl.redirect('/')"><a>Logout</a></li>

  </ul>

  <ul>
    <li ng-click="mCtrl.switchTab('riders');mCtrl.openMenu()"><a>Riders</a></li>

    <li ng-click="mCtrl.switchTab('customers');mCtrl.openMenu()" ><a>Customers</a></li>

<!--     <li><a href="#"></a></li>

    <li><a href="#">Contact</a></li> -->

  </ul>

</nav>
