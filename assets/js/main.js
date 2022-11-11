var app = new Vue({
    el: '#root',
    data: {
      images: [ 'assets/img/Th06cover.jpg', 'assets/img/Th07cover.jpg', 'assets/img/Th08cover.jpg', 'assets/img/Th09cover.jpg', 'assets/img/Th10cover.jpg' ],
      img: 0
    },
    methods: {
        next: function(){
            this.img++;
        }
    }
  })