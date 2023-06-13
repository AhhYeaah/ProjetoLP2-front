<script lang="ts">
import { ClientTypeEnum, Region } from './CardGrid/Card/ClientInfo';


export default {
    data: () => ({
        type: "" as ClientTypeEnum,
        region: "" as Region,
        ClientTypeEnum, Region
    }),
}
</script>
<template>
    <div
        class="tw-w-full tw-h-20 tw-relative tw-top-0 tw-left-0 tw-bg-blue-400 tw-text-2xl tw-text-white tw-flex tw-items-center tw-justify-around">
        <span>Opções</span>

        <div class="tw-flex tw-gap-5">
            <div>
                <button class="bg-white tw-px-4 tw-h-[44px] tw-font-bold ">&lt;</button>
                <button></button>
                <button>></button>
            </div>

            <select class="tw-bg-white tw-text-black tw-px-5 tw-py-2 tw-text-lg tw-rounded-lg" v-model="type" required>
                <option value="" selected>Tipo</option>
                <option value="LABORIOUS">LABORIOUS</option>
                <option value="NORMAL">NORMAL</option>
                <option value="SPECIAL">SPECIAL</option>
            </select>
            <select class="tw-bg-white tw-text-black tw-px-5 tw-py-2 tw-text-lg tw-rounded-lg" v-model="region" required>
                <option value="" selected>Região</option>
                <option value="LABORIOUS">LABORIOUS</option>
                <option value="NORMAL">NORMAL</option>
                <option value="SPECIAL">SPECIAL</option>
            </select>
        </div>
    </div>
</template>