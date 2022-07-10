<template>
  <div class="q-pa-md">
    <h1 class="row text-center">Welcome</h1>
    <q-btn color="purple" @click="showNotif" label="Check Shuvo's Skill" />
    <q-btn dense flat icon="back" label="logout" to="/"></q-btn>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'

export default {
  setup () {
    const $q = useQuasar()

    return {
      showNotif () {
        $q.notify({
          message: 'Thanks Shuvobroto.',
          color: 'purple'
        })
      }
    }
  }
}
</script>
