let buttonEl = document.querySelector('#toggle');
let rows = document.querySelectorAll('.shop-row');
let search = document.querySelector('.search-container');

const showMap = () => {
  rows.forEach(row => row.classList.remove('hide-list'))
    search.classList.remove('hide-list')

    document.querySelector('#map').classList.add('hide-map')
    
    buttonEl.innerHTML = "Map"
}

const toggle = () => {

 
  if (buttonEl.innerHTML == "Map") {
    document.querySelector('#map').classList.remove('hide-map')
    map.resize()

    rows.forEach(row => row.classList.add('hide-list'))
    search.classList.add('hide-list')

    buttonEl.innerHTML = "List"
  } else if (buttonEl.innerHTML == "List") {
    showMap()
  } else {
    location.href = "/openbook";
  }


}
