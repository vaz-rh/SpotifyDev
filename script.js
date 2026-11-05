document.addEventListener('DOMContentLoaded', function() {

const artistsData = [
    {name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg'},
    {name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg'},
    {name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg'},
    {name: 'Mari Fernandez', image: './img/artista-mari-fernandez.jpg'},
    {name: 'Gustavo Mioto', image: './img/artista-gustavo-mioto.jpg'},
    {name: 'Luan Santana', image: './img/artista-luan-santana.jpg'},
];

const albumData = [
    {name: 'O Céu Explica Tudo', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg'},
    {name: 'Atemporal', artist: 'Gustavo Mioto', image: './img/album-atemporal.jpg'},
    {name: 'Tudo Em Paz', artist: 'Jorge & Mateus', image: './img/album-tudo-empaz.jpg'},
    {name: 'No barzinho', artist: 'Mari Fernandez', image: './img/album-no-barzinho.jpg'},
    {name: 'Registro Histórico', artist: 'Luan Santana', image: './img/album-registro.jpg'},
    {name: 'Um Novo Dia', artist: 'Zé Neto & Cristiano', image: './img/album-um-novo.jpg'},
];

const artistGrid = document.querySelector('.artist-grid');

const albumGrid = document.querySelector('.album-grid');

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');
        artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
        `;
        artistGrid.appendChild(artistCard);
        
    });

    albumData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');
    
        albumCard.innerHTML = `
            <img src="${album.image}" alt="${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `;
        albumGrid.appendChild(albumCard);
    });
});     
        