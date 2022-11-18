type TCard = {
  backgroundColor: string;
  textColor: string;
};
type TPopup = {
  backgroundColor: string;
  contentBgColor: string;
  textColor: string;
};
type TInput = {
  backgroundColor: string;
};
type TProjectColors = {
  borderTopColor: string;
  borderBottomColor: string;
  card: TCard;
  popup: TPopup;
  input: TInput;
  linearGradient: string;
  background: string;
};
const lightyellow = "yellow";
const lightGreen = `rgb(127, 255, 212)`;
const background = `rgba(161, 205, 207, 1 )`;
const popupBg = `rgba(0, 0, 0, 0.5)`;
const popupContentBg = "#ffe8a8";
const popupText = "#1f1f1f";
const textColor = "purple";
const inputBg = "#dbfff7";
const linearGradient = `linear-gradient(45deg, rgba(183, 4, 212, 0.5) 30%, #FF8E53 90%);`;
export const projectColors = {
  background: lightGreen,
  borderTopColor: lightyellow,
  borderBottomColor: lightGreen,
  card: {
    backgroundColor: background,
    textColor: textColor,
  },
  popup: {
    backgroundColor: popupBg,
    contentBgColor: popupContentBg,
    textColor: popupText,
  },
  input: {
    backgroundColor: inputBg,
  },
  linearGradient: linearGradient,
} as TProjectColors;
