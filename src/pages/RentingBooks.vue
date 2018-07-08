<template>
  <v-ons-page>
    <v-ons-list>
      <v-ons-card v-for="book in books" :key="book.id" material>
        <div class="title">
          {{ book.name }}
        </div>
        <div class="content">
          <v-ons-list>
            <v-ons-list-item>
              <v-ons-icon icon="md-face" class="list-item__icon"></v-ons-icon>
              {{ book.borrower }}
            </v-ons-list-item>
            <v-ons-list-item>
              <v-ons-icon icon="fa-clock-o" class="list-item__icon"></v-ons-icon>
              {{ book.returnDate }}
            </v-ons-list-item>
          </v-ons-list>
        </div>
      </v-ons-card>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
  export default {
    computed: {
      books() {
        let filtered = this.$store.state.navigator.books.filter((book) => {
          return (book.borrower !== null)
        })
        return filtered;
      }
    }
  }
</script>

<style scoped>
  ons-list {
    background-color: transparent;
    background-image: none;
  }
</style>
