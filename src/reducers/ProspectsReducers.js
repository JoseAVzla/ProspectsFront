const ProspectReducer = (state, action) => {

  const initialState = {
    prospects: ["prospect"]
};

if (typeof state == "undefined")
        return initialState;

  switch (action.type) {
    case "get_prospects":
      return Object.assign({}, state, {
        prospects: action.payload
      });
    case "get_prospect_by_id":
      return Object.assign({}, state, {
        prospect: action.payload
      });
    case "post_prospect":
      return Object.assign({}, state, {
        postedProspect: action.payload
      });
    case "delete_prospect":
      return Object.assign({}, state, {
        deletedProspect: action.payload
      });
    case "update_prospect":
      return Object.assign({}, state, {
        updatedProspect: action.payload
      });
    default:
      return state;
  }
};

export default ProspectReducer;
