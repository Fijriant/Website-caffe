const toggleButton = document.getElementById('toggleButton');
let isDarkMode = false;

toggleButton.addEventListener('click', function() {
  const body = document.body;
  if (!isDarkMode) {
    body.style.backgroundColor = 'black'; // Ubah warna background menjadi hitam
    body.style.color = 'white'; // Ubah warna teks menjadi putih
  } else {
    body.style.backgroundColor = 'white'; // Kembalikan ke warna background default
    body.style.color = 'black'; // Kembalikan ke warna teks default
  }
  isDarkMode = !isDarkMode;
});
