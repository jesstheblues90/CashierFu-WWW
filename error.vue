<template>
  <Main class="items-center justify-center grow">
    <section class="gap-4 text-center">
      <h1 class="text-7xl uppercase">Oops!</h1>
      <h2 class="text-5xl text-red-400">{{ error.statusCode }}</h2>
      <p class="text-xl">{{ error.statusMessage }}</p>
      <UButton @click="handleError" class="flex flex-row justify-center">Return to Home</UButton>
    </section>
  </Main>
  <Footer />
</template>

<script setup lang="ts">
  const props = defineProps<{
    error: {
      url: string
      statusCode: number
      statusMessage: string
      message: string
      description: string
      data: any
    }
  }>()

  const handleError = () => clearError({ redirect: '/' })
</script>