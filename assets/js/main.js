
var app = new Vue({
    el: '#root',
    data: {
      images: [ 'assets/img/Th06cover.jpg', 'assets/img/Th07cover.jpg', 'assets/img/Th08cover.jpg', 'assets/img/Th09cover.jpg', 'assets/img/Th10cover.jpg', 'assets/img/Th11cover.jpg', 'assets/img/Th12cover.jpg', 'assets/img/Th13cover.jpg', 'assets/img/Th14cover.jpg', 'assets/img/Th15cover.jpg', 'assets/img/Th16cover.jpg'],
      img: 0
    },
    methods: {
        next: function(){
            if (this.img == this.images.length - 1){
                this.img = 0
            } else {
                this.img++;
            }
        },
        previous: function(){
            this.img--;
            if (this.img == -1){
                this.img = 10
            }
        },
        selected: function(index){
            this.img = index
            this.img = backgroundImage  
        }
    },
    created: function() {
        setInterval(this.next, 3000)
    }
  })
