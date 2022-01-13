import { NEXT_SLIDER, PREV_SLIDER } from "./feedBackConstant";

const nextSlider = () => {
  return {
    type: NEXT_SLIDER,
  };
};

const prevSlider = () => {
  return {
    type: PREV_SLIDER,
  };
};

export { nextSlider, prevSlider };
