<template>
    <div class="mount">
       <div  @click="fanhui"> 
        <i class="iconfont icon-jiantou"></i>
       </div>
     <slot ></slot>
    </div>
</template>
<script>
export default{
    methods:{
        fanhui(){
            this.$router.back()
        }
    }
}
</script>
<style lang="scss" scoped>
.mount{
    background-color: white;
    height: 2.75rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    line-height:  2.75rem;
    font-size: 1.0625rem;
    div{
        position: fixed;
        top:0;
        left: 20px;
        i{
            font-size:1.0625rem;
        }
    }

}
</style>