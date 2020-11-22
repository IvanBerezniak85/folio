window.onload = function () {

	var menuItems = document.getElementsByClassName('menu-items-b');
	var linksList = document.getElementsByClassName('links-items-b');

	var burger = document.getElementById('burger').onclick = menuShowBurger;
	function menuShowBurger () {
		for (var i = 0; i < menuItems.length; i++) {
			if (menuItems[i].style.display == 'none' || menuItems[i].style.display == '') {
				menuItems[i].style.display = 'block';
			}
			else {
				menuItems[i].style.display = 'none';
			}
		}
	}

	var links = document.getElementById('alink').onclick = menuShowLinks;
	function menuShowLinks () {
		for (var i = 0; i < linksList.length; i++) {
			if (linksList[i].style.display == 'none' || linksList[i].style.display == '') {
				linksList[i].style.display = 'flex';
			}
			else {
				linksList[i].style.display = 'none';
			}
		}
	}

	document.addEventListener("click", burgerClose);
	document.addEventListener("click", closeLinks);

	var one = document.onclick = burgerClose;
	function burgerClose (e){
		for (var i = 0; i < menuItems.length; i++) {
			if (e.target.id != 'burger' && e.target.id != 'push-one') {
				menuItems[i].style.display = 'none';
			}
		}
	}

	
	var two = document.onclick = closeLinks;
	function closeLinks (e){
		for (var i = 0; i < linksList.length; i++) {
			if (e.target.id != 'alink' && e.target.id != 'push-two') {
				linksList[i].style.display = 'none';
			}
		}
	}
	
    lightbox.option({
      'alwaysShowNavOnTouchDevices': true,
	  'disableScrolling': true,
	  'fitImagesInViewport': true,
	  'Wraparound': true,
    })
    
}

