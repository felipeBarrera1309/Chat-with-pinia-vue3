<template>
    <div class="messages">
        <header>
            <h2>{{ title }}</h2>
            <div class="people-list">
                <div
                  class="people-item"
                  v-for="p in people"
                  :key="p.id"
              >
                  <img :src="p.avatar" :alt="p.name" />
              </div>
            </div>
        </header>
        <div class="content">
            <MessageItem
              v-for="message in messagesView"
              :key="message.id"
              :avatar="message.imAuthor.avatar"
              :author="message.imAuthor.name"
              :message="message.message"
              :time="message.timestamp"
              :is-self="message.self"
            />
            <span ref="end"></span>
        </div>
        <footer>
            <textarea rows="3" @keypress.enter="writeMessage($event.target.value)" ></textarea>
            <button>
              <Icon icon="carbon:send-alt" />
            </button>
        </footer>
    </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import MessageItem from '@/components/MessageItem.vue'
import useMessagesStore from '../stores/messages.js';
import useContacts from '../stores/contacs.js';
import useChannelName from '../stores/channels.js';

const route = useRoute()

const end = ref(null)
const channelId = ref(null)
const title = ref('')
const people = reactive(useContacts().getContacts)
const write = ref('')

function writeMessage(value){
  console.log('valor del textTarea: ', value);
}

const messagesView = computed(() => {
  return useMessagesStore().findMessageByID(Number(channelId.value)).map(element => {
    const imAuthor = useContacts().getContactById(element.author)
    if(!imAuthor) return element
    return {
      ...element,
      imAuthor,
      self: imAuthor.id === 1
    }
  })
})

const scrollToBottom = () => {
  end.value?.scrollIntoView({
    behavior: 'smooth'
  })
}

watch(
  () => route.params.id,
  (id) => {
    channelId.value = id
    title.value = useChannelName().seeNameChannel(Number(id)).name
    scrollToBottom()
  },
  { immediate: true }
)

scrollToBottom()
</script>

<style lang="scss" scoped>
.messages {
  @apply flex flex-col h-full;
  header {
    @apply flex justify-between items-center px-6 py-2;
    h2 {
      @apply font-bold text-2xl;
    }
    .people-list {
      @apply flex gap-1;
      .people-item {
        @apply flex justify-center items-center border-4 border-neutral-700 rounded-full;
        img {
          @apply w-8 rounded-full;
        }
      }
    }
  }
  .content {
    @apply flex flex-col gap-4 p-4 h-full overflow-y-auto;
  }
  footer {
    @apply flex p-2;
    textarea {
      @apply w-full px-2 py-2 resize-none bg-zinc-800 rounded-tl-md rounded-bl-md focus:outline-none;
    }
    button {
      @apply flex justify-center items-center px-4 bg-zinc-800 hover:bg-zinc-700 rounded-tr-md rounded-br-md text-2xl;
    }
  }
}
</style>