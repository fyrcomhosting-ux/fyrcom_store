// All product data with categories
const productsData = [
    // Almacén products
    { name: "Rodamiento de bocamaza", price: "S/ 200.00", img: "images/1 (1).png", category: "almacen"},
    { name: "Pin de dirección", price: "S/ 20.00", img: "images/1 (2).png", category: "almacen" },
    { name: "Acoplamiento frontal limpiaparabrisas", price: "S/ 150.00", img: "images/1 (3).png", category: "almacen" },
    { name: "Sensor de longitud Stacker Kalmar", price: "S/ 500.00", img: "images/1 (4).png", category: "almacen" },
    { name: "Fusible CEF 16A 12Kv", price: "S/ 50.00", img: "images/1 (5).png", category: "almacen" },
    { name: "Fusible AC", price: "S/ 20.00", img: "images/1 (6).png", category: "almacen" },
    { name: "Pressure relief valve", price: "S/ 100.00", img: "images/1 (7).png", category: "almacen" },
    { name: "Fusible 170M", price: "S/ 30.00", img: "images/1 (8).png", category: "almacen" },
    { name: "Fusible", price: "S/ 30.00", img: "images/1 (9).png", category: "almacen" },
    { name: "Motor hidráulico del Flipper", price: "S/ 600.00", img: "images/1 (10).png", category: "almacen" },

    { name: "Alimentador 0813 ST/AL", price: "S/ 30.00", img: "images/1 (11).png", category: "almacen" },
    { name: "Encoder SSL", price: "S/ 100.00", img: "images/1 (12).png", category: "almacen" },
    { name: "Grape de cable", price: "S/ 20.00", img: "images/1 (13).png", category: "almacen" },
    { name: "Válvula de retención", price: "S/ 500.00", img: "images/1 (14).png", category: "almacen" },
    { name: "Filtro de succión", price: "S/ 15.00", img: "images/1 (15).png", category: "almacen" },
    { name: "Transformador de ventilador", price: "S/ 400.00", img: "images/1 (16).png", category: "almacen" },
    { name: "Ecohopper Enviro", price: "S/ 40.00", img: "images/1 (17).png", category: "almacen" },
    { name: "Resistencia de filtro de salida", price: "S/ 80.00", img: "images/1 (18).png", category: "almacen" },
    { name: "Fuente Quit UPS 1AC 500VA", price: "S/ 400.00", img: "images/1 (19).png", category: "almacen" },
    { name: "Reactor electrónico 100-240VAC", price: "S/ 120.00", img: "images/1 (20).png", category: "almacen" },

    { name: "Tomacorriente industrial", price: "S/ 20.00", img: "images/1 (21).png" },
    { name: "Lampara LED múltiple verde-rojo-amarillo", price: "S/ 300.00", img: "images/1 (22).png" },
    { name: "Cilindor de freno", price: "S/ 350.00", img: "images/1 (23).png" },
    { name: "Arnés eléctrico ", price: "S/ 500.00", img: "images/1 (24).png" },
    { name: "Ancla de cadena corto", price: "S/ 100.00", img: "images/1 (25).png" },
    { name: "Ancla de cadena para cadena central", price: "S/ 100.00", img: "images/1 (26).png" },
    { name: "Motor limpiaparabrisas", price: "S/ 150.00", img: "images/1 (27).png" },
    { name: "Tomacorriente industrial", price: "S/ 20.00", img: "images/1 (28).png" },
    { name: "Enfriador de aceite hidráulico", price: "S/ 500.00", img: "images/1 (29).png" },
    { name: "Guía twistlock", price: "S/ 500.00", img: "images/1 (30).png" },
    { name: "Tachones de uso vial", price: "S/ 28.00", img: "images/1 (31).png" },
    { name: "Bomba manual de lubricación Truper 50L", price: "S/ 250.00", img: "images/1 (32).png" },


    // Mangueras products
    // { name: "Manguera flexible 1", price: "S/ 50.00", img: "images/1 (6).png", category: "mangueras" },
    // { name: "Manguera industrial 2", price: "S/ 120.00", img: "images/1 (7).png", category: "mangueras" },
    // Otros products
    // { name: "Otro 1", price: "S/ 100.00", img: "images/1 (8).png", category: "otros" }
];

const galleryContainer = document.getElementById('product-gallery');

/**
 * Generates the product cards in the gallery
 * @param {Array} productsArray - list of products to show
 */
function generateProducts(productsArray) {
  galleryContainer.innerHTML = ""; // Clear previous products

  productsArray.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-6 col-md-4 col-lg-3 product-item';
    col.dataset.category = p.category;
    col.innerHTML = `
      <div class="card shadow-sm border-0 text-center">
        <img src="${p.img}" 
             class="card-img-top gallery-img" 
             alt="${p.name}" 
             data-bs-toggle="modal" 
             data-bs-target="#imageModal" 
             data-img="${p.img}">
        <div class="card-body p-2">
          <h6 class="mb-1">${p.name}</h6>
          <p class="text-primary fw-bold mb-0">${p.price}</p>
        </div>
      </div>
    `;
    galleryContainer.appendChild(col);
  });
}

// Initial load: show all products
generateProducts(productsData);

const searchInput = document.getElementById('productSearch');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  // Filter products by name
  const filtered = productsData.filter(p => 
    p.name.toLowerCase().includes(query)
  );

  generateProducts(filtered);

  // Optional: reset active filter button to 'Todos'
  filterButtons.forEach(b => b.classList.remove('active'));
  document.querySelector('[data-category="all"]').classList.add('active');
});


// Modal viewer
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('gallery-img')) {
    document.getElementById('modalImage').src = event.target.getAttribute('data-img');
  }
});
