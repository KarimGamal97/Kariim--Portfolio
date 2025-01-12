<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div
            class="col-sm-12 text-center d-flex flex-column align-items-center justify-content-center"
          >
            <div class="bg-img">
              <img
                src="/assets/imgs/404-Not-Found.png"
                alt="404 Not Found"
                class="shake"
              />
            </div>
            <div class="content">
              <h3 class="h2">Oops! Page not found</h3>
              <p class="message">
                It seems we can't find the page you're looking for. Try
                returning to the homepage or contact support if the problem
                persists.
              </p>
              <div class="buttons">
                <NuxtLink to="/" class="link">Go to Homepage</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

section {
  padding: 40px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1e272e;
}

.bg-img img {
  width: 250px;
  height: auto;
  margin-bottom: 20px;
  animation: shake 3s ease-in-out infinite;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}

.content {
  max-width: 600px;
}

.content h3 {
  font-size: 36px;
  margin: 20px 0;
  color: #fafafa;
}

.message {
  font-size: 18px;
  color: #ccc;
  margin-bottom: 30px;
}

.buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.link {
  color: #fff;
  padding: 12px 25px;
  background: #1d1d1d;
  border: 1px solid #fafafa;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.link.secondary {
  background: #555;
}

.link:hover {
  background-color: #222;
}

.link.secondary:hover {
  background-color: #444;
}
</style>
