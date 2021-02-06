import axios from "axios";

export const getProspects = () => {
  return dispatch => {
    axios
      .get("http://localhost:3001/", {porfa: "jala"})
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

export const getProspect = (idProspect) => {
  console.log("Action " + idProspect + " Si hay");
  return dispatch => {
    axios.get(`http://localhost:3001/find-by-id?id=${idProspect}`, {id: idProspect})
    .then(res => {
      console.log(res.data);
      dispatch({
        type: "get_prospect_by_id",
        payload: res.data
      })
    })
  };
};

export const postProspect = (
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
) => {
  return dispatch => {
    axios
      .post("http://localhost:3001/save", {
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

export const deleteProspect = id => {
  return dispatch => {
    axios.delete("http://localhost:3001/delete", { data: { id } }).then(res => {
      dispatch({
        type: "delete_prospect",
        payload: res.data
      });
    });
  };
};

export const updateProspect = (id, estatus, observacion) => {
  return dispatch => {
    axios
      .patch("http://localhost:3001/update", { id, estatus, observacion })
      .then(res => {
        dispatch({
          type: "update_prospect",
          payload: res.data
        });
      });
  };
};
