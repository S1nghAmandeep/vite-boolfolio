<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="container">
        <div class="emoji">😭</div>
        <p class="title">Ooooops!</p>
        <h2 class="text">404</h2>
        <h1>Page not found.</h1>

        <p>We’re sorry but it appears that we can’t find the page you were looking for. Usually this occurs because of a
            page that previously existed was removed or you’ve mistyped the address.</p>

        <span class="go-back"><a href="/">Go back</a></span>
    </div>
</template>

<style scoped>
.emoji {
    font-size: 9em;
    text-align: center;
}

.title {
    font-size: 3em;
    text-align: center;
    line-height: 0em;
    color: grey;
}

.text {
    text-align: center;
}

.container {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
}

h1 {
    margin: 0 0 40px;
    font-size: 60px;
    line-height: 1;
    color: #252427;
    font-weight: 700;
}

h2 {
    margin: 100px 0 0;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #A299AC;
    text-transform: uppercase;
}

p {
    font-size: 16px;
    margin: 1em 0;
}

.go-back a {
    display: inline-block;
    margin-top: 3em;
    padding: 10px;
    color: #1B1A1A;
    font-weight: 700;
    border: solid 2px #e7e7e7;
    text-decoration: none;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.go-back a:hover {
    border-color: #1B1A1A;
}

@media screen and (min-width: 768px) {
    body {
        padding: 50px;
    }
}

@media screen and (max-width: 480px) {
    h1 {
        font-size: 48px;
    }
}
</style>

