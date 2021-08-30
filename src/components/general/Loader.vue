<template>
  <div class="loader__wrapper">
    <div class="loader">
      <svg version="1.1" id="loader__body" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
      <path d="M30,57.5C14.8,57.5,2.5,45.2,2.5,30C2.5,14.8,14.8,2.5,30,2.5c15.2,0,27.5,12.3,27.5,27.5h-6c0-11.9-9.7-21.5-21.5-21.5
        C18.1,8.5,8.5,18.1,8.5,30c0,11.9,9.7,21.5,21.5,21.5V57.5z"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss">
  .loader {
    position: relative;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    height: 25px;
    width: 25px;
    animation: rotate .5s infinite linear;

    &__wrapper {
      height: calc(100vh - 3rem);
    }
  }

  @keyframes rotate {
    from {transform: translateY(-50%) rotate(0deg)}
    to {transform: translateY(-50%) rotate(360deg)}
  }

</style>
