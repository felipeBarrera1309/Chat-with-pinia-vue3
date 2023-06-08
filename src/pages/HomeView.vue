<template>
    <div class="home">
        <aside>
            <InputSearch v-model="search" />
            <ProfileCard
              :avatar="profile.avatar"
              :username="profile.username"
              :status="profile.status"
            />
          <div class="channels-title" @click="toGoHome" >Canales <Icon icon="carbon:hashtag" /></div>
          <div class="channels">
              <ChatItem
                v-for="channel in searchMessages(search)"
                :key="channel.id"
                :id="channel.id"
                :name="channel.name"
                :messages="channel.messages"
              />
          </div>
        </aside>
        <main>
          <router-view />
        </main>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import InputSearch from '@/components/InputSearch.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import ChatItem from '@/components/ChatItem.vue'
import { ref, reactive, watch } from 'vue'
import profileStore   from '../stores/profile.js';
import channelsStore from '../stores/channels.js';
import useMessagesStore from '../stores/messages.js';

const search = ref('')
const route = useRoute()
const router = useRouter()

const profile = profileStore()
const channels = reactive()

function searchMessages(search){
    return channelsStore()?.findChannel(search)
}

watch(
  () => route.params.id,
  (newIdi) => {
    useMessagesStore().messagesAllowed(Number(newIdi))
  },
  { immediate: true }
)

function toGoHome(){
  router.push({ name: 'homeMain' })
}

</script>

<style lang="scss" scoped>
.home {
  @apply flex h-screen;
  aside {
    @apply flex flex-col w-80 min-w-max px-6 py-5 gap-4 bg-zinc-800;
    .channels-title {
      @apply flex items-center gap-2 mt-2 ml-3 text-xl font-bold text-neutral-200;
    }
    .channels {
      @apply flex flex-col gap-2 overflow-y-auto;
    }
  }
  main {
    @apply w-full;
  }
}
</style>