<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div
            class="col-sm-12 col-sm-offset-1 text-center d-flex justify-center"
          >
            <div class="bg-img">
              <img src="./public/assets/imgs/404-Not-Found.png" alt="" />
            </div>
            <div class="content">
              <h3 class="h2">Page not found!</h3>
              <p>are you sure you want to be here?</p>
              <a href="/" class="link">Go to Home</a>
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
  font-family: "Roboto", serif;
}
section {
  padding: 20px 0;
  background: #fff;
  text-align: center;
}

section img {
  width: 100%;
}

.bg-img {
  text-align: center;
  height: 350px;
  width: 350px;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
}

.bg-img h1 {
  font-size: 50px;
}

.bg-img h3 {
  font-size: 80px;
}

.link {
  color: #fff;
  padding: 10px 20px;
  background: #1d1d1d;
  margin: 0 0;
  display: inline-block;
  text-decoration: none;
}

.link:hover {
  color: #fff;
  background-color: #222222;
}
</style>
