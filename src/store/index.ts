import { defineStore } from "pinia";


interface StateInterface {
    status: string
    allStatuses: string[]
    resetPage: number
    characterName: string
    activePage: number
    characters: any
};


export const useStore = defineStore('storeId', {
    state: (): StateInterface => {
        return {
            status: '',
            allStatuses: ['All', 'Alive', 'Dead', 'Unknown'],
            resetPage: 0,
            characterName: '',
            activePage: 0,
            characters: [],
        }
    },
    getters: {
        getCharacters: (state) => {
            console.log('chlp');
            fetch(`https://rickandmortyapi.com/api/character/?page=${state.activePage}
            &name=${state.characterName}
            &status=${state.status}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                state.characters = data?.results
            })
        }
    },
    actions: {}
})