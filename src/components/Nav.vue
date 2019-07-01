<template>
  <v-container class="site__header">
    <!-- First Session -->
    <v-layout align-center column>
      <v-flex class="xs12 header__image">
        <v-avatar :size="avatar.img_size">
          <img
            src="https://lmpixels.com/wp/kerge-wp/demo2dark/wp-content/uploads/sites/8/2018/03/my_photo.png"
            alt="John"
          >
        </v-avatar>
      </v-flex>
      <v-flex xs12 mt-4 class="text-xs-center">
        <h2 class="site__title headline">林逸倫 Allen</h2>
        <h3 class="site__subtitle subheading my-2">Front - End Developer</h3>
      </v-flex>
    </v-layout>

    <!-- Second Session -->
    <v-layout align-center column>
      <v-flex class="site__nav xs12">
        <v-layout
          class="site__nav__item"
          :class="{'site__nav__item--selected': checkCurrentPage(item)}"
          v-for="(item, index) in nav_items"
          :key="index"
          @click="routerPush(item.to)"
        >               
          <v-spacer></v-spacer>
          <v-flex>
            <v-icon class="site__nav__icon" dark :color="item.color">{{item.icon}}</v-icon>
            <span class="subheading">{{item.content}}</span>
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
      isSelected: true,
      avatar: {
        img_size: 110
      },
      nav_items: [
        {
          icon: "home",
          color: "#F44336",
          content: "Home",
          to: "/"
        },
        {
          icon: "person",
          color: "#008073",
          content: "About",
          to: "/about"
        },
        {
          icon: "trending_up",
          color: "#05BDD5",
          content: "Experience",
          to: "/experience"
        },
        {
          icon: "web",
          color: "#3F51B5",
          content: "Project",
          to: "/project"
        },
        {
          icon: "equalizer",
          color: "#9C27B0",
          content: "Skills",
          to: "/skills"
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
  },
  methods: {
    checkCurrentPage(selectedPage) {
      const selectedPageURL = selectedPage.to;
      const currentPageURL = this.$route.path;
      return selectedPageURL == currentPageURL;
    },
    routerPush(to) {
      if (to) {
        this.$router.push(to);
      }
    }
  }
};
</script>