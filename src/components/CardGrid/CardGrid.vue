<script lang="ts">
import Card from './Card/Card.vue';
import { Client } from './Card/ClientInfo';

export default {
    props: {
        clientArray: {
            type: Object as () => Client[],
            required: true,
        }
    },
    components: { Card }
}
</script>

<template>
    <div class="tw-p-10 tw-grid tw-grid-rows-3 tw-grid-cols-3 tw-gap-10">
        <Card v-for="info in clientArray" :info="info" />
    </div>
</template>