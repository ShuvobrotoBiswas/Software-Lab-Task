<template>
  <div class="q-pa-md">
    <div class="q-py-md">
      <p class="text-h6">Signup 4 of 4</p>
      <span class="text-bold text-h4">Business Hours</span>
    </div>
    <div class="text-h6">
      Choose the hours your farm is open for pickups. This will allow customers
      to order deliveries.
    </div>
    <div class="q-py-md">
      <q-checkbox v-model="days" val="Monday" label="M" color="orange-9" />
      <q-checkbox v-model="days" val="Tuesday" label="T" color="orange-9" />
      <q-checkbox v-model="days" val="Wednesday" label="W" color="orange-9" />
      <q-checkbox v-model="days" val="Thursday" label="Th" color="orange-9" />
      <q-checkbox v-model="days" val="Friday" label="F" color="orange-9" />
      <q-checkbox v-model="days" val="Saturday" label="S" color="orange-9" />
      <q-checkbox v-model="days" val="Sunday" label="Su" color="orange-9" />
    </div>
    <div class="q-py-md">
      <q-checkbox
        v-model="times"
        val="8-10"
        label="8:00am - 10:00am"
        color="orange-9"
      />
      <q-checkbox
        v-model="times"
        val="10-1"
        label="10:00am - 1:00pm"
        color="orange-9"
      />
      <q-checkbox
        v-model="times"
        val="1-4"
        label="1:00pm - 4:00pm"
        color="orange-9"
      />
      <q-checkbox
        v-model="times"
        val="4-7"
        label="4:00pm - 7:00pm"
        color="orange-9"
      />
      <q-checkbox
        v-model="times"
        val="7-10"
        label="7:00pm - 10:00pm"
        color="orange-9"
      />
    </div>

    <div class="q-px-sm">
    </div>
    <!-- formdata -->

    <div class="q-py-md">
      <div class="q-py-md row flex-center absolute-bottom">
        <q-btn
          rounded
          class="q-mr-sm"
          to="/signupPage2"
          size="20px"
          icon="keyboard_backspace"
          flat
          color="black"
        />
        <q-btn
          rounded
          label="signup"
          style="width: 210px"
          size="20px"
          to="signupPage4"
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
      days: ref([]),
      times: ref([]),
    };
  },
};
</script>
<style lang="sass" scoped>
.my-bdr
  border: 2px
  border-radius: 355px
</style>
