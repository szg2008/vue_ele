<template lang="html">
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease" v-show="food.count > 0" @click="decreaseCart($event)">
                <div class="inner icon-remove_circle_outline">
                </div>
            </div>
        </transition>
        <div class="cart-count" v-show="food.count > 0">
            {{food.count}}
        </div>
        <div class="cart-add icon-add_circle" @click="addCart($event)"></div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    props:{
        food:{
            type:Object,
            default:{}
        }
    },
    methods:{
        addCart(e){
            if(!e._constructed){//解决pc端点击执行两次的问题
                return
            }
            if(!this.food.count){
                Vue.set(this.food,'count',1)//检测到数据的变化
            }else{
                this.food.count++
            }
        },
        decreaseCart(e){
            if(!e._constructed){//解决pc端点击执行两次的问题
                return
            }
            if(this.food.count){
                this.food.count--
            }
        }
    }
}
</script>

<style scoped lang="stylus">
    .cartcontrol
        font-size:0
        .cart-decrease
            display:inline-block
            padding:6px
            transition:all 0.4s linear
            &.move-enter-active,&.move-leave-active
                opacity:1
                transform:translate3d(0,0,0)
            .inner
                display:inline-block
                line-height:24px
                font-size:24px
                color:rgb(0,220,160)
                transition:all 0.4s linear
                transform:rotate(0)
            &.move-enter,&.move-leave-to
                opacity:0
                transform:translate3d(24px,0,0)
            .inner
                transform:rotate(180deg)
        .cart-count
            display:inline-block
            vertical-align:top
            width:12px
            padding-top:6px
            line-height:24px
            text-align:center
            font-size:10px
            color:rgb(147,153,159)
        .cart-add
            display:inline-block
            padding:6px
            line-height:24px
            font-size:24px
            color:rgb(0,220,160)

</style>
