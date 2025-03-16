<template>
    <div>
      <!-- Sidebar -->
      <SideBar />
      <!-- Navbar -->
      <TopHeader/>
      <div class="page-wrapper">
          <!-- Page header -->
          <slot name="pageheader"></slot>

        <!-- Page body -->
          <div class="page-body">
            <div class="container-xl">
                <slot></slot>
            </div>
          </div>
      </div>

      <!-- Footer -->
      <PageFooter />
    </div>

</template>
<script setup>
import SideBar from '@components/Navigation/SideBar.vue'
import TopHeader from '@components/Navigation/TopHeader.vue'

import PageFooter from '@components/Navigation/PageFooter.vue'
import PageHeader from '@components/Navigation/PageHeader.vue'
</script>
