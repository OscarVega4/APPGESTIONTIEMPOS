import { registrarTiempos } from "../controllers/ControllerTiempos.js";
import { listarProyectos,filtrarPorEmpresa,filtrarPorProyecto,filtrarPorTipoProyecto } from "../controllers/ControllerProyectos.js";

addEventListener('click', registrarTiempos) 

let btnRegistrar = document.getElementById('btnRegistrar')
if(btnRegistrar){
    btnRegistrar.addEventListener('click', registrarTiempos) 

}

let listaProyectos = document.getElementById('listarProyectos')
if(listaProyectos){
    listaProyectos.addEventListener('click', listarProyectos)
}