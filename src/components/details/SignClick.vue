<template>
    <div class="sign-click" v-on:click="showDia">
    </div>
</template>
<script>
export default {
    name:"sign-click",
    data:function(){
        return {

        }
    },
    methods:{
        showDia:function(){
            console.log("showDia")
            this.$emit('showDia')
        }
    }
};
</script>
<style scoped>
    .sign-click{
        position: absolute;
        width: 36px;
        height: 26px;
        background-color:transparent;
    }
</style>
