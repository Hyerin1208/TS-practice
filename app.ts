// 타입 가드 (Type Gyards)
type StringOrNum = number | string;
let itemPrice: number;

const setItemPrice = (price: StringOrNum): void => {
  if (typeof price === "string") {
    itemPrice = 0;
  } else {
    itemPrice = price;
  }
};

setItemPrice(50);
