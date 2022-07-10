<template>
  <div class="q-pa-md">
    <q-form @submit.prevent="registration">
      <div class="q-py-md">
        <p class="text-h6">Signup 4 of 4</p>
        <span class="text-bold text-h4">Business Hours</span>
      </div>
      <div class="text-h6">
        Choose the hours your farm is open for pickups. This will allow
        customers to order deliveries.
      </div>
      <div class="q-py-md">
        <q-checkbox v-model="business_hours" val="Monday" label="M" color="orange-9" />
        <q-checkbox v-model="business_hours" val="Tuesday" label="T" color="orange-9" />
        <q-checkbox v-model="business_hours" val="Wednesday" label="W" color="orange-9" />
        <q-checkbox v-model="business_hours" val="Thursday" label="Th" color="orange-9" />
        <q-checkbox v-model="business_hours" val="Friday" label="F" color="orange-9" />
        <q-checkbox v-model="business_hours" val="Saturday" label="S" color="orange-9" />
        <q-checkbox v-model="business_hours" val="Sunday" label="Su" color="orange-9" />
      </div>
      <div class="q-py-md">
        <q-checkbox
          v-model="business_hours"
          val="8-10"
          label="8:00am - 10:00am"
          color="orange-9"
        />
        <q-checkbox
          v-model="business_hours"
          val="10-1"
          label="10:00am - 1:00pm"
          color="orange-9"
        />
        <q-checkbox
          v-model="business_hours"
          val="1-4"
          label="1:00pm - 4:00pm"
          color="orange-9"
        />
        <q-checkbox
          v-model="business_hours"
          val="4-7"
          label="4:00pm - 7:00pm"
          color="orange-9"
        />
        <q-checkbox
          v-model="business_hours"
          val="7-10"
          label="7:00pm - 10:00pm"
          color="orange-9"
        />
      </div>

      <div class="q-px-sm"></div>
      <!-- formdata -->

      <div class="q-py-md">
        <div class="q-py-md row flex-center fixed-bottom">
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
            @click="showNotif"
            style="width: 210px"
            size="20px"
            type="submit"
            color="orange-9"
          />
          <q-btn
            rounded
            icon="arrow_forward_ios"
            size="20px"
            dense
            to="/signupPage4"
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

    return {
      business_hours: ref([]),
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
      register.append("business_hours", this.business_hours);
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
          this.$router.push("/signupPage4");
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
