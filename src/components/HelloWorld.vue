<script lang="ts">
import { Client, ClientTypeEnum, Region } from './CardGrid/Card/ClientInfo';
import CardGrid from './CardGrid/CardGrid.vue';
import axios from 'axios'
import TopBar from './TopBar.vue'

export default {
    data: () => ({
        type: undefined as undefined | ClientTypeEnum,
        region: undefined as undefined | Region,

        cards: undefined as undefined | Client[]
    }),
    methods: {
        async getClients(page: number) {
            return axios.get("http://localhost:8080/clients", {
                params: {
                    page, region: this.region, type: this.type
                }
            }).then(({ data }: {
                data: {
                    pageNumber: number
                    pageSize: number,
                    totalCount: number,
                    users: Client[],
                }
            }) => {
                this.cards = data.users;
            });
        }
    },
    mounted() {
        this.getClients(0)
    },
    components: { CardGrid, TopBar }
}
</script>

<template>
    <TopBar></TopBar>
    <CardGrid v-if="cards" :client-array="cards">

    </CardGrid>
</template>