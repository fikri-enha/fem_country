<template>
    <div class="p-6">
        <SearchBar />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchBar from './SearchBar.vue';
export default defineComponent({
    name: "HomePage",
    components: {
        SearchBar
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>