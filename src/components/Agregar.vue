<template>
  <h1>Agregar Producto</h1>
  <label for="">Codigo de barras: </label>
  <input type="text" v-model="icodigoBarras"/>
  <br>
  <label for="">Cantidad: </label>
  <input type="text" v-model="icantidad"/>
  <br>

  <button @click="agregarProducto">Agregar</button>

  <ul>
    <li v-for="productos in list" :key="productos">
      {{ productos }}
    </li>
  </ul>

  <br>
  <label for="">Total: </label>
  <label for="">{{ total }} </label>

</template>

<script>
import {consultarProducToPorCodigoBarraFachada} from "@/js/Producto"

export default {
  name: "Agregar",
  data() {
    return {
      icodigoBarras: null,
      icantidad: null,
      list: [],
      total: 0,
    }
  },
  methods: {
    async agregarProducto() {
      const producto = await consultarProducToPorCodigoBarraFachada(this.icodigoBarras, this.icantidad);
      const lista = {
        codigoBarras: this.icodigoBarras,
        nombre: producto.nombre,
        cantidad: this.icantidad,
        precioUnitario: producto.precioUnitario,
        subTotal: producto.precioUnitario * this.icantidad
      }
      this.list.unshift(lista)
      this.total = 0
      for (let elemento of this.list){

        console.log(elemento.subTotal)
        this.total = this.total + elemento.subTotal
        console.log("**************************************************")
        console.log(this.total)
      }
    }

  }
}

</script>

<style scoped>

#myApp {
  background-color: blue;
  border: solid;
  font-family: "Times New Roman", Times, serif;

  display: block;
  width: 40%;
  margin: 20px auto;
  font-size: 17px;
  padding: 7px;
  /*text-align: center;*/
  border-radius: 10px;
}

section input, label, p {
  text-align: center;
  display: inline;
  width: 40%;
  margin: 0 80px;
  font-size: 25px;
  padding: 7px;
  border-radius: 10px;
}

h1, h2 {
  margin: 25px;
  text-align: center;
}

button {
  transition-duration: 0.4s;
  padding: 15px;
  margin: 25px auto;
  display: block;
  text-align: center;
  font-size: 16px;
  border-radius: 10px;
  width: 25%;
  background-color: #3E4251;
  cursor: pointer;
  color: white;
}


body {
  background-color: #1B1F27;
}

button:hover {
  background-color: #42b983; /* Green */
  color: white;
}
</style>