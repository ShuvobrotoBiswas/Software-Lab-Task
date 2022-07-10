<template>
  <div class="q-pa-md">
    <q-form @submit.prevent="login">
      <div class="q-py-md">
        <span class="text-bold text-h4">Welcome back!</span>
      </div>
      <div class="row">
        <span class="text-h6">New here ?</span>
        <q-btn
          dense
          flat
          label="create account"
          to="signup"
          color="orange"
        ></q-btn>
      </div>
      <div class="q-py-md">
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
          v-model="password"
          label="Password"
          clearable
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
          <template v-slot:append>
            <q-btn
              flat
              label="forgot?"
              color="orange"
              to="/forgotPassword"
            ></q-btn>
          </template>
        </q-input>
        <div class="q-py-md">
          <q-btn
            class="full-width"
            rounded
            label="login"
            size="20px"
            type="submit"
            @click="showNotif"
            color="orange-9"
          />
        </div>
      </div>
      <div class="text-center q-py-md">or login with</div>
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
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";
export default defineComponent({
  setup() {
    const $q = useQuasar();
    return {
      email: ref(""),
      password: ref(""),
       showNotif() {
        $q.notify({
          message:
            "Login Successful",
          color: "green",
        });
      },
    };
  },
  methods: {
    login() {
      let login = new FormData();
      login.append("password", this.password);
      login.append("email", this.email);
      const options = {
        method: "POST",
        url: "https://sowlab.tech/assignment/user/login",
        // headers: { "No Auth": " "},
        data: login,
      };
       axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.auth = response.data;
          this.id = response.data.data.id;
          this.token = response.data.token;
          localStorage.setItem("token", response.data.token);
          this.$router.push("/");
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
});
</script>
<style lang="sass" scoped>
.my-bdr
  border: 2px
  border-radius: 355px
</style>
