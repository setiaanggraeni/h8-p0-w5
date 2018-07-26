<template>
  <div class="container text-center">
    <h1>BOMBERMAN</h1><br>
    <div v-if="seen">
      <form>
        <h2>And please input your name here:</h2>
        <input type="text" class="name" v-model="name" placeholder="Input your name...">
        <button class="btnInputName" @click="submitPlayer">Submit</button>
      </form>
    </div>
    <div v-else>
      <form>
        <h2>Please Select Room & Select Your Character</h2>
        <h2>by Clicking the Icon Below</h2>
      </form>
    </div>
    <br>
    <br>
    <center>
      <div class="row">
        <div class="box col-sm-5">
          <div class="col-sm-5" @click="selectPos1">
            <img src="../../src/assets/police.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Police</p>
          </div>
          <div class="col-sm-2">
            <h5>Room1</h5>
            <img src="../../src/assets/vs.png" class="vs" style="width:100%" alt="Image">
          </div>
          <div class="col-sm-5" @click="selectTer1">
            <img src="../../src/assets/terorism.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Terorist</p>
          </div>
        </div>

        <div class="box col-sm-5">
          <div class="col-sm-5" @click="selectPos2">
            <img src="../../src/assets/police.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Police</p>
          </div>
          <div class="col-sm-2">
            <h5>Room2</h5>
            <img src="../../src/assets/vs.png" class="vs" style="width:100%" alt="Image">
          </div>
          <div class="col-sm-5" @click="selectTer2">
            <img src="../../src/assets/terorism.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Terorist</p>
          </div>
        </div>

        <div class="box col-sm-5">
          <div class="col-sm-5" @click="selectPos3">
            <img src="../../src/assets/police.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Police</p>
          </div>
          <div class="col-sm-2">
            <h5>Room3</h5>
            <img src="../../src/assets/vs.png" class="vs" style="width:100%" alt="Image">
          </div>
          <div class="col-sm-5" @click="selectTer3">
            <img src="../../src/assets/terorism.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Terorist</p>
          </div>
        </div>

        <div class="box col-sm-5">
          <div class="col-sm-5" @click="selectPos4">
            <img src="../../src/assets/police.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Police</p>
          </div>
          <div class="col-sm-2">
            <h5>Room4</h5>
            <img src="../../src/assets/vs.png" class="vs" style="width:100%" alt="Image">
          </div>
          <div class="col-sm-5" @click="selectTer4">
            <img src="../../src/assets/terorism.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Terorist</p>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  props: [],
  data () {
    return {
      name: '',
      position: '',
      players: [],
      seen: false,
      room: ''
    }
  },
  methods: {
    submitPlayer () {
      this.players.push({name: this.name, position: this.position})
      this.name = ''
      this.seen = false
      if (this.players.length === 2) {
        console.log('yuk main', this.players)
        this.players = []
        this.seen = false
        // alert('Please select your room to play!')
      }
    },
    selectPos1 () {
      this.position = 'Police'
      this.seen = true
      this.room = 1
    },
    selectPos2 () {
      this.position = 'Police'
      this.seen = true
      this.room = 2
    },
    selectPos3 () {
      this.position = 'Police'
      this.seen = true
      this.room = 3
    },
    selectPos4 () {
      this.position = 'Police'
      this.seen = true
      this.room = 4
    },
    selectTer1 () {
      this.position = 'Terorist'
      this.seen = true
      this.room = 1
    },
    selectTer2 () {
      this.position = 'Terorist'
      this.seen = true
      this.room = 2
    },
    selectTer3 () {
      this.position = 'Terorist'
      this.seen = true
      this.room = 3
    },
    selectTer4 () {
      this.position = 'Terorist'
      this.seen = true
      this.room = 4
    }
  }
}
</script>

<style scoped>
.name{
  width: 400px;
  height: 50px;
  border-radius: 5px;
}
.btnInputName{
  width: 70px;
  height: 48px;
  border-radius: 5px;
  background-color: aquamarine;
}
/* .vs{
  padding-top: 5px;
} */
.col-sm-2 {
  margin-top: 50px;
}
.box{
  border: 1px solid aquamarine;
  margin-right: 60px;
  margin-bottom: 50px;
  margin-left: 20px;
}
</style>
