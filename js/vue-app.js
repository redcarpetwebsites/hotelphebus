var app = new Vue({
    el: '#app',
    data() {
        return {
            res: {
                number: 0,
                pension: 'p'
            },
            prices: {
                p: [100, 126, 181, 227],
                pd: [120, 174, 241, 308],
                pdd: [147, 223, 311, 402]
            }
        }
    },
    computed: {
        tarif: function () {
            return JSON.stringify(this.prices[this.res.pension][this.res.number]);
        }
    },
    methods: {
        reserver: function () {
            var res = JSON.parse(localStorage.getItem('phebus_reservation'));
            res.push(this.res);
            localStorage.setItem('phebus_reservation', JSON.stringify(res));
        }
    }
});