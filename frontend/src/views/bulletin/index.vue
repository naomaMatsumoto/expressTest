<template lang="pug">
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Bulletin extends Vue {
  private created() {
    console.log('created');
    // axios.get(`http://localhost:3000/api`)
    //   .then((response) => {
    //     console.log('response');
    //     console.log(response);

    //       // callback(response)
    //   })
    //   .catch((response) => {
    //     console.log('response1');
    //     console.log(response);
    //   });
  }
}
</script>
