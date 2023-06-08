import { defineStore } from "pinia";
import useProfile from './profile.js';

const contacs = defineStore('contacts', {
    state(){
        return{
            contacts: [
                { id: 2, name: 'Jason', avatar: '/avatars/avatar-02.jpg' },
                { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' },
            ]
        }
    },
    getters: {
        getContactById: (state) => (contactId) => {
            if(useProfile().id === contactId){
                return {
                    id: useProfile().id,
                    name: useProfile().username,
                    avatar: useProfile().avatar
                }
            }
            return state.contacts.find(el => el.id === contactId)
        },
        getContacts: (state) => {
            let array = []
            array.unshift({
                id: useProfile().id,
                name: useProfile().username,
                avatar: useProfile().avatar
            })
            state.contacts.forEach(el => {
                array.push(el)
            })
            return array
        }
    }
})

export default contacs;