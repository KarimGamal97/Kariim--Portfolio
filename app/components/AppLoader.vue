<template>
  <div class="loader-wrap" :class="{ 'is-hidden': !isLoading }">
    <div class="loader-content">
      <!-- Jumping Letters -->
      <h2 class="jump-text">
        <span style="--i: 0">L</span>
        <span style="--i: 1">o</span>
        <span style="--i: 2">a</span>
        <span style="--i: 3">d</span>
        <span style="--i: 4">i</span>
        <span style="--i: 5">n</span>
        <span style="--i: 6">g</span>
        <span class="dot" style="--i: 7">.</span>
        <span class="dot" style="--i: 8">.</span>
        <span class="dot" style="--i: 9">.</span>
      </h2>

      <!-- Futuristic Neon Progress Bar -->
      <div class="loader-bar-track">
        <div class="loader-bar-fill"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  // Keeps loading screen visible smoothly for 1.2s then slides up
  setTimeout(() => {
    isLoading.value = false
  }, 1200)
})
</script>

<style scoped>
/* Fullscreen Black Backdrop */
.loader-wrap {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: #080808;
  z-index: 9999999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.7s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.6s ease;
  overflow: hidden;
}

/* Slide Up Curtain Exit */
.loader-wrap.is-hidden {
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

/* Jumping Wave Typography */
.jump-text {
  display: flex;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 12px;
  text-transform: uppercase;
  color: #ffffff;
  user-select: none;
}

.jump-text span {
  display: inline-block;
  animation: letterJump 1.2s infinite ease-in-out;
  animation-delay: calc(0.08s * var(--i));
}

.jump-text .dot {
  color: #c8f31d;
  letter-spacing: 4px;
}

/* Letter Bounce Keyframes */
@keyframes letterJump {
  0%, 100% {
    transform: translateY(0);
    color: #ffffff;
    text-shadow: none;
  }
  40% {
    transform: translateY(-22px);
    color: #c8f31d;
    text-shadow: 0 0 18px rgba(200, 243, 29, 0.75);
  }
}

/* Sleek Neon Loading Bar */
.loader-bar-track {
  width: 180px;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.loader-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #c8f31d;
  box-shadow: 0 0 12px #c8f31d;
  animation: progressFill 1.2s infinite ease-in-out;
}

@keyframes progressFill {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
