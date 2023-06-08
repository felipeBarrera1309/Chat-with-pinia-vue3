import { defineStore } from 'pinia';


const store = defineStore('profile',{
    state: () => ({
        id: 1,
        username: '',
        avatar: '/public/avatars/avatar.jpg',
        status: null
    })
})

export default store;