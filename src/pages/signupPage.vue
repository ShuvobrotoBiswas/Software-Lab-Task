<template>
  <div class="q-pa-md">
    <q-form @submit.prevent="registration">
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
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Enter your full name']"
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
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Enter the e-mail address',
          ]"
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
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Enter your phone number',
          ]"
          color="orange"
          standout
          bottom-slots
          v-model="phone"
          label="Phone Number"
          clearable
        >
          <template v-slot:prepend>
            <q-icon name="phone" />
          </template>
        </q-input>
        <q-input
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Enter the password']"
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
          v-model="password"
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
            to="/login"
            size="20px"
            flat
            color="black"
          />
          <q-btn
            rounded
            label="continue"
            style="width: 210px"
            size="20px"
            @click="showNotif"
            type="submit"
            color="orange-9"
          />
          <q-btn
            rounded
            icon="arrow_forward_ios"
            size="20px"
            dense
            to="/signupPage1"
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
      email: ref(""),
      password: ref(""),
      full_name: ref(""),
      phone: ref(""),
      register: [],
      showNotif() {
        $q.notify({
          message: "Registration's first step  is successful go to next step , press arraw",
          color: "purple",
        });
      },
    };
  },
  methods: {
    registration() {
      const register = new FormData();
      register.append("full_name", this.full_name);
      register.append("password", this.password);
      register.append("email", this.email);
      register.append("phone", this.phone);
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
          this.$router.push("/signupPage1");
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
