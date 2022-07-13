import axios from "axios";
import swal from 'sweetalert';
export const api='http://localhost:3001'
//export const api='https://food-app-recetas.herokuapp.com'
 //export const { URL_ORIGIN } = process.env;
// export const api='https://foodapp-b.herokuapp.com'

 //export const api=process.env.URL_ORIGIN||'http://localhost:3001';
 //export const api='https://food-app-recetas.herokuapp.com';

export function getRecipes() {
  return async function (dispatch) {
    console.log("hola que tal");
    var json = await axios.get(`${api}/recipes`);
    console.log("axios");
    return dispatch({
      type: "GET_RECIPES",
      payload: json.data,
    });
  };
}

export function getDiets() {
  return async function (dispatch) {
    // try {
    var json = await axios.get(`${api}/types`);
    return dispatch({
      type: "GET_DIETS_TYPES",
      payload: json.data,
    });
    // } catch (error) {
    //     console.log(error)
    // }
  };
}

export function filteredByDiet(payload) {
  // el payload en este caso significa el value="..." que yo le mande desde el componente, osea el nombre de la dieta
  return {
    type: "FILTERED_BY_DIETS",
    payload,
  };
}


export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function orderByTitle(payload) {
  return {
    type: "ORDER_BY_TITLE",
    payload,
  };
}

export function orderBySpoonacularScore(payload) {
  return {
    type: "ORDER_BY_SPOONACULAR_SCORE",
    payload,
  };
}

export function getTitleRecipes(name) {
  //buscar receta por nombre
  return async function (dispatch) {
    try {
      var json = await axios.get(`${api}/recipes?name=${name}`);
  
      return dispatch({
        type: "SEARCH_RECIPE",
        payload: json.data, //el json.data es lo que devuelve la ruta
      });
    } catch (error) {
      console.log(error);
      swal({
        title:"Error",
        text:"The recipe was not found!",
        icon:"error",
        button:"Aceptar"
      })
    }
  };
}

export function postRecipe(payload) {
  return async function (dispatch) {
    //este dispatch no lo use, ver que pasa si lo borro
    try {
      console.log(payload);
      var json = await axios.post(`${api}/recipe`, payload);
      return json;
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${api}/recipes/${id}`);
      return dispatch({
        type: "GET_DETAIL",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
