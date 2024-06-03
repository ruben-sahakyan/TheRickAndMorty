<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '../../store';


const store = useStore();

const characterName = ref<string>('');
const characterStatus = ref<string>('');

const findCharacter  = () => {
    store.status = characterStatus.value;
    store.characterName = characterName.value;
    store.resetPage = 0;
    store.activePage = 0;
    store.getCharacters;
}
</script>


<template>
    <header>
        <h1>The Rich and Morty</h1>
        <form @submit.prevent="findCharacter">
            <FloatLabel class="input_section">
                <InputText v-model="characterName"/>
                <label>Name</label>
            </FloatLabel>
            <div class="characters_state_section">

                <div class="character_state" v-for="(status, index) in store.allStatuses" :key="index">
                    <label>{{ status }}</label>
                    <RadioButton :value="status === 'All' ? '' : status" v-model="characterStatus"/>
                </div>
                
            </div>
            <Button type="submit" label="SEND" />
        </form>
    </header>
</template>


<style scoped lang="scss">
header {
    max-width: 600px;
    min-height: 200px;
    margin: 10px auto;
    border: 1px solid var(--green-300);
    border-radius: 8px;
    background: rgba(21, 27, 21, 0.575);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.1px);
    -webkit-backdrop-filter: blur(8.1px);
    padding: 0px 10px;
    h1 {
        text-align: center;
        margin-top: 5px;
        color: var(--green-300);
        font-family: "Caveat", cursive;
        font-size: 40px;
    }
    form {
        margin-top: 5px;
        width: 100%;
        min-height: 150px;
        margin-bottom: 10px;
        .input_section {
            width: 100%;
            input {
                width: 100%;
                height: 42px;
                padding-left: 10px;
                background: none;
                color: var(--green-300);
            }
            label {
                color: var(--green-300)
            }
        }
        .characters_state_section {
            width: 100%;
            height: 40px;
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            .character_state {
                width: 100px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                label {
                    color: var(--green-300);
                }
            }
        }
        button {
            width: 100%;
            margin-top: 10px;
        }
    }
}
</style>