export type IconsId =
  | "cart"
  | "minus";

export type IconsKey =
  | "Cart"
  | "Minus";

export enum Icons {
  Cart = "cart",
  Minus = "minus",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Cart]: "61697",
  [Icons.Minus]: "61698",
};
