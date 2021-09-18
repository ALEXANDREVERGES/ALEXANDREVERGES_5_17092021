const img = document.getElementById('img')

fetch('http://localhost:3000/api/teddies')
.then(res => res.json())
.then(data => img.src = data[0].imageUrl)

