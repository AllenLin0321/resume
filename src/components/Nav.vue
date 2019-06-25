<template>
  <v-container class="site-header pa-0">
    <!-- First Session -->
    <v-layout align-center column>
      <v-flex class="xs12 header-image mt-5">
        <v-avatar :size="avatar.img_size">
          <img
            src="https://lmpixels.com/wp/kerge-wp/demo2dark/wp-content/uploads/sites/8/2018/03/my_photo.png"
            alt="John"
          >
        </v-avatar>
      </v-flex>
      <v-flex xs12 mt-4 class="text-xs-center site-title-block">
        <h2 class="site-title headline">林逸倫 Allen</h2>
        <h3 class="site-subtitle subheading my-2">Front-End Developer</h3>
      </v-flex>
    </v-layout>

    <!-- Second Session -->
    <v-layout align-center column mt-4>
      <v-flex class="site-nav xs12">
        <v-layout py-2 class="site-nav--item" v-for="(item, index) in nav_items" :key="index">
          <v-spacer></v-spacer>
          <v-flex>
            <v-icon dark :color="item.color">{{item.icon}}</v-icon>
            <span class="subheading ml-2">{{item.content}}</span>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <!-- Third Session -->
    <v-layout align-center column mt-4>
      <v-flex class="site-contact xs12">
        <v-btn fab small color="#444" v-for="(contact, index) in site_contact" :key="index">
          <v-icon color="grey">{{ contact.icon }}</v-icon>
        </v-btn>
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
      nav_items: [
        {
          icon: "home",
          color: "#F44336",
          content: "Home"
        },
        {
          icon: "person",
          color: "#008073",
          content: "About"
        },
        {
          icon: "trending_up",
          color: "#05BDD5",
          content: "Experience"
        },
        {
          icon: "web",
          color: "#3F51B5",
          content: "Project"
        },
        {
          icon: "equalizer",
          color: "#9C27B0",
          content: "Skills"
        },
        {
          icon: "description",
          color: "#795548",
          content: "Resume"
        }
      ],
      site_contact: [
        {
          icon: "fas fa-envelope",
          link: null
        },
        {
          icon: "fab fa-linkedin-in",
          link: null
        },
        {
          icon: "fab fa-github",
          link: null
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.site-header {
  background-color: #222222;
  height: 100vh;
  color: white;
}

.site-nav {
  width: 100%;

  &--item {
    cursor: pointer;
    &:hover {
      background-color: #333333;
      border-right: 2px solid #ffcd38;
    }
  }
}
</style>
