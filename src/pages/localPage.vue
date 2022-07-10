<template>
  <div class="my-page">
    <q-card flat class="my-card my-page full-width">
      <q-card-section>
        <div class="row flex-center">
          <q-img
            src="~assets/convenient.png"
            style="max-width: 500px; max-height: 500px"
          ></q-img>
        </div>
      </q-card-section>
    </q-card>
    <q-card flat class="full-width bg-white my-card1">
      <div class="text-center text-h4 text-bold q-py-md">Local</div>
      <div class="q-pa-md text-center">
        We love the earth and know you do too! loin us in reducing our local
        carbon footprint one order at a time.
      </div>
      <div class="q-pa-md row flex-center">
        <q-btn flat icon="fiber_manual_record" round size="12px"></q-btn>
        <q-btn
          flat
          icon="fiber_manual_record"
          to="/convenientPage"
          round
          size="12px"
        ></q-btn>
        <q-btn
          flat
          icon="fiber_manual_record"
          to="/localPage"
          round
          size="12px"
        ></q-btn>
      </div>
      <div class="q-pa-md row flex-center">
        <q-btn
          rounded
          size="18px"
          to="/signup"
          label="join the movement!"
          color="yellow-8"
        ></q-btn>
      </div>
      <div class="q-py-md row flex-center">
        <q-btn rounded flat to="/login" size="18px" label="login"></q-btn>
      </div>
      <div class="q-pa-md"></div>
      <div class="q-pa-md"></div>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {};
  },
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  // max-width: 250px

.my-page
  background-color: rgb(242, 186, 90)

.my-card1
  border:  solid rgb(242, 186, 90)
  border-radius: 40px
</style>
