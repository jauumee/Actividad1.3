document.getElementById('miBoton').addEventListener('click', function() {
  const p = document.getElementById('mensaje');
  p.textContent = 'JavaScript funciona correctamente 🎉 (fecha: ' + new Date().toLocaleString() + ')';
});
