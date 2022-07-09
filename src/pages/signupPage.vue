<template>
  <div class="q-pa-md">
    <div class="q-py-md">
      <p class="text-h6">Signup 1 of 4</p>
      <span class="text-bold text-h4">Welcome!</span>
    </div>
    <div class="row flex-center">
      <q-btn
        dense
        class="my-bdr q-mr-sm"
        label="G"
        style="width: 100px"
        size="20px"
        outline
      ></q-btn>
      <q-btn
        dense
        icon="apple"
        class="my-bdr q-mr-sm"
        style="width: 100px"
        size="20px"
        outline
      ></q-btn>
      <q-btn
        dense
        icon="facebook"
        color="blue"
        class="my-bdr q-mr-sm"
        style="width: 100px"
        size="20px"
        outline
      ></q-btn>
    </div>
    <div class="text-center q-py-md">or signup with</div>

    <!-- formdata -->

    <div class="q-py-md">
      <q-input
        color="orange"
        standout
        bottom-slots
        v-model="full_name"
        label="Full Name"
        clearable
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>
      <q-input
        color="orange"
        standout
        bottom-slots
        v-model="email"
        label="Email Address"
        clearable
      >
        <template v-slot:prepend>
          <q-icon name="alternate_email" />
        </template>
      </q-input>
      <q-input
        color="orange"
        standout
        bottom-slots
        v-model="phone_number"
        label="Phone Number"
        clearable
      >
        <template v-slot:prepend>
          <q-icon name="phone" />
        </template>
      </q-input>
      <q-input
        color="orange"
        standout
        bottom-slots
        type="password"
        v-model="password"
        label="Password"
        clearable
      >
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>
      <q-input
        color="orange"
        standout
        bottom-slots
        type="password"
        v-model="confirm_password"
        label="Re-enter Password"
        clearable
      >
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>
      <div class="q-py-md row flex-center">
        <q-btn
          rounded
          label="login"
          class="q-mr-sm"
          to="/"
          size="20px"
          flat
          color="black"
        />
        <q-btn
          rounded
          label="continue"
          style="width:210px"
          size="20px"
          to="signupPage1"
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
      email: ref(""),
      password: ref(""),
      confirm_password: ref(""),
      full_name: ref(""),
      phone_number: ref(""),
    };
  },
};
</script>
<style lang="sass" scoped>
.my-bdr
  border: 2px
  border-radius: 355px
</style>
