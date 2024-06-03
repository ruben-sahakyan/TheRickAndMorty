<script setup lang="ts">
import ItemComponent from './Item/Item.component.vue';
import { useStore } from '../../store';

const store = useStore();
store.getCharacters;
</script>


<template>
    <div class="wall">
        <ItemComponent v-if="store.characters?.length" v-for="character in store.characters" :key="character.id" :character="character"/>
        <div v-else>Empty</div>
    </div>
</template>


<style scoped lang="scss">
.wall {
    // border: 1px solid white;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}
</style>