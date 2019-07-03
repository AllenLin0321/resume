<template>
  <div class="subPage projectPage">
    <Label :name="labelName" />
    <h1>Hello World!</h1>
  </div>
</template>


<script>
import Label from "@/components/Label";
export default {
  data() {
    return {
      labelName: "Project"
    };
  },
  components: {
    Label
  }
};
</script>
