new Vue({
  el: "#app",
  data: {
    myHp: 100,
    monHp: 100,
    gameOn: false,
    gameLog: []
  },
  computed: {
    myCurrentHP: function() {
      return `width: ${this.myHp}%`;
    },
    monsterCurrentHP: function() {
      return `width: ${this.monHp}%`;
    }
  },
  methods: {
    startNewGame: function() {
      this.gameOn = true;
    },
    atack: function() {
      var myat = Math.random() * 10;
      var momat = Math.random() * 10;
    },
    specialAtack: function() {},
    heal: function() {},
    giveUp: function() {
      this.gameOn = false;
      this.resetData();
    },
    resetData: function() {
      this.myHp = 100;
      this.monHp = 100;
      this.gameLog = [];
    }
  }
});
