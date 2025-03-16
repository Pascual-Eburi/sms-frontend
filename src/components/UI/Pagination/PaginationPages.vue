<style scoped>

</style>
<template>
  <ul class="pagination m-0 ms-auto">
    <li class="page-item" :class="{disabled: disabledPrevPage}" @click="prevPage">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-1"
        >
          <path d="M15 6l-6 6l6 6"></path>
        </svg>
        prev
      </a>
    </li>
    <li class="page-item"
        :key="pageNum"
        @click.prevent="goToPage(pageNum)"
        :class="{active: pageNum === props.store['page']}"
        v-for="pageNum in visiblePages">
      <a class="page-link" href="#">{{pageNum}}</a>
    </li>
    <li class="page-item" :class="{disabled: disabledNextPage}"  @click.prevent="nextPage">
      <a class="page-link" href="#">
        next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-1"
        >
          <path d="M9 6l6 6l-6 6"></path>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script setup>
    import { computed } from 'vue'

    const props = defineProps({
      store: {
        type: Object,
        required: true,
      }
    });

    const visiblePages = computed(() =>{
      const totalPages = props.store['totalPages'];
      let pages = [];
      if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
        return pages;
      }

      const page = props.store['page'];
      const firstPage = 1;
      const secondPage = firstPage + 1;
      const thirdPage = secondPage + 1;

      const lastPage = totalPages;
      const secondLastPage = lastPage - 1;
      const thirdLastPage = secondLastPage - 1;

      if (page < thirdPage) {
        return [firstPage, secondPage, '...', secondLastPage, lastPage];
      }
      if (page === thirdPage) {
        return [firstPage, secondPage, page, '...', secondLastPage, lastPage];
      }
      if (page > thirdPage && page < thirdLastPage) {
        return [firstPage, secondPage,'...', page, '...', secondLastPage, lastPage];
      }
      if (page === thirdLastPage) {
        return [firstPage, secondPage, '...', page, secondLastPage, lastPage];
      }

      return [firstPage, secondPage, '...', secondLastPage, lastPage];


    });
    const disabledPrevPage = computed(() =>{
      return props.store['page'] === 1;
    })
    const disabledNextPage = computed(() =>{
      return props.store['page'] === props.store['totalPages'];
    })

    function nextPage() {
      const page = props.store['page'] + 1;
      if (page > props.store.totalPages){ return;}
      props.store.setPage(page);
    }
    function prevPage() {
      const page = props.store['page'] - 1;
      if (page < 1){ return;}
      props.store.setPage(page);
    }

    function goToPage(pageNum){
      if (isNaN(pageNum)){return ;}
      props.store.setPage(pageNum);
    }


</script>


