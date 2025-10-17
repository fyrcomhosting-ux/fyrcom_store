const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;

    // Remove 'active' from all buttons
    filterButtons.forEach(b => b.classList.remove('active'));
    // Add 'active' to the clicked button
    btn.classList.add('active');

    if(category === 'all') {
      // Show all products
      generateProducts(productsData);
    } else {
      // Show only selected category
      const filtered = productsData.filter(p => p.category === category);
      generateProducts(filtered);
    }
  });
});
