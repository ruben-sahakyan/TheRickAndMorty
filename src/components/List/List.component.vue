<script setup lang="ts">
import ItemComponent from './Item/Item.component.vue';
import { useStore } from '../../store';

const store = useStore();
store.getCharacters;
</script>


<template>
    <div class="wall" v-if="store.characters?.length">
            <ItemComponent v-for="character in store.characters" :key="character.id" :character="character"/>
    </div>
    <div v-else class="empty">
        <img src="../../assets/no-results.png"/>
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
.empty {
    margin: 20px auto;
    width: 350px;
    height: 350px;
    border: 1px solid var(--green-300);
    border-radius: 50%;
    background: rgba(21, 27, 21, 0.575);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.1px);
    -webkit-backdrop-filter: blur(8.1px);

    display: flex;
    align-items: center;
    justify-content: center;
    img {
        filter: brightness(0) saturate(100%) invert(86%) sepia(3%) saturate(5574%) hue-rotate(88deg) brightness(90%) contrast(91%);
        width: 250px;
    }
}
</style>