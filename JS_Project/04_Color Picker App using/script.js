// Select elements
const colorPicker = document.getElementById('colorPicker');
const colorCode = document.getElementById('colorCode');
const colorDisplay = document.getElementById('colorDisplay');
const copyButton = document.getElementById('copyButton');

// Update the color when the picker value changes
colorPicker.addEventListener('input', () => {
  const selectedColor = colorPicker.value;
  colorCode.textContent = selectedColor;
  colorDisplay.style.backgroundColor = selectedColor;
});

// Copy the color code to the clipboard
copyButton.addEventListener('click', () => {
  const colorToCopy = colorCode.textContent;
  navigator.clipboard.writeText(colorToCopy)      // copy text...
    .then(() => {
      copyButton.style.backgroundColor = colorToCopy
    })
    .catch(() => {
      alert('Failed to copy!');
    });
});
