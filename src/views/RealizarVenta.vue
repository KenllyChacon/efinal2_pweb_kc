<template>
  <Guardar/>
  <Agregar/>
</template>

<script>
import Guardar from "@/components/Guardar.vue";
import Agregar from "@/components/Agregar.vue";
export default {
  name: "RealizarVenta",
  components:{
    Guardar,
    Agregar
  }
}
</script>

<style scoped>

#myApp{
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

section input,label,p{
  text-align: center;
  display: inline;
  width: 40%;
  margin: 0 80px;
  font-size: 25px;
  padding: 7px;
  border-radius: 10px;
}

h1, h2{
  margin: 25px;
  text-align: center;
}

button{
  transition-duration: 0.4s;
  padding:15px;
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


body{
  background-color: #1B1F27;
}

button:hover {
  background-color: #42b983; /* Green */
  color: white;
}
</style>