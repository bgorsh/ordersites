const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabsItems = document.querySelectorAll('.tab__content');

tabsBtn.forEach(function(item) {
  item.addEventListener('click', function() {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);


    tabsBtn.forEach(function(item) {
      item.classList.remove('active');
    })

    tabsItems.forEach(function(item) {
      item.classList.remove('active');
    })

    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  })
});

document.querySelector('.tabs__btn').click();

