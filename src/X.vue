<template>
    <div>
        <div>
            {{number}}
        </div>
        <div>
            <button @click="add">+</button>
            <button @click="minus">-</button>
        </div>
    </div>
</template>
<script lang="ts">
let a:string = 'hi'
console.log(a);
export default {
    name:'F',
    data(){
        return {
            number: 0
        }
    },
    methods: {
        
        add(){
            let number: number = this.number + 1
            this.number = number;
        },
        minus(){
            let number: number = this.number -1
            this.number = number;
        }
    }
}
</script>
