import { defineStore } from 'pinia';
import useMessages from './messages.js';


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
            }).map(el => {
                return {
                    ...el,
                    messages: useMessages().findMessagesUnread(el.id)
                }
            })
        },
        seeNameChannel: (state) => (id) => {
            return state.channels.find(el => el.id === id)
        }
    }
})

export default channels;