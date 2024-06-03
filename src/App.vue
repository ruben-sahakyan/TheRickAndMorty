<script setup lang="ts">
import HeaderComponent from './components/Header/Header.component.vue';
import ListComponent from './components/List/List.component.vue';
import PagniatorComponent from './components/Paginator/Pagniator.component.vue';
</script>

<template>
    <main>
        <HeaderComponent />
        <ListComponent />
        <PagniatorComponent />
    </main>
</template>

<style scoped >
main {
    margin: 20px auto;
    max-width: 1800px;
}
</style>
