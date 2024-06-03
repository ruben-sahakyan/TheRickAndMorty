<script setup lang="ts">
import { useStore } from '../../store';

const store = useStore();

const onPaginator = (event: any) => {
    store.activePage = event.page + 1;
    store.getCharacters;
}

</script>


<template>
    <Paginator class="paginator" :rows="20" :totalRecords="800"
    @page="onPaginator($event)" v-model:first="store.resetPage"></Paginator>
</template>


<style lang="scss">
.paginator {
    max-width: 600px;
    margin: 20px auto;
    border: 1px solid var(--green-300);
    border-radius: 6px;
}
.p-paginator {
    background-color: black;
}
</style>