<template>
  <span>
      <svg
        class="loader_circle_1 mx-auto d-block"
        :width="width"
        :height="height"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
    <g id="loader_1">
      <path
        id="Subtract"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.7868 8.7868C3.35786 14.2157 0 21.7157 0 30C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0V5.00001C30 5.00001 30.0001 5.00001 30.0001 5.00001C43.8072 5.00001 55.0001 16.1929 55.0001 30C55.0001 43.8071 43.8072 55 30.0001 55C16.193 55 5.00008 43.8071 5.00008 30C5.00008 23.0965 7.79829 16.8465 12.3224 12.3224L8.7868 8.7868Z"
        fill="currentColor"
      />
    </g>
  </svg>
    {{text}}
  </span>

</template>
<script setup>
defineProps({
  text: {
    type: String,
    required: false,
    default: 'Procesando...',
  },
  width: {
    type: Number,
    required: false,
    default: 23,
  },
  height: {
    type: Number,
    required: false,
    default: 23,
  },
})
</script>
<style lang="css" scoped>
span{
  display:flex;
  width: max-content;
  gap: .5rem;

}
.loader_circle_1{
  animation: rotateClockwise 1.5s linear infinite;
  transform-origin: center;
  transform-box: fill-box;
}
@keyframes rotateClockwise {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
