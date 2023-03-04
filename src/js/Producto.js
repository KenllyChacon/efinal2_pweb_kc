import axios from "axios";

export const insertarFachada = (body) => {
    insertar(body);
}
const insertar = async (body) => {
    axios.post(`http://localhost:8081/API/Supermaxi/V1/productos`, body).then(r => r.data)
}

export const consultarProducToPorCodigoBarraFachada = async (codigoBarras,cantidad) => {
    return await consultarProducToPorCodigoBarra(codigoBarras, cantidad);
}

const consultarProducToPorCodigoBarra = async (codigoBarras, cantidad) => {
    const data = axios.get(`http://localhost:8081/API/Supermaxi/V1/productos?codigoBarras=${codigoBarras}&&cantidad=${cantidad}`).then(r => r.data)
    console.log(data)
    return data;
}






