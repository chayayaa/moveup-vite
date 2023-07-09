<script setup>
import { ref, onMounted } from 'vue'

import Nav from '../components/NavComponent.vue'

onMounted(() => {
  console.log('home');
})
</script>

<template>
  <Nav />
  <div class="banner" style="background-image: url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=720);
    ">
    <div class=" ps-5 ms-3 "></div>
    <div class=" ps-5  no-gutters move-right">
      <figure class="text-end">
        <blockquote class="blockquote">
          <label class="fw-bold text-white fs-1 ">
            Move
          </label>
          <label class="fw-bold text-color-1 fs-1 ">
            Up
          </label>
        </blockquote>
        <figcaption class="blockquote-footer">
          <cite title="Source Title" class="text-white">
            動起來，享受運動 !
          </cite>
        </figcaption>
      </figure>
      <input class="btn btn-secondary text-end" type="button" value="預約免費體驗->">
    </div>
  </div>
</template>
