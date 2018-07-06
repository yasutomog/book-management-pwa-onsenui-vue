<template>
  <v-ons-page modifier="white">
    <v-ons-list-title>メニュー</v-ons-list-title>
    <v-ons-list>
      <v-ons-list-item v-for="(item, index) in access" :key="item.title"
        :modifier="md ? 'nodivider' : ''"
        @click="loadView(index)"
      >
        <div class="left">
          <v-ons-icon fixed-width class="list-item__icon" :icon="item.icon"></v-ons-icon>
        </div>
        <div class="center">
          {{ item.title }}
        </div>
        <div class="right">
          <v-ons-icon icon="fa-link"></v-ons-icon>
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  methods: {
    loadView(index) {
      this.$store.commit('tabbar/set', index);
      this.$store.commit('splitter/toggle');
    },
    loadLink(url) {
      window.open(url, '_blank');
    }
  },
  data() {
    return {
      access: [
        {
          title: '書籍一覧',
          icon: 'md-book, material:md-edit'
        },
        {
          title: 'レンタル中',
          icon: 'md-face, material:md-home'
        },
        {
          title: '期限切れ',
          icon: 'md-time-restore, material: md-movie-alt'
        }
      ]
    };
  }
};
</script>

<style scoped>
.profile-pic {
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #DDD;
  color: rgba(0, 0, 0, .56);
  padding-bottom: 8px;
}
.page--material .profile-pic {
  background-color: #f6f6f6;
}

.profile-pic > img {
  display: block;
  max-width: 100%;
}
</style>

<style>
.page--material__background.page--white__background {
  background-color: #fff;
}
</style>
