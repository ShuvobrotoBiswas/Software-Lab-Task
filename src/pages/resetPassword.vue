<template>
  <div class="q-pa-md">
    <div class="q-py-md">
      <span class="text-bold text-h4">Reset Password</span>
    </div>
    <div class="row">
      <span class="text-h6">Remember your password?</span>
      <q-btn dense flat label="login" to="/login" color="orange-9"></q-btn>
    </div>
    <div class="q-py-md">
      <q-input
        color="orange"
        standout
        bottom-slots
        v-model="password"
        type="password"
        label="New Password"
        clearable
      >
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>
      <q-input
        color="orange"
        standout
        type="password"
        bottom-slots
        v-model="confirm_new_password"
        label="Confirm New Password"
        clearable
      >
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>
      <div class="q-py-md">
        <q-btn
          class="full-width"
          rounded
          label="Submit"
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
      password: ref(""),
      confirm_new_password: ref(""),
    };
  },
};
</script>
<style lang="sass" scoped>
.my-bdr
  border: 2px
  border-radius: 355px
</style>
