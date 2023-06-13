<script lang="ts">
import { Client } from './ClientInfo'
export default {
    props: {
        info:
        {
            type: Object as () => Client,
        }
    }
}

</script>

<template>
    <div>
        <v-card class="mx-auto" max-width="344" p>
            <v-img :src="info?.pictures.large" height="200px" cover></v-img>

            <v-card-title>
                <span class="tw-uppercase tw-text-xl">
                    {{ info?.name.title }} {{ info?.name.first }} {{ info?.name.last }}
                </span>
            </v-card-title>
            <div class="tw-p-2">
                <v-card-subtitle>
                    <div class="tw-text-center tw-mt-5">
                        <span class="tw-text-lg">
                            {{ info?.location.street }}
                        </span>
                    </div>
                </v-card-subtitle>
            </div>

        </v-card>
    </div>
</template>