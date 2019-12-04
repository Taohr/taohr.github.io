import _ from 'lodash';
import Vue from 'vue';
import Button from 'vant/lib/button';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
} else {
    console.log('Looks like we are in production mode!');
}

var vm = new Vue({
    el: '#app',
    data: {
        message: 'hello vvvvue!'
    }
})

