document.addEventListener('DOMContentLoaded', () =>{
const artistsData=[
         { name:'caju',image:'./img/album-caju.jpg'},
         { name:'ceu-explica',image:'./img/album-ceu-explica.jpg'},
         { name:'escadalo',image:'./img/album-escandalo.jpg'},
         { name:'hit-me',image:'./img/album-hit-me.jpg'},
         { name:'racionais',image:'./img/album-racionais.jpg'},
         { name:'Gustavo-limma',image:'./img/artista-gustavo-limma.jpg'},
]

const albumsData =[
         { name:'Henrique-Juliano',image:'./img/artista-henrique-juliano.jpg'},
         { name:'jorge-Mateus',image:'./img/artista-jorge-mateus.jpg'},
         { name:'Luan-Santana',image:'./img/artista-luan-santana.jpg'},
         { name:'Mateus-Kauan',image:'./img/artista-mateus-kauan.jpg/'},
];

const artistGrid=document.querySelector('.artists-grid')
const albumsGrid=document.querySelector('.albums-grid')




artistsData.forEach( artist =>{
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card') 

    artistCard.innerHTML = `
        <img src ="${artist.image}"alt="imagem do ${artist.name}">
        <h3>${artist.nome}</h3>
        <p>artista</p> 
    
    `
    artistGrid.appendChild(artistCard)
 })

 albumsData.forEach( album =>{
        const albumCard= document.createElement('div')
        albumCard.classList.add('album-card') 

    albumCard.innerHTML = `
        <img src ="${album.image}"alt="imagem do ${album.name}">
        <h3>${album.name}</h3>
        <p>${album.artist}</p> 
    
    `
    albumsGrid.appendChild(albumCard)
    })
})




