import { defineStore } from "pinia";

const contacs = defineStore('contacts', {
    state(){
        return{
            contacts: [
                { id: 2, name: 'Jason', avatar: '/avatars/avatar-02.jpg' },
                { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' }
            ]
        }
    }
})

export default contacs;