import Color from "color";

const colorPrimary = "#ff6f4f";
const colorSecondary = "#2F2963";
const colorAccent = colorPrimary;

const colorPrimaryFaint = Color(colorPrimary)
  .lighten(0.45)
  .hex();

const colorSecondaryFaint = Color(colorSecondary)
  .lighten(2.6)
  .hex();

const colorAccentFaint = colorPrimaryFaint;

const colorSidebar = "#333333";

export const themeOrange = {
  colorPrimary,
  colorPrimaryFaint,
  colorSecondary,
  colorSecondaryFaint,
  colorAccent,
  colorAccentFaint,
  colorSidebar
};
