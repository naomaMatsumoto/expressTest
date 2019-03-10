<template lang="pug">
  div(class="home")
    img(alt="Vue logo" src="../assets/logo.png")
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private created() {
    console.log('created');
    axios.get(`http://localhost:3000/api`)
      .then((response) => {
        console.log('response');
        console.log(response);

          // callback(response)
      })
      .catch((response) => {
        console.log('response1');
        console.log(response);
      });
  }
}
</script>
