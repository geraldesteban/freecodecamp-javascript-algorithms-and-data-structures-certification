"use strict";

// 1st Project: Palindrome Checker
/* Data Test:
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|\_/|four") should return false. 
*/

const palindromeCheck = function (str) {
  if (
    str
      .split(" ")
      .join("")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "") ===
    str
      .split(" ")
      .join("")
      .split("")
      .reverse()
      .join("")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(palindromeCheck("My age is 0, 0 si ega ym."));

// 2nd Project: Roman Numeral Converter
/* Data Test:
convertToRoman(2) should return the string II.
convertToRoman(3) should return the string III.
convertToRoman(4) should return the string IV.
convertToRoman(5) should return the string V.
convertToRoman(9) should return the string IX.
convertToRoman(12) should return the string XII.
convertToRoman(16) should return the string XVI.
convertToRoman(29) should return the string XXIX.
convertToRoman(44) should return the string XLIV.
convertToRoman(45) should return the string XLV.
convertToRoman(68) should return the string LXVIII
convertToRoman(83) should return the string LXXXIII
convertToRoman(97) should return the string XCVII
convertToRoman(99) should return the string XCIX
convertToRoman(400) should return the string CD
convertToRoman(500) should return the string D
convertToRoman(501) should return the string DI
convertToRoman(649) should return the string DCXLIX
convertToRoman(798) should return the string DCCXCVIII
convertToRoman(891) should return the string DCCCXCI
convertToRoman(1000) should return the string M
convertToRoman(1004) should return the string MIV
convertToRoman(1006) should return the string MVI
convertToRoman(1023) should return the string MXXIII
convertToRoman(2014) should return the string MMXIV
convertToRoman(3999) should return the string MMMCMXCIX
*/

const convertToRoman = function (num) {
  const RomanArabic = {
    M: "1000",
    CM: "900",
    D: "500",
    CD: "400",
    C: "100",
    XC: "90",
    L: "50",
    XL: "40",
    X: "10",
    IX: "9",
    V: "5",
    IV: "4",
    I: "1",
  };
  let result = "";
  for (const roman in RomanArabic) {
    while (num >= RomanArabic[roman]) {
      result += roman;
      num -= RomanArabic[roman];
    }
  }
  return result;
};
console.log(convertToRoman(3999));

// 3rd Project: Caesars Cipher
/* Data Test:
rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
rot13("SERR YBIR?") should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/

const rot13 = function (str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphaRot13 = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  return str.replace(/[A-Za-z]/g, function (char) {
    const i = alphabet.indexOf(char);
    return alphaRot13[i];
  });
};
console.log(rot13("SERR PBQR PNZC"));

// 4th Project: Telephone Number Validator
/* Data Test:
telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6054756961)") should return false.
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false.
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false.
telephoneCheck("55 55-55-555-5") should return false.
telephoneCheck("11 555-555-5555") should return false.
*/

const telephoneCheck = function (str) {
  const validUSPhoneNumber =
    /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([- \s]?)\d{4}$/;
  return validUSPhoneNumber.test(str);
};
console.log(telephoneCheck("555-555-5555"));