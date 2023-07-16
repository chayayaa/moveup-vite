<script setup>
import { ref, onMounted, computed } from 'vue'

import * as api from '@/api.js'
import Nav from '../components/NavComponent.vue'
import Pagination from '../components/Pagination.vue'
import { usePaginationStore } from '../stores/paginationStore.js';

// 狀態
const products = ref([]);
const pages = usePaginationStore();

//生命週期
onMounted(() => {
  getProducts();
});

async function getProducts() {
  try {
    const res = await api.getProductsAPI();
    products.value = res.data.products;
    const totalPages = Math.ceil(products.value.length / pages.itemsPerPage);
    pages.totalPages = totalPages;
    console.log(products.value);
  }
  catch (err) {
    console.log(err);
  }
};
//根據當前頁與每頁數量計算分頁資料
const paginatedItems = computed(() => {
  const startIndex = (pages.currentPage - 1) * pages.itemsPerPage;
  const endIndex = startIndex + pages.itemsPerPage;
  return products.value.slice(startIndex, endIndex)
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
  <div class="bg-dark">
    <div class="container pt-5 ">
      <div class="row ">
        <div class="col-md-3">
          <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active border-bottom" id="list-home-list"
              data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">所有課程</a>
            <a class="list-group-item list-group-item-action border-bottom" id="list-profile-list" data-bs-toggle="list"
              href="#list-profile" role="tab" aria-controls="list-profile">瑜珈課程</a>
            <a class="list-group-item list-group-item-action border-bottom" id="list-messages-list" data-bs-toggle="list"
              href="#list-messages" role="tab" aria-controls="list-messages">有氧課程</a>
            <a class="list-group-item list-group-item-action border-bottom" id="list-settings-list" data-bs-toggle="list"
              href="#list-settings" role="tab" aria-controls="list-settings">飲食課程</a>
            <a class="list-group-item list-group-item-action border-bottom" id="list-settings-list" data-bs-toggle="list"
              href="#list-settings" role="tab" aria-controls="list-settings">器材課程</a>
          </div>
        </div>
        <div class="container col-md-9">
          <div class="row">

            <div class="col-md-4 text-white" v-for="(item) in paginatedItems" :key="item.id">
              <a>
                <div class="card mb-4 shadow-sm  bg-dark border">
                  <img :src="item.imageUrl" class="card-img-top " style="height: 200px;" alt="主圖">
                  <div class="card-category">{{ item.category }}</div>

                  <div class="card-body text-center">
                    <div class="card-title d-flex justify-content-center align-items-center text-primary">
                      <!---->
                      <h3 class="text-white fw-bold">{{ item.title }}</h3>
                    </div>
                    <p class="card-text mb-4"><span class="fs-4 fw-bold" style="color: #FFD700;">${{ item.price }}</span>
                      <del class="text-light ms-2">$ {{ item.origin_price }} 元 </del>
                    </p>
                    <div class="btn-group d-flex justify-content-center">
                      <a href="#" class="btn  py-2 px-5 z-20 text-white fw-bold" style="background-color: #00D27A;"
                        @click.prevent="addToCart(product.id, 1)">加入購物車</a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <pagination :pages="pages" :get-products="getProducts"></pagination>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
