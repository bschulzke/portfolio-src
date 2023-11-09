<template>
  <div class="contact">
    <!-- Wrapper container -->
    <div class="container py-4">
        <!-- Bootstrap 5 starter form -->
        <form ref="form" id="contactForm" @submit.prevent="sendEmail">

            <!-- Name input -->
            <div class="mb-3">
            <label class="form-label" for="name">Name</label>
            <input class="form-control" id="name" type="text" placeholder="Name" name="user_name"/>
            </div>

            <!-- Email address input -->
            <div class="mb-3">
            <label class="form-label" for="emailAddress">Email Address</label>
            <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" name="user_email"/>
            </div>

            <!-- Message input -->
            <div class="mb-3">
            <label class="form-label" for="message">Message</label>
            <textarea name="message" class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;"></textarea>
            </div>

            <!-- Form submit button -->
            <div class="d-grid">
            <button class="btn btn-primary btn-lg" type="submit">Send</button>
            </div>

        </form>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/ben-schulzke-2a4086283" target="_blank">LinkedIn</a>
            <br/>
            <a href="mailto:benschulzke@gmail.com" target="_blank">benschulzke@gmail.com</a>
            <br/>
            <a href="https://github.com/bschulzke" target="_blank">GitHub</a>
        </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
      name: 'ContactMe',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
 methods: {
    sendEmail() {
      emailjs.sendForm('service_8ttm8yk', 'template_3sti73b', this.$refs.form, '99wZUEga7zsJwe-6X')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}

</script>

<style scoped>
.contact {
    margin-top: 6rem;
}
.container {
    max-width: 50rem;
}
.btn {
    background-color: rgb(9,91,118);
}
a {
  color: #09b5bb;
}
</style>