document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  function switchTab(targetId) {
    // 1. Remover clase 'active' de todos los botones y paneles
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // 2. Activar el botón clickeado
    const activeButton = document.querySelector(`[data-tab="${targetId}"]`);
    if (activeButton) {
      activeButton.classList.add('active');
    }

    // 3. Mostrar el panel correspondiente
    const activePanel = document.getElementById(targetId);
    if (activePanel) {
      activePanel.classList.add('active');
    }
  }

  // Añadir evento de click a cada botón
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
});