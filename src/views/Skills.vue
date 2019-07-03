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
            <v-layout>
              <v-flex xs3 v-for="(skill, index) in skills.html_css" :key="index">
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
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Label from "@/components/Label";
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
        ]
      }
    };
  },
  components: {
    Label
  }
};
</script>
