<template>
  <!-- Page header -->
  <div class="page-header d-print-none">
    <div class="container-xl">
      <div class="row g-2 align-items-center">
        <div class="col">
          <!-- Page pre-title -->
          <div class="page-pretitle">{{pretitle}}</div>
          <h2 class="page-title">{{title}}</h2>
        </div>
        <!-- Page title actions -->
        <div class="col-auto ms-auto d-print-none">
          <slot name="actionbuttons" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
 defineProps({
   pretitle: {
     type: String,
     required: false,
     default: '',
   },
   title: {
     type: String,
     required: true,
     default: ''
   }
 })

</script>

<style scoped></style>
