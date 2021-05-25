import * as mdb from 'mdb-ui-kit'; 

// Получить элемент контейнера
var btnContainer = document.getElementsByClassName("header__menu-list");

// Сделать все кнопки с class="btn" внутри контейнера
var btns = btnContainer.getElementsByClassName("header__link");

// Выполните цикл по кнопкам и добавьте активный класс к текущей/нажатой кнопке
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}