<template>
  <div class="q-pa-md">
    <div class="row flex-center">
      <div class="row flex-center">
        <q-btn
          icon="done"
          color="green"
          flat
          size="150px"
          style="height: 80px"
          dense
        ></q-btn>
      </div>
      <div class="q-py-md row flex-center">
        <span class="text-bold text-h4 row flex-center">You're all done!</span>
      </div>
      <div class="text-h6 text-center">
        Hang tight! We are currently reviewing your account and will follow up
        with you in 2-3 business days. In the meantime, you can setup your
        inventory.
      </div>
    </div>

    <!-- formdata -->

    <div class="q-py-md row flex-center fixed-bottom">
      <q-btn
        rounded
        label="got it !"
        style="width: 300px"
        size="20px"
        to="/"
        color="orange-9"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {};
  },
};
</script>
<style lang="sass" scoped>
.my-bdr
  border: 2px
  border-radius: 355px
</style>
