<template>
  <div class="contact">
    <!-- Wrapper container -->
    <div class="container py-4">
        <!-- Bootstrap 5 starter form -->
        <form id="contactForm">

            <!-- Name input -->
            <div class="mb-3">
            <label class="form-label" for="name">Name</label>
            <input class="form-control" id="name" type="text" placeholder="Name" />
            </div>

            <!-- Email address input -->
            <div class="mb-3">
            <label class="form-label" for="emailAddress">Email Address</label>
            <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" />
            </div>

            <!-- Message input -->
            <div class="mb-3">
            <label class="form-label" for="message">Message</label>
            <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;"></textarea>
            </div>

            <!-- Form submit button -->
            <div class="d-grid">
            <button class="btn btn-primary btn-lg" type="submit">Submit</button>
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