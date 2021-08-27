//const precioOriginal = 200;
//const descuento = 15;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuent = precio * porcentajePrecioConDescuento / 100;
    return precioConDescuent;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultPrice")
    resultP.innerText = "El precio con descuento son $"+precioConDescuento+" USD";
}

const coupons1 = [
    "Cupón Super Descuento",
    "Cupón Ultra Descuento",
    "Cupón Mega Descuento"
]

const coupons2 = [ {
        name: "Cupón Super Descuento",
        discount: 15,
    },
    {
        name: "Cupón Ultra Descuento",
        discount: 20,
    },
    {
    name: "Cupón Mega Descuento",
    discount: 30,
    }
];

function onClickButtonPriceCoupon1(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    
    let descuento;

    switch(couponValue) {
        case "Cupón Super Descuento":
            descuento = 15;
            break;
        case "Cupón Ultra Descuento":
            descuento = 20;
            break;
        case "Cupón Mega Descuento":
            descuento = 30;
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultPrice")
    resultP.innerText = "El precio con descuento son $"+precioConDescuento+" USD";
}

function onClickButtonPriceCoupon2(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    
    if(!coupons1.includes(couponValue)){
        alert("El cupón \""+couponValue+"\" no existe, favor de revisar la redacción del texto.")
        const resultP = document.getElementById("ResultPrice")
        resultP.innerText = "";
    } else {
        let descuento;
        if (couponValue === "Cupón Super Descuento") {
            descuento = 15;
         } else if (couponValue === "Cupón Ultra Descuento") {
            descuento = 20;
         } else if (couponValue === "Cupón Mega Descuento") {
            descuento = 30;
         }

        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        const resultP = document.getElementById("ResultPrice")
        resultP.innerText = "El precio con descuento son $"+precioConDescuento+" USD";
    }
}


function onClickButtonPriceCoupon3(){
    debugger;
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    
    const isCouponValueValid = function(coupon){
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons2.find(isCouponValueValid)

    if(!userCoupon){
        alert("El cupón \""+couponValue+"\" no existe, favor de revisar la redacción del texto.")
        const resultP = document.getElementById("ResultPrice")
        resultP.innerText = "";
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        const resultP = document.getElementById("ResultPrice")
        resultP.innerText = "El precio con descuento son $"+precioConDescuento+" USD";
    }
}
/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuent
});*/