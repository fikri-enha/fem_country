<template>
    <div>
        <input type="text" class="w-full p-3 text-sm font-regular rounded-sm shadow-md" :model="countryInput" placeholder="Search for a country ...">
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "SearchBarComponent",
    setup () {
        const countryInput = ref()
        

        return {
            countryInput
        }
    }
}
</script>

<style lang="scss" scoped>

</style>