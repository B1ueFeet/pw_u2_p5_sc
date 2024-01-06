<template>
  <div class="calculator">
    <div class="display">
      <p>{{ lbl_prev }}</p>
      <h1>{{ lbl_res }}</h1>
    </div>
    <button @click="btn_AC()" class="span_2"  >C</button>
    <button @click="btn_borrar()"             >&#129136;</button>
    <button @click="btn_div()"                >&#247;</button>
    <button @click="btn_siete()"              >7</button>
    <button @click="btn_ocho()"               >8</button>
    <button @click="btn_nueve()"              >9</button>
    <button @click="btn_mult()"               >&#215;</button>
    <button @click="btn_cuatro()"             >4</button>
    <button @click="btn_cinco()"              >5</button>
    <button @click="btn_seis()"               >6</button>
    <button @click="btn_resta()"              >&#8722;</button>
    <button @click="btn_uno()"                >1</button>
    <button @click="btn_dos()"                >2</button>
    <button @click="btn_tres()"               >3</button>
    <button @click="btn_suma()"               >&#43;</button>
    <button @click="btn_cero()" class="span_2">0</button>
    <button @click="btn_punto()"              >&#46;</button>
    <button @click="resultado()"              >&#61;</button>
  </div>
</template>

<!--   ----------------------------------------------------------------------------------   -->

<script>
export default {
  data() {
    return {
      lbl_prev: "",
      lbl_res:  "",
    };
  },
  methods: {
    btn_uno() {
      this.lbl_prev =this.lbl_prev + " 1 ";
    },
    btn_dos() {
      this.lbl_prev =this.lbl_prev + " 2 ";
    },
    btn_tres() {
      this.lbl_prev =this.lbl_prev + " 3 ";
    },
    btn_cuatro() {
      this.lbl_prev =this.lbl_prev + " 4 ";
    },
    btn_cinco() {
      this.lbl_prev =this.lbl_prev + " 5 ";
    },
    btn_seis() {
      this.lbl_prev =this.lbl_prev + " 6 ";
    },
    btn_siete() {
      this.lbl_prev =this.lbl_prev + " 7 ";
    },
    btn_ocho() {
      this.lbl_prev =this.lbl_prev + " 8 ";
    },
    btn_nueve() {
      this.lbl_prev =this.lbl_prev + " 9 ";
    },
    btn_cero() {
      this.lbl_prev =this.lbl_prev + " 0 ";
    },
    btn_suma() {
      this.lbl_prev =this.lbl_prev + " + ";
    },
    btn_resta() {
      this.lbl_prev =this.lbl_prev + " - ";
    },
    btn_mult() {
      this.lbl_prev =this.lbl_prev + " * ";
    },
    btn_div() {
      this.lbl_prev =this.lbl_prev + " / ";
    },
    btn_AC() {
      this.lbl_prev  = "";
    },
    btn_borrar() {
      this.lbl_prev =this.lbl_prev.substring(0,this.lbl_prev.length - 2);
    },

    btn_punto() {
      this.lbl_prev =this.lbl_prev + " . ";
    },

    resultado() {
      console.log(this.lbl_prev);
      let resultado = eval(this.lbl_prev.replace(/\s+/g, "")
      );
      console.log(resultado);
      this.lbl_res= resultado;
    },
  },
};
</script>

<!--   ----------------------------------------------------------------------------------   -->

<style>
@import url("https://fonts.googleapis.com/css2?family=Nova+Square&display=swap");
* {
  color: white;
  font-family: "Nova Square", sans-serif;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.calculator {
  display: grid;
  /* grid-template-columns: 75px 75px 75px 75px 75px; */
  grid-template-columns: repeat(4, 75px);
  grid-template-rows: 150px repeat(5, 75px);
  background: #5fd9d5;
  padding: 15px;
  border-radius: 32px;
  box-shadow: 15px 10px 5px 5px gray;
  width: fit-content;
  align-content: center;
}

button {
  cursor: pointer;
  border-radius: 10px;
  padding: 0;
  border: none;
  margin: 5px;
  background: antiquewhite;
  box-shadow: 5px 5px 10px -3px #00000040;
  font-size: 25px;
  color: dimgray;
}

button:active {
  box-shadow: 0px 0px 10px -5px black;
  background: gainsboro;
}

.display {
  grid-column: span 4;
  padding: 15px;
  margin: 10px 10px 20px 10px;
  background: #363636;
  text-align: right;
  color: white;
  border-radius: 15px;
  box-shadow: 0px 0px 0px 10px black;
  display: grid;
}
body {
  background: #b5a57f;
}
h1{
  margin-bottom: 40px;
}
.span_2 {
  grid-column: span 2;
}
</style>