import { AnyAction } from "redux";
import { NEXT_SLIDER, PREV_SLIDER } from "./feedBackConstant";
import anh1 from "../../assets/images/client-1.jpg";
import anh2 from "../../assets/images/client-2.jpg";
import anh3 from "../../assets/images/client-3.jpg";

const initialState = {
  listCustomerFeedback: [
    {
      avatar: anh1,
      content:
        "Laboriosam libero, aliquam magnam debitis exercitationem doloribus quo repellat aperiam doloremque aut, optio ab modi, itaque maiores labore.",
      name: "- Adam Smith",
      lever: "product marketer",
    },
    {
      avatar: anh2,
      content:
        "Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis.",
      name: "- Shane Kyle",
      lever: "affiliate marketer",
    },
    {
      avatar: anh3,
      content:
        "Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi, itaque maiores labore.",
      name: "- Micheal Jonson",
      lever: "product manager",
    },
  ],
  current: 0,
};

const feedBackReducer = (state = initialState, action: AnyAction) => {
  const length = state.listCustomerFeedback.length - 1;

  switch (action.type) {
    case NEXT_SLIDER: {
      return {
        ...state,
        current: state.current === length - 1 ? 0 : state.current + 1,
      };
    }
    case PREV_SLIDER: {
      return {
        ...state,
        current: state.current === 0 ? length - 1 : state.current - 1,
      };
    }
    default:
      return state;
  }
};

export default feedBackReducer;
