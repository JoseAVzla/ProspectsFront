import axios from "axios";

export const getProspects = (page, rowsPerPage) => {
  console.log(page + " " + rowsPerPage)
  return dispatch => {
    axios
      .get(`https://prospectos-api-nodejs-3lu95.ondigitalocean.app/prospects/page=${page}&limit=${rowsPerPage}`)
      .then(res => {
        dispatch({
          type: "get_prospects",
          payload: res.data
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
};
//https://prospectos-api-nodejs-3lu95.ondigitalocean.app/prospects
export const getProspect = (idProspect) => {
  return dispatch => {
    axios.get(`https://prospectos-api-nodejs-3lu95.ondigitalocean.app/prospects/${idProspect}`)
    .then(res => {
      dispatch({
        type: "get_prospect_by_id",
        payload: res.data
      })
    })
  };
};

export const postProspect = ( nombre, apellidop, apellidom, calle, numero, colonia, cp, telefono, rfc, documento) => {
  return dispatch => {
    console.log(nombre)
    axios
      .post("https://prospectos-api-nodejs-3lu95.ondigitalocean.app/add", {
        nombre,
        apellidop,
        apellidom,
        calle,
        numero,
        colonia,
        cp,
        telefono,
        rfc,
        documento
      })
      .then(res => {
        dispatch({
          type: "post_prospect",
          payload: res.data
        });
      });
  };
};

// export const deleteProspect = id => {
//   return dispatch => {
//     axios
//     .delete("http://localhost:3001/delete", { data: { id } })
//     .then(res => {
//       dispatch({
//         type: "delete_prospect",
//         payload: res.data
//       });
//     });
//   };
// };

export const updateProspect = (id, estatus, observacion) => {
  console.log(estatus + " " + observacion)
  return dispatch => {
    axios
    .patch(`https://prospectos-api-nodejs-3lu95.ondigitalocean.app/prospects/${id}`, { estatus, observacion })
    .then(res => {
        dispatch({
          type: "update_prospect",
          payload: res.data
        });
      });
  };
};
