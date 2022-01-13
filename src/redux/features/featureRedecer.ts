import { AnyAction } from "redux";
import { GET_LIST_FEATURE } from "./featureConstant";
import { Features } from "./interfaceFeature";

// const initialState = {
//   listCoreFeatures: [
//     {
//       icon: "fas fa-globe",
//       title: "GPRS Tracking",
//       content:
//         "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim.",
//     },
//     {
//       icon: "fas fa-bell",
//       title: "Notification Alart",
//       content:
//         "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim.",
//     },
//     {
//       icon: "fas fa-video",
//       title: "Instant Video Call",
//       content:
//         "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim.",
//     },
//     {
//       icon: "fas fa-comment-alt",
//       title: "User Live Chat",
//       content:
//         "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim.",
//     },
//     {
//       icon: "fab fa-android",
//       title: "Install Any App",
//       content:
//         "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim.",
//     },
//     {
//       icon: "fas fa-bullseye",
//       title: "Attractive Design",
//       content:
//         "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim.",
//     },
//   ],
// };
type initialStateProps = {
  items: Features[];
  loading: boolean;
};

const initialState: initialStateProps = {
  items: [],
  loading: true,
};

const featureReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_LIST_FEATURE:
      // console.log(action.payload);

      return {
        ...state,
        items: [...action.payload],
        loading: false
      };
    default:
      return state;
  }
};

export default featureReducer;
