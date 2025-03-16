<style scoped>
  .toolbar-container{
    position: fixed;
    bottom: 1rem;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
.toolbar{
    background: white;
    padding: .25rem 1rem;
    border-radius: 4rem;
  }
  .toolbar label{
    border: none!important;
  }
  label:hover svg{
    font-weight: bold;
    color:var(--tblr-primary)
  }

</style>

<template>
  <div class="toolbar-container w-100">
    <div class="btn-group toolbar" role="group">
      <input
        type="radio"
        class="btn-check"
        name="btn-radio-toolbar"
        id="btn-radio-toolbar-1"
        autocomplete="off"
        checked=""
      />
      <label data-bs-toggle="tooltip" data-placement="top" title="Tooltip on top" for="btn-radio-toolbar-1" class="btn btn-icon">
        <IconPencil stroke={2} />
      </label>
      <input
        type="radio"
        class="btn-check"
        name="btn-radio-toolbar"
        id="btn-radio-toolbar-2"
        autocomplete="off"
      />
      <label for="btn-radio-toolbar-2" class="btn btn-icon">
        <PhTrashSimple :size="18" weight="duotone" />
      </label>
      <input
        type="radio"
        class="btn-check"
        name="btn-radio-toolbar"
        id="btn-radio-toolbar-3"
        autocomplete="off"
      />
      <label for="btn-radio-toolbar-3" class="btn btn-icon">
        <!-- Download SVG icon from http://tabler.io/icons/icon/underline -->
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
          <path d="M7 5v5a5 5 0 0 0 10 0v-5"></path>
          <path d="M5 19h14"></path>
        </svg>
      </label>
      <input
        type="radio"
        class="btn-check"
        name="btn-radio-toolbar"
        id="btn-radio-toolbar-4"
        autocomplete="off"
      />
      <label for="btn-radio-toolbar-4" class="btn btn-icon">
        <!-- Download SVG icon from http://tabler.io/icons/icon/copy -->
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
          <path
            d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
          ></path>
          <path
            d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
          ></path>
        </svg>
      </label>
      <input
        type="radio"
        class="btn-check"
        name="btn-radio-toolbar"
        id="btn-radio-toolbar-5"
        autocomplete="off"
      />
      <label for="btn-radio-toolbar-5" class="btn btn-icon">
        <!-- Download SVG icon from http://tabler.io/icons/icon/scissors -->
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
          <path d="M6 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M8.6 8.6l10.4 10.4"></path>
          <path d="M8.6 15.4l10.4 -10.4"></path>
        </svg>
      </label>
      <input
        type="radio"
        class="btn-check"
        name="btn-radio-toolbar"
        id="btn-radio-toolbar-6"
        autocomplete="off"
      />
      <label for="btn-radio-toolbar-6" class="btn btn-icon">
        <!-- Download SVG icon from http://tabler.io/icons/icon/file-plus -->
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
          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
          <path d="M12 11l0 6"></path>
          <path d="M9 14l6 0"></path>
        </svg>
      </label>
      <input
        type="radio"
        class="btn-check"
        name="btn-radio-toolbar"
        id="btn-radio-toolbar-7"
        autocomplete="off"
      />
      <label for="btn-radio-toolbar-7" class="btn btn-icon">
        <!-- Download SVG icon from http://tabler.io/icons/icon/file-minus -->
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
          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
          <path d="M9 14l6 0"></path>
        </svg>
      </label>
    </div>
  </div>

</template>
<script setup>
  import { onMounted } from 'vue'
  import { PhPencilSimple, PhTrashSimple } from '@phosphor-icons/vue'
  import { IconPencil } from '@tabler/icons-vue';
  import initTooltips from '@/utils/UI/initTooltips.js'

  onMounted(() =>{
    initTooltips();
  })
</script>
