document.body.insertAdjacentHTML('beforeend', `
  <footer>
    <p>Contáctanos mediante este número <strong>+51 981 332 889</strong> o vía Whatsapp para las cotizaciones.</p>
    <p>&copy; <span id="year"></span> FYRCOM S.A.C. Todos los derechos reservados.</p>
  </footer>
`);

// Set dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
