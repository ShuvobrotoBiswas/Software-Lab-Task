<template>
  <div class="q-pa-md">
    <div class="q-py-md">
      <span class="text-bold text-h4">Forgot Password?</span>
    </div>
    <div class="row">
      <span class="text-h6">Remember your password?</span>
      <q-btn
        dense
        flat
        label="login"
        to="/login"
        color="orange-9"
      ></q-btn>
    </div>
    <div class="q-py-md">
      <q-input
        color="orange"
        standout
        class="q-py-md"
        type="number"
        bottom-slots
        v-model="phone"
        label="Phone Number"
        clearable
      >
        <template v-slot:prepend>
          <q-icon name="phone" />
        </template>
      </q-input>
      <div class="q-py-md">
        <q-btn
          class="full-width"
          rounded
          to="/otpVerify"
          label="send code"
          size="20px"
          type="submit"
          color="orange-9"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      phone: ref(""),
    };
  },
};
</script>
<style lang="sass" scoped>
.my-bdr
  border: 2px
  border-radius: 355px
</style>
