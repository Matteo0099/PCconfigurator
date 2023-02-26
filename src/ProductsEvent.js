// Get all menu items
const menuItems = document.querySelectorAll('.box-list a');

// Get the CPU item group and show it
const cpuGroup = document.querySelector('.cpu');
if (cpuGroup) {
  cpuGroup.style.display = 'block';
}

// Add click event listener to each menu item
menuItems.forEach(item => {
  item.addEventListener('click', event => {
    // Prevent default link behavior
    event.preventDefault();

    // Get the name of the clicked item
    const itemName = item.textContent.toLowerCase();

    // Get the corresponding item group and show it
    const itemGroup = document.querySelector(`.${itemName}`);
    if (itemGroup) {
      itemGroup.style.display = 'block';
    }

    // Hide all other item groups
    const otherGroups = document.querySelectorAll(`.product-group:not(.${itemName})`);
    otherGroups.forEach(group => {
      group.style.display = 'none';
    });
  });
});
