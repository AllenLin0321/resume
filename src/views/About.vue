<template>
  <div class="subPage aboutPage">
    <Label :name="labelName" />
  </div>
</template>


<script>
import Label from "@/components/Label";
export default {
  data() {
    return {
      labelName: "About Me"
    };
  },
  components: {
    Label
  }
};
</script>
