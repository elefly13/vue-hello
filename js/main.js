Vue.config.devtools = true;

// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const app = new Vue (
    {
        el: '#root',
        data: {
            message: 'Benvenuto nel mondo VUE 3 JS',
            boxImage: 'myImg',
            img:"https://v3.vuejs.org/logo.png"

        }
        

})

// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
