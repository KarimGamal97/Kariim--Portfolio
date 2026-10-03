<template>
  <footer class="pb-30 pt-30">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <p class="fz-13">
              Proudly Powered by
              <span class="underline main-color">
                <a href="#" target="_blank"> {{ author }} </a>
              </span>
              © {{ currentYear }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { CONTACT_INFO } from '~/constants/social.constants'

const author = CONTACT_INFO.author
const currentYear = new Date().getFullYear()
</script>
