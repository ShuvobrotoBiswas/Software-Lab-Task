<template>
  <div class="q-pa-md">
    <q-form @submit.prevent="registration">
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
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Enter the business name',
          ]"
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
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Enter the informal name',
          ]"
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
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Enter the street address',
          ]"
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
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Enter the city']"
        >
          <template v-slot:prepend>
            <q-icon name="place" />
          </template>
        </q-input>
        <div class="row">
          <div class="col q-mr-sm">
            <q-select
              standout
              v-model="state"
              :options="options"
              label="State"
            />
          </div>
          <div class="col">
            <q-input
              color="orange"
              standout
              bottom-slots
              v-model="zip_code"
              label="Enter Zipcode"
              clearable
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Enter the zipcode']"
            >
            </q-input>
          </div>
        </div>

        <div class="q-py-md row flex-center fixed-bottom">
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
            @click="showNotif"
            size="20px"
            type="submit"
            color="orange-9"
          />
          <q-btn
            rounded
            icon="arrow_forward_ios"
            size="20px"
            dense
            to="/signupPage2"
            flat
          />
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
export default {
  setup() {
    const $q = useQuasar();
    const email = ref(null);
    const full_name = ref(null);
    const phone = ref(null);
    const password_confirmation = ref(false);
    return {
      informal_name: ref(""),
      city: ref(""),
      business_name: ref(""),
      street_address: ref(""),
      zip_code: ref(""),
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
      showNotif() {
        $q.notify({
          message:
            "Registration's first step  is successful go to next step , press arraw",
          color: "purple",
        });
      },
    };
  },
  methods: {
    registration() {
      const register = new FormData();
      register.append("informal_name", this.informal_name);
      register.append("city", this.city);
      register.append("business_name", this.business_name);
      register.append("street_address", this.street_address);
      register.append("zip_code", this.zip_code);
      register.append("state", this.state);
      const options = {
        method: "POST",
        url: "https://sowlab.tech/assignment/user/register",
        data: register,
      };
      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.admin = response.data;
          this.id = response.data.data.id;
          this.token = response.data.token;
          localStorage.setItem("token", response.data.token);
          this.$router.push("/signupPage2");
        })
        .catch(function (error) {
          console.error(error);
        });
      // validation
      if (accept.value !== true) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message:
            "You cannot register in the application , You need to check first",
        });
      } else {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message:
            "Registration's first step  is successful go to next step , press arraw ",
        });
      }
    },
  },
};
</script>
<style lang="sass" scoped>
.my-bdr
  border: 2px
  border-radius: 355px
</style>
