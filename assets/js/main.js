var app = new Vue({
    el: '#root',
    data: {
      images: [ 'assets/img/Th06cover.jpg', 'assets/img/Th07cover.jpg', 'assets/img/Th08cover.jpg', 'assets/img/Th09cover.jpg', 'assets/img/Th10cover.jpg' ],
      img: 0
    },
    methods: {
        next: function(){
            this.img++;
            if (this.img == this.images.length - 1){
                this.img = 0
            }
        },
        previous: function(){
            this.img--;
            if (this.img == 0){
                this.img = 4
            }
        },
    },
    created: function() {
        setInterval(this.next, 3000)
    }
  })