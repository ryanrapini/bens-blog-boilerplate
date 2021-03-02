<template>
    <a :href="'mailto:' + emailObscured"
    onmouseover="this.href=this.href.replace(/x/g,'');">Clicking Here</a>
</template>

<script>
    export default {
        name: 'hide-email',
        props: [ 'email' ],
        computed: {
            emailObscured(){
                let xpos;
                let emailResult = this.email;
                for(var i = 0; i < 3; i++){
                    xpos = Math.floor(Math.random() * Math.floor(emailResult.length));
                    emailResult = emailResult.slice(0, xpos) + 'x' + emailResult.slice(xpos);
                }
                return emailResult
            }
        }
    }
</script>

<style scoped>
</style>