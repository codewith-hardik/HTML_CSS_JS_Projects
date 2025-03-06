// Get DOM elements
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

// Open Modal
openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close Modal on Button Click
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close Modal on Click Outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Close Modal on ESC Key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    modal.style.display = 'none';
  }
});
