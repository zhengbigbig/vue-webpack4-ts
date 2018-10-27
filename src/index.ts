import Vue from 'vue'
import X from './X.vue'
let div = document.createElement('div');
div.id = 'app';
div.textContent = 'xxx';

document.body.appendChild(div);

new Vue({
    el: div,
    render: (h)=> h(X)
})