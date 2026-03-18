// import the data
import {menu} from './data.js'

// select the nodes
const sectionCenter = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')



// functionality
// initial items load
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu, sectionCenter);
  displayMenuButtons(menu, btnContainer)
})








// functions
function displayMenuItems(array, container) {
  let displayMenu = array.map((item) => {
    return `<article class="menu-item">
          <img src="${item.img}" class="photo" alt="${item.title}">
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
          </div>
         </article>`;
  })
  displayMenu = displayMenu.join("");
  container.innerHTML = displayMenu
}

function displayMenuButtons(array, container) {
  const categories = array.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values;
  }, ['all']);
  const categoryBtns = categories.map((category) => {
    return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
  }).join("")
  container.innerHTML = categoryBtns
  const filterBtns = document.querySelectorAll('.filter-btn')
    //filtering
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem
        }
      });
      if (category === 'all') {
        displayMenuItems(menu, sectionCenter);
      } else {
        displayMenuItems(menuCategory, sectionCenter)
      }
    });
  });
}