<template>
  <v-ons-page>
    <custom-toolbar backLabel="一覧">
      {{ book.name }}
    </custom-toolbar>
    <v-ons-list>
      <v-ons-list-header>ステータス</v-ons-list-header>
      <v-ons-list-item :modifier="md ? 'nodivider' : ''" v-show="book.isLending">
        <div class="left">
          <v-ons-icon icon="md-face" class="list-item__icon"></v-ons-icon>
        </div>
        <label class="center">
          <v-ons-input modifier="material" float maxlength="20" placeholder="" v-model="book.borrower" v-bind:readOnly="book.isLending"></v-ons-input>
        </label>
      </v-ons-list-item>
      <v-ons-list-item :modifier="md ? 'nodivider' : ''">
        <div class="left">
          <v-ons-icon icon="fa-clock-o" class="list-item__icon"></v-ons-icon>
        </div>
        <label class="center">
          <v-ons-input type="date" modifier="material" float maxlength="20" placeholder="" v-model="book.returnDate" v-bind:readOnly="book.isLending" @change="changeDate"></v-ons-input>
        </label>
      </v-ons-list-item>
    </v-ons-list>
    <section>
      <v-ons-button modifier="large"  v-show="!book.isLending" @click="borrow" v-bind:disabled="isInvalid">借りる</v-ons-button>
      <v-ons-button modifier="large"  v-show="book.isLending" @click="restore">返却</v-ons-button>
    </section>
  </v-ons-page>
</template>
<script>
  export default {
    data() {
      return {
        isInvalid: true
      };
    },
    computed: {
      book() {
        return this.$store.state.navigator.selectedBook;
      }
    },
    methods: {
      borrow() {
        let selectedBook = this.$store.state.navigator.selectedBook
        this.$store.dispatch('navigator/borrow', {
          id: selectedBook.id,
          returnDate: selectedBook.returnDate
        })
      },
      restore() {
        let selectedBook = this.$store.state.navigator.selectedBook
        this.$store.dispatch('navigator/restore', selectedBook.id)
      },
      changeDate() {
        let vm = this
        let returnDate = this.$store.state.navigator.selectedBook.returnDate
        if (returnDate === null || returnDate === '') {
          vm.isInvalid = true
        } else {
          vm.isInvalid = false
        }

      }
    }
  };
</script>

<style scoped>
  section {
    margin: 16px;
  }
  ons-button {
    margin: 6px 0;
  }
</style>
