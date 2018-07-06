<template>
  <v-ons-navigator swipeable swipe-target-width="50px"
    :page-stack="pageStack"
    :pop-page="storePop"
    :options="options"
    :class="{ 'border-radius': borderRadius }"
  ></v-ons-navigator>
</template>

<script>
import AppSplitter from './AppSplitter.vue';

export default {
  beforeCreate() {
    this.$store.commit('navigator/push', AppSplitter);
  },
  data() {
    return {
      shutUp: this.md
    }
  },
  computed: {
    pageStack() {
      return this.$store.state.navigator.stack;
    },
    options() {
      return this.$store.state.navigator.options;
    },
    borderRadius() {
      return new URL(window.location).searchParams.get('borderradius') !== null;
    }
  },
  methods: {
    storePop() {
      this.$store.commit('navigator/pop');
    }
  }
};
</script>
