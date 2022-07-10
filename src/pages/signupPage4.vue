<template>
  <div class="q-pa-md">
    <q-form @submit.prevent="profilePic">
      <div class="q-py-md">
        <p class="text-h6">Last step of signup</p>
        <span class="text-bold text-h4">Verification</span>
      </div>
      <div class="text-h6">
        Attached proof of Department of Agriculture registrations i.e. Florida
        Fresh , USDA Approvod, USDA Organic
      </div>
      <div class="q-py-md full-width">
        <div>
          <q-file
            color="teal"
            type="file"
            borderless
            v-model="registration_proof"
            label="Attach proof of registration"
            @update:model-value="handleUpload()"
          >
            <template v-slot:append>
              <q-btn
                round
                color="orange-9"
                size="18px"
                icon="photo_camera"
              ></q-btn>
            </template>
          </q-file>
        </div>
        <div class="row flex-center">
          <q-img :src="imageUrl" sizes="400px"></q-img>
        </div>
      </div>

      <!-- formdata -->

      <div class="q-py-md row flex-center fixed-bottom">
        <q-btn
          rounded
          class="q-mr-sm"
          to="/signupPage3"
          size="20px"
          icon="keyboard_backspace"
          flat
          color="black"
        />
        <q-btn
          rounded
          label="submit"
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
          to="/signupPage5"
          flat
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";
export default {
  setup() {
    const file = ref(null);
    const $q = useQuasar();
    const imageUrl = ref("https://sowlab.tech/assignment/user/register");
    const handleUpload = () => {
      console.log("Initially Uploaded Successful");
      if (file.value) {
        imageUrl.value = URL.createObjectURL(file.value);
      }
    };
    return {
      document,
      other: true,
      registration_proof: ref(""),
      file,
      imageUrl,
      handleUpload,
      getFile: true,
      showNotif() {
        $q.notify({
          message:
            "Registration is successful go to login , press arraw",
          color: "purple",
        });
      },
    };
  },
  methods: {
    onFileSelected(event) {
      console.log(event.target);
    },
    profilePic() {
      const profilePic = new FormData();
      profilePic.append("registration_proof", this.registration_proof);

      const options = {
        method: "POST",
        url: "https://sowlab.tech/assignment/user/register",
        data: profilePic,
        // headers: {
        //   Authorization:
        //     "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcndhcGkuenVwcmlhLmNvbVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1MDY2NjAyMSwiZXhwIjoxNjgyMjAyMDIxLCJuYmYiOjE2NTA2NjYwMjEsImp0aSI6InVkbmUyZ3NsRHJ5VjY5Z3UiLCJzdWIiOjksInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.4_rBRo4Yo7rQ58dKVNdbUEtp6_EKjF79744-cfrUQWM",
        // },
      };
      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
};
</script>
<style lang="sass" scoped>
.my-bdr
  border: 2px
  border-radius: 355px
</style>
