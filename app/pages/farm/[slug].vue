<template>
    <!-- <div>
      {{ slug }}
    </div> -->
</template>

<script lang="ts" setup>
  throw showError({
  statusCode: 404,
  statusMessage: 'Halaman Belum Tersedia',
  fatal: true
})
const route = useRoute()

const slug = computed(() => route.params.slug)
</script>

<style>

</style>