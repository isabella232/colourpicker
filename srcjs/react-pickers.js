import React from 'react';
import ReactDOM from 'react-dom';
import * as pickers from 'react-color';

export const reactPalettes = new Set([
  "sketch",
  "alpha",
  "block",
  "chrome",
  "circle",
  "compact",
  "github",
  "hue",
  "photoshop",
  "slider",
  "swatches",
  "twitter"
]);

const capitalize = s => s.replace(/^./, c => c.charAt(0).toUpperCase());

const pickerForPalette = palette => pickers[`${capitalize(palette)}Picker`];

export function renderReactPicker(container, palette) {
  const picker = React.createElement(pickerForPalette(palette));
  ReactDOM.render(picker, container);
}
