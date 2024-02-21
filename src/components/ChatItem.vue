<template>
    <router-link
      :to="`${id}`"
      class="chat-item"
    >
      <h5>{{ name }}</h5>
      <div class="badge" v-if="messages">{{ messages }}</div>
    </router-link>
    <p>{{ 'Plasma' }}</p>
    <p>{{ 'LG' }}</p>
</template>


<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    id: {
      type: Number,
      default: 0
    },
    name:{
      type: String,
      default: ''
    },
    messages:{
      type: Number,
      default: 0
    }
})

</script>

<style lang="css" scoped>

.chat-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0px 15px;
    border-radius: 20px;
    transition: 0.3s ease-in-out;
}
.chat-item:hover{
  background-color: rgb(53, 53, 56);
}

.chat-item .router-link-active, .router-link-exact-active{
  background-color: rgb(53, 53, 56);
}

.chat-item .badge{
  height: 20px;
  width: 20px;
  padding: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(53, 53, 56);
}

</style>