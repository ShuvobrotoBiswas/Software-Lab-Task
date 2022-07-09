<template>
  <div class="q-pa-md">
    <div class="q-py-md">
      <p class="text-h6">Signup 2 of 4</p>
      <span class="text-bold text-h4">Farm Info</span>
    </div>

    <!-- formdata -->

    <div class="q-py-md">
      <q-input
        color="orange"
        standout
        bottom-slots
        v-model="business_name"
        label="Business Name"
        clearable
      >
        <template v-slot:prepend>
          <q-icon name="sell" />
        </template>
      </q-input>
      <q-input
        color="orange"
        standout
        bottom-slots
        v-model="informal_name"
        label="Informal Name"
        clearable
      >
        <template v-slot:prepend>
          <q-icon name="sentiment_satisfied_alt" />
        </template>
      </q-input>
      <q-input
        color="orange"
        standout
        bottom-slots
        v-model="street_address"
        label="Street Address"
        clearable
      >
        <template v-slot:prepend>
          <q-icon name="home" />
        </template>
      </q-input>
      <q-input
        color="orange"
        standout
        bottom-slots
        v-model="city"
        label="City"
        clearable
      >
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
      </q-input>
      <div class="row">
        <div class="col q-mr-sm">
          <q-select standout v-model="state" :options="options" label="State" />
        </div>
        <div class="col">
          <q-input
            color="orange"
            standout
            bottom-slots
            v-model="zipcode"
            label="Enter Zipcode"
            clearable
          >
          </q-input>
        </div>
      </div>

      <div class="q-py-md row flex-center absolute-bottom">
        <q-btn
          rounded
          class="q-mr-sm"
          to="/signup"
          size="20px"
          icon="keyboard_backspace"
          flat
          color="black"
        />
        <q-btn
          rounded
          label="continue"
          style="width: 210px"
          size="20px"
          to="signupPage2"
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
      informal_name: ref(""),
      city: ref(""),
      business_name: ref(""),
      street_address: ref(""),
      zipcode: ref(""),
      state: ref(null),
      options: [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
      ],
    };
  },
};
</script>
<style lang="sass" scoped>
.my-bdr
  border: 2px
  border-radius: 355px
</style>
