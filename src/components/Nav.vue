<template>
  <v-container class="navbar">
    <v-layout align-center column justify-end >
      <v-flex class="xs12">
        <v-avatar :size="avatar.img_size">
          <img
            src="https://lmpixels.com/wp/kerge-wp/demo2dark/wp-content/uploads/sites/8/2018/03/my_photo.png"
            alt="John"
          >
        </v-avatar>
      </v-flex>
      <v-flex xs12 mt-4>
        <h2>林逸倫 Allen</h2>
        <h3>Front-End Developer</h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      avatar: {
        img_size: 110
      },
      
    };
  }
};
</script>


<style lang="scss" scoped>
.navbar {
  background-color: #222222;
  height: 100vh;
  color: white;
}
</style>
