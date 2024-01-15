<script setup>
import { containerMaxW } from '@/config.js'
import BaseLevel from '@/components/BaseLevel.vue'
import MainLogo from '@/components/MainLogo.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-2 px-6" :class="containerMaxW">
    <BaseLevel>
      <div class="text-center md:text-left">
        <b>&copy;{{ year }}, <a href="https://ban4ello.github.io/resume/" target="_blank">Ivan Miroshnichenko</a>.</b>
        <slot />
      </div>
      <div class="md:py-2">
        <a href="https://ban4ello.github.io/resume/">
          <MainLogo class="w-auto" />
        </a>
      </div>
    </BaseLevel>
  </footer>
</template>
