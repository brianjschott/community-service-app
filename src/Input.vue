<template>
    <div>
        <p>{{ msg }}</p>
        <input type="text" v-model="message" /> <!--v-model binds data from data property -->
        <p> {{ message }}</p>
    </div>
</template>

<script>
    export default {
        props: ['msg'],
        //this is ES6 syntax, otherwise I would have to say data: function() {}
        data() {
            return {
                message: ''
            }
        }
    }
</script>