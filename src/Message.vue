<template>
    <div>
        <h1>{{ message }}</h1>
        
        <app-input :msg="message"></app-input>
    </div>
</template>


<script>
    import Input from './Input.vue'
    export default {
        data() {
            return {
                message: 'This is a great message!'
            }
        },
        // I can register a component locally here if I know I'm only going to use it in the Message component
        components: {
            'app-input': Input
        }
    }
</script>