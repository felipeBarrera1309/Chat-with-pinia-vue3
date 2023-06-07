import { defineStore } from 'pinia';


const store = defineStore('profile',{
    state: () => ({
        id: 1,
        username: 'felipeBarrera1309',
        avatar: '/public/avatars/avatar.jpg',
        status: 'active'
    })
})

export default store;