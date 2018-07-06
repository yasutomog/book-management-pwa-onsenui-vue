<template>
  <v-ons-page>
    <v-ons-toolbar>
      <v-ons-list-item :modifier="md ? 'nodivider' : ''">
        <div class="left">
          <v-ons-icon icon="fa-search" class="list-item__icon"></v-ons-icon>
        </div>
        <label class="center">
          <v-ons-input float maxlength="20" placeholder="検索" v-model="search"></v-ons-input>
        </label>
      </v-ons-list-item>
    </v-ons-toolbar>
    <v-ons-list>
      <v-ons-list-header>書籍一覧</v-ons-list-header>
      <v-ons-list-item v-for="book in books" :key="book.id" modifier="chevron" @click="transition(book)">
        {{ book.name }}
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
import BookPage from './Book.vue';
export default {
  data() {
    return {
      search: ''
    };
  },
  computed: {
    books() {
      let vm = this
      let search = vm.search
      let filtered = this.$store.state.navigator.books.filter((book) => {
        return (book.name.indexOf(search) !== -1)
      })
      return filtered;
    }
  },
  methods: {
    transition(book) {
      book['isLending'] = (book.borrower !== null)
      this.$store.commit('navigator/select', book)
      this.$store.commit('navigator/options', {
        animation: 'default',
        callback: () => this.$store.commit('navigator/options', {})
      })
      this.$store.commit('navigator/push', {
        extends: BookPage
      })
    }
  }
};
</script>
