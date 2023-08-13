import { defineStore } from "pinia";
import useProfile from './profile.js';


const messages = defineStore('messages', {
    state(){
        return{
            messages: [
                { id: 1, author: 1, message: 'Hola 👀', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 2, author: 2, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 2, author: 2, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 2, author: 2, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 2, author: 2, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 2, author: 2, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 2, author: 2, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 2, author: 1, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 2, author: 1, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 2, author: 1, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 2, author: 2, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 2, author: 2, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 2, author: 1, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 2, author: 2, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 2, author: 2, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
                { id: 3, author: 3, message: 'Hola a todo el mundo 😊', timestamp: new Date().toLocaleTimeString(), channelId: 4, read: false },
                { id: 4, author: 3, message: '¿Cómo están?', timestamp: new Date().toLocaleTimeString(), channelId: 3, read: false },
                { id: 5, author: 1, message: 'Todo muy bien :D', timestamp: new Date().toLocaleTimeString(), channelId: 3, read: false },
                { id: 6, author: 2, message: 'Si, todo bien.', timestamp: new Date().toLocaleTimeString(), channelId: 5, read: false },
                { id: 7, author: 1, message: 'Oigan, les escribo para contarles algo... 😌', timestamp: new Date().toLocaleTimeString(), channelId: 3, read: false },
                { id: 8, author: 3, message: 'A vers 👀', timestamp: new Date().toLocaleTimeString(), channelId: 6, read: false },
                { id: 9, author: 2, message: 'Ahhhh!!', timestamp: new Date().toLocaleTimeString(), channelId: 6, read: false },
                { id: 10, author: 2, message: '¡Cuenta ese chismesito yaaaa!', timestamp: new Date().toLocaleTimeString(), channelId: 2, read: false },
                { id: 11, author: 1, message: 'Pues, ¡acabamos de lanzar los nuevos cursos de Vue.js!', timestamp: new Date().toLocaleTimeString(), channelId: 5, read: false },
            ]
        }
    },
    getters: {
        findMessageByID: (state) => (channelId) => {
            return state.messages.filter(ele => ele.channelId === channelId)
        },
        findMessagesUnread: (state) => (channelId) => {
            return state.findMessageByID(channelId).filter(messages => !messages.read).length
        }
    },
    actions: {
        addMessagesToChannel(idChat, seeMessage){
            this.messages.push({
                id: Math.floor(Math.random() * 50),
                author: useProfile().id,
                timestamp: new Date().toLocaleDateString(),
                message: seeMessage,
                channelId: idChat,
                read: false
            })
        },
        messagesAllowed(idi){
            this.messages = this.messages.map(el => {
                if(idi === el.channelId){
                    return {
                        ...el,
                        read: true
                    }
                }
                return {
                    ...el
                }
            })
        }
    }
})

export default messages;