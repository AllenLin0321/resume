<template>
  <div class="subPage experiencePage">
    <Label :name="labelName" />
  </div>
</template>

<script>
import Label from "@/components/Label";
export default {
  data() {
    return {
      labelName: "Experience"
    };
  },
  components: {
    Label
  }
};
</script>
