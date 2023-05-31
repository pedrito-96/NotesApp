<script setup lang="ts">
import { ref } from 'vue'
const submitted = ref(false)
const submitHandler = async () => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
}
</script>

<template>
  <!-- <FormKit
  type="form"
  id="registration-example"
  :form-class="submitted ? 'hide' : 'show'"
  submit-label="Register"
  @submit="submitHandler"
  :actions="false"
  #default="{ value }"
  netlify
  >
    <h1 class="text-bold text-2xl text-center">Contact me!</h1>
    <div class="m-2">
        <p>
            You can put any type of element inside a form, not just FormKit inputs </p>
            <p>
                (although only FormKit inputs are included with the submission).
            </p>
        </div>
    <hr class="m-2" />
    <FormKit
      type="text"
      name="name"
      label="Your name"
      placeholder="Jane Doe"
      help="What do people call you?"
      validation="required"
    />
    <FormKit
      type="text"
      name="email"
      prefix-icon="email"
      label="Your email"
      placeholder="jane@example.com"
      help="What email should we use?"
      validation="required|email"
    />
    <FormKit
    type="tel"
    label="Phone number"
    prefix-icon="telephone"
    placeholder="xxx-xxx-xxxx"
    validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
    :validation-messages="{
      matches: 'Phone number must be in the format xxx-xxx-xxxx',
    }"
    validation-visibility="dirty"
  />

  <FormKit
  type="textarea"
  label="Message"
  rows="10"
  placeholder="Remember to write in complete sentences."

/>
    <FormKit
      type="submit"
      label="Register"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
  <div v-if="submitted">
    <h2>Submission successful!</h2>
  </div> -->

  <form 
  method="post"
  name="netprova" 
  netlify-honeypot="bot-field"
  data-netlify="true"
  enctype="multipart/form-data"
  >
  <input type="hidden" name="netprova" value="Website Contact Form" />
  <p hidden>
    <label>Don’t fill this out: <input name="bot-field" /></label>
</p>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname">
    <p>
        <button type="submit">Send</button>
      </p>
  </form>

</template>