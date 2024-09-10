document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Henrique & Juliano', image: './src/img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: './src/img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './src/img/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: './src/img/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: './src/img/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: './src/img/artista-mateus-kauan.jpg' }
    ];
    
    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './src/img/album-white-noise.jpg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './src/img/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './src/img/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './src/img/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: './src/img/album-caju.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './src/img/album-escandalo.jpg' }
    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
          <img src="${artist.image}" alt="imagem do ${artist.name}">
          <h3>${artist.name}</h3>
          <p>artista</p>
        
        `

        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
          <img src="${album.image}" alt="imagem do ${album.name}">
          <p>${album.name}</p>
        
        `

        albumsGrid.appendChild(albumCard)
    })
});
