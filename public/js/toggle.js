const toggle = () => {
  
  let buttonEl = document.querySelector('#toggle');
  let rows = document.querySelectorAll('.shop-row');
  let search = document.querySelector('.search-container');
 
  if (buttonEl.innerHTML == "Map") {
    document.querySelector('#map').classList.remove('hide-map')
    map.resize()

    rows.forEach(row => row.classList.add('hide-list'))
    search.classList.add('hide-list')

    buttonEl.innerHTML = "List"
  } else if (buttonEl.innerHTML == "List") {
    rows.forEach(row => row.classList.remove('hide-list'))
    search.classList.remove('hide-list')

    document.querySelector('#map').classList.add('hide-map')
    
    buttonEl.innerHTML = "Map"
  } else {
    location.href = "/openbook";
  }


}
