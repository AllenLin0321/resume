<template>
  <div class="subPage skillsPage">
    <Label :name="labelName" />
    <v-layout row wrap>
      <v-flex>
        <v-card class="card">
          <v-card-title class="card__title">
            <h2>HTML/CSS</h2>
          </v-card-title>
          <v-card-text>
            <v-layout align-center>
              <v-flex xs3 v-for="(skill, index) in skills.html_css" :key="index">
                <v-tooltip bottom>
                  <template v-slot:activator="{on}">
                    <v-img
                      class="skill__img"
                      v-on="on"
                      :src="require(`@/assets/img/skills/${skill.fileName}`)"
                    ></v-img>
                  </template>
                  <ul class="pa-3" style="fontSize:1.5rem">
                    <li>瞭解 HTML 不同標籤的使用時機差異</li>
                    <li>撰寫好理解易維護的語意化 class 名稱</li>
                  </ul>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
        <!-- <v-card class="card mt-5">
          <v-card-title class="card__title">
            <h2>JavaScrip</h2>
          </v-card-title>
          <v-card-text>
            <v-layout align-center>
              <v-flex xs3 v-for="(skill, index) in skills.javaScript" :key="index">
                <v-tooltip bottom>
                  <template v-slot:activator="{on}">
                    <v-img
                      class="skill__img"
                      v-on="on"
                      :src="require(`@/assets/img/skills/${skill.fileName}`)"
                    ></v-img>
                  </template>
                  <span>{{ skill.toolTip }}</span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>-->
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Label from "@/components/Label";
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      labelName: "Skills",
      skills: {
        html_css: [
          {
            fileName: "html5.png",
            toolTip: "This is Html5"
          },
          {
            fileName: "css3.png",
            toolTip: "This is css3"
          },
          {
            fileName: "sass.png",
            toolTip: "This is sass"
          },
          {
            fileName: "bootstrap.png",
            toolTip: "This is bootstrap"
          }
        ],
        javaScript: [
          {
            fileName: "javascript.png",
            toolTip: "This is JavaScript"
          },
          {
            fileName: "jquery.png",
            toolTip: "This is jQuery"
          },
          {
            fileName: "vue.png",
            toolTip: "This is vue"
          },
          {
            fileName: "vuetify.png",
            toolTip: "This is vuetify"
          }
        ]
      }
    };
  },
  components: {
    Label
  },
  computed: {
      ...mapGetters([
          'getTest'
      ])
  },
  created() {
    console.log(this.getTest);
  }
};
</script>
