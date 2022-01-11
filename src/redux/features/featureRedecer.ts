import { AnyAction } from "redux";


const initialState = {
  listCoreFeatures : [
    {
      icon: "fas fa-globe",
      title: "GPRS Tracking",
      content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fas fa-bell",
      title: "Notification Alart",
      content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fas fa-video",
      title: "Instant Video Call",
      content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fas fa-comment-alt",
      title: "User Live Chat",
      content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fab fa-android",
      title: "Install Any App",
      content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fas fa-bullseye",
      title: "Attractive Design",
      content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
  ]
};

const featureReducer = (state = initialState, action: AnyAction) => {
  
return state;
};

export default featureReducer;
