export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: "",
  },
];
export const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Math.random(),
        },
      ];
    default:
      return state;
  }
};
