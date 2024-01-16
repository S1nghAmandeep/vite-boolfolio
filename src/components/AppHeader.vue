<script>

export default {

    data() {
        return {

        }
    },

    methods: {

    },
    created() {

    }
}

</script>

<template>
    <header>
        <nav>
            <div class="container">
                <ul>
                    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                    <li><router-link :to="{ name: 'show' }">Show</router-link></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss"></style>
