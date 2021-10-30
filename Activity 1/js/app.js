new Vue({
    el: '#Events',
    data: {
        
            Name: 'Princess Evon Golloso',
            Age: 20,
            url: "http://vuejs.org/images/logo.png"
          
        
    },
    methods: {
        Out() {
            return this.Age+5;
        },
        IN() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return '0';
            } else {
                return '1';
            }
        }
    }
})