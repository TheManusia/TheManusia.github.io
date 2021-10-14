<template>
  <form v-bind:action="formUrl" method="POST">
    <div class="form-outline mb-4">
      <mdb-input type="text" label="Name" name="name" id="name" outline/>
    </div>
    <div class="form-outline mb-4">
      <mdb-input type="email" label="Email" name="email" id="email" outline/>
    </div>
    <div class="form-outline mb-4">
      <mdb-input type="textarea" label="Message" name="message" id="message" outline :rows="4"/>
    </div>
    <button class="btn btn-info btn-block mb-4" type="submit">Send</button>
  </form>
</template>

<script>
import {mdbInput} from "mdbvue";

export default {
  name: "Form",
  components: {
    mdbInput
  },
  props: {
    formUrl: String
  }
};
</script>

<style scoped>

</style>