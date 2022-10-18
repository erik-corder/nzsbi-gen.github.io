export type NzsbIconsId =
  | "busi-checked-shield"
  | "busi-wheel-barrow"
  | "sys-cart"
  | "sys-chevron-down"
  | "sys-minus";

export type NzsbIconsKey =
  | "BusiCheckedShield"
  | "BusiWheelBarrow"
  | "SysCart"
  | "SysChevronDown"
  | "SysMinus";

export enum NzsbIcons {
  BusiCheckedShield = "busi-checked-shield",
  BusiWheelBarrow = "busi-wheel-barrow",
  SysCart = "sys-cart",
  SysChevronDown = "sys-chevron-down",
  SysMinus = "sys-minus",
}

export const NZSB_ICONS_CODEPOINTS: { [key in NzsbIcons]: string } = {
  [NzsbIcons.BusiCheckedShield]: "61697",
  [NzsbIcons.BusiWheelBarrow]: "61698",
  [NzsbIcons.SysCart]: "61699",
  [NzsbIcons.SysChevronDown]: "61700",
  [NzsbIcons.SysMinus]: "61701",
};
