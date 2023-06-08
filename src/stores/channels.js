import { defineStore } from 'pinia';
import messages from './messages';

const channels = defineStore('channels', {
    state: () => ({
        channels: [
            { id: 1, name: 'General', messages: null },
            { id: 2, name: 'Emergencias', messages: null },
            { id: 3, name: 'Anuncios', messages: null },
            { id: 4, name: 'Proyecto 1', messages: null },
            { id: 5, name: 'Non-work', messages: null },
            { id: 6, name: 'Atención a clientes', messages: null }
        ]
    }),
    getters: {
        findChannel: (state) => (search) => {
            return state.channels
            .filter(el => {
                return el.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            })
        }
    }
})

export default channels;