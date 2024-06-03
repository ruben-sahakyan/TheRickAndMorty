<script setup lang="ts">

defineProps<{character: any}>();

</script>


<template>
    <div class="item">
        <section class="image" :style="{ 'background-image': 'url(' + character.image + ')' }">
        </section>
        <section class="info">
            <h2>{{ character.name }}</h2>
            <section class="status_section">
                <div class="status_color" v-if="character.status === 'Alive'" :style="{'background-color': 'var(--green-500)'}"></div>
                <div class="status_color" v-else-if="character.status === 'Dead'" :style="{'background-color': 'var(--red-500)'}"></div>
                <div class="status_color" v-else :style="{'background-color': 'var(--gray-400)'}"></div>
                <p>{{ character.status }} - {{ character.species }}</p>
            </section>
            <section class="last_location_section">
                <p class="title">Last Known location</p>
                <p class="last_location">{{ character.location.name }}</p>
            </section>
            <section class="first_seen_in_section">
                <p class="title">First seen in</p>
                <p class="first_seen_in">Rest and Ricklaxation</p>
            </section>
        </section>
    </div>
</template>


<style scoped lang="scss">
.item {
    max-width: 500px;
    height: 200px;
    border: 1px solid var(--green-300);
    border-radius: 8px;
    background: rgba(21, 27, 21, 0.575);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.1px);
    -webkit-backdrop-filter: blur(8.1px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .image {
        width: 200px;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 8px 0px 0px 8px;
    }
    .info {
        width: 300px;
        height: 100%;
        padding-left: 10px;
        h2 {
            margin-top: 10px;
            font-size: 20px;
            margin-bottom: 0px;
            color: var(--green-200);
        }
        .status_section {
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 10px;
            .status_color {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: red;
            }
            p {
                color: var(--green-100);
            }
        }
        .title {
            color: gray;
            font-size: 15px;
            margin: 0px;
            margin-top: 15px;
        }
        .last_location, .first_seen_in {
            margin: 0px;
            margin-top: 5px;
            color: var(--green-200);
        }
    }
}
@media only screen and (max-width: 1050px) {
    .item {
        display: block;
        width: 400px;
        height: 450px;
        .image {
            width: 100%;
            height: 250px;
            border-radius: 8px 8px 0px 0px;
        }
    }
}
</style>