import { meeting } from "./meetings";
// import { details } from "./details";

enum Pages {
  MEETING = "meeting",
  DETAILS = "details",
}

const state = {
  currentPage: Pages.MEETING,
};

// function to change state... can be passed into functions below

switch (state.currentPage) {
  // case Pages.DETAILS:
  //   details();
  //   break;

  case Pages.MEETING:
    meeting();
  default:
    break;
}
