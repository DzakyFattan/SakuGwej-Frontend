<script setup lang="ts">   
    const selected  = "30 Hari Teakhir"
    const intervals = [
        "30 Hari Teakhir",
        "21 Hari Teakhir",
        "14 Hari Teakhir",
        " 7 Hari Teakhir"
    ]

    const props     = defineProps(["type"])
    const type      = props.type
</script>

<template>
    <div class="flex flex-col w-[75vh] h-fit items-center self-center mt-2 mb-3 px-4" >
        <div class="flex flex-row mb-6 items-center">
            <a :href="'/'+type+'/tambah-'+type">
                <img src="/src/assets/icons/add-ring.png" class="w-12 h-12">
            </a>
            <img src="/src/assets/icons/arrow-left.png" class="w-16 h-16 ml-[14vh]">
            <v-select
                :items="intervals"
                :label="selected"
                single-line
                hide-details
                variant="filled"
                bg-color="white"
                class="interval w-[22vh] h-12 rounded-md"
            ></v-select>
            <img src="/src/assets/icons/arrow-right.png" class="w-16 h-16 mr-[14vh]">
            <img src="/src/assets/icons/sort-gotoh.png" class="w-12 h-12">
        </div>
        <div class="flex flex-row items-center w-[75vh] my-2 px-7">
            <input type="checkbox" class="select-all mr-4 w-6 h-6"><label>Pilih Semua</label>
        </div>
    </div>
</template>

<style scoped>
    .interval {
        height: fit-content;
        border: 1px solid var(--bocchi);
    }
    .select-all {
        -moz-appearance:none;
        -webkit-appearance:none;
        -o-appearance:none;
        border: 1px solid var(--bocchi);
        border-radius: 2px;
    }

</style>