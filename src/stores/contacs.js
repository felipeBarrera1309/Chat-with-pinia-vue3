import { defineStore } from "pinia";
import useProfile from './profile.js';

const contacs = defineStore('contacts', {
    state(){
        return{
            contacts: [
                { id: 2, name: 'Jason', avatar: '/avatars/avatar-02.jpg' },
                { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' },
                { id: 4, name: 'Janet', avatar: '/avatars/avatar-04.jpg' },
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
            array.unshift({ avatar: useProfile().avatar })
            state.contacts.forEach(el => {
                const { avatar: avatarContacts } = el
                array.push({ avatar: avatarContacts })
            })
            return array
        }
    }
})

export default contacs;