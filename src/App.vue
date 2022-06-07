<template>
  <v-app>
    <Nav/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <button @click="Send()">Click</button>
    <div v-for="(user, index) in users" :key="index">
      <span>
        Name:<strong>{{ user.name }}</strong>
      </span>
      <span>
        User name:<strong>{{ user.username }}</strong>
      </span>
      <span>
        Phone:<strong>{{ user.phone }}</strong>
      </span>
      <hr>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";
export default {
  name: "App",

  data: () => ({
    users: [],
    info:{
      name: "Jhone",
      fname: "Doe",
      age: 23,
      job: "FronfEnd-Dev"
    }
  }),
  components: {
    Nav: Navbar,
    Footer: Footer,
  },
  methods: {
    Send(){
      axios.post('/api/users/' + this.info + '/')
      alert("Sent")
    }
  },
  mounted() {
    // fetch("/api/users/")
    //   .then((r) => r.json())
    //   .then((r) => {
    //     console.log(r);
    //   });
    axios.get("/api/users/").then((r) => {
      console.log(r);
      this.users = r.data;
    });
  },
};
</script>
<style>
span{
  letter-spacing: 1px;
}
</style>
