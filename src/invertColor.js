'use strict';

/**
 * Write a function accepting 6 digit HEX color with a leading #
 * and returning inverted color (color + inverted === white)
 *
 * invertColor('#000000') === '#FFFFFF' // 0x000000 + 0xFFFFFF === 0xFFFFFF
 * invertColor('#DDEEAA') === '#221155' // 0x221155 + 0xDDEEAA === 0xFFFFFF
 * invertColor('#012345') === '#FEDCBA' // 0x012345 + 0xFEDCBA === 0xFFFFFF
 *
 * @param {string} color
 *
 * @return {string}
 */
function invertColor(color) {
  const firstColor = color.slice(1, 3).toLocaleUpperCase();
  const secondColor = color.slice(3, 5).toLocaleUpperCase();
  const thirdColor = color.slice(-2).toLocaleUpperCase();

  const firstInvertedColor = toHex(255 - toNumber(firstColor));
  const secondInvertedColor = toHex(255 - toNumber(secondColor));
  const thirdInvertedColor = toHex(255 - toNumber(thirdColor));

  return `#${firstInvertedColor}${secondInvertedColor}${thirdInvertedColor}`;
}

const hexLetters = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};

const toNumber = color => {
  let res = 0;
  const firstSimbol = color.slice(0, 1);
  const secondSimbol = color.slice(-1);

  isFinite(firstSimbol)
    ? res += +firstSimbol * 16
    : res += hexLetters[firstSimbol] * 16;

  isFinite(secondSimbol)
    ? res += +secondSimbol
    : res += hexLetters[secondSimbol];

  return res;
};

const toHex = (value) => {
  let res = '';
  const firstNumber = Math.floor(value / 16);

  if (firstNumber < 10) {
    res = firstNumber.toString();
  } else {
    for (const letter in hexLetters) {
      if (hexLetters[letter] === firstNumber) {
        res = letter;
      }
    }
  }

  const secondNumber = value - (firstNumber * 16);

  if (secondNumber < 10) {
    res += secondNumber.toString();
  } else {
    for (const letter in hexLetters) {
      if (hexLetters[letter] === secondNumber) {
        res += letter;
      }
    }
  }

  return res;
};

module.exports = invertColor;
