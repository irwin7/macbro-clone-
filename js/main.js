let elTemp = document.querySelector('#temp');
let elImgInner = document.querySelector('.left__img-inner');
let elBtns = document.querySelector('.left__btns');
// inputs
let elOzuTxt = document.querySelector('.charac__ozu');
let elMemTxt = document.querySelector('.charac__mem');
let elColorTxt = document.querySelector('.charac__color');
let elOzu8Btn = document.querySelector('.ozu8');
let elOzu16Btn = document.querySelector('.ozu16');
let elMemor256Btn = document.querySelector('.memor256');
let elMemor512Btn = document.querySelector('.memor512');
let elMemor1Btn = document.querySelector('.memor1');
let elMemorBtns = document.querySelectorAll('.memor-group');
let elColorGoldBtn = document.querySelector('.color-gold');
let elColorSilverBtn = document.querySelector('.color-silver');
let elColorGreyBtn = document.querySelector('.color-grey');
let elPlusBtn = document.querySelector('.form__price-plus');
let elMinusBtn = document.querySelector('.form__price-minus');
let elPrice = document.querySelector('.form__price-inp');
let elPriceText = document.querySelector('.form__pric');
// inputs-end
let elColorInp = document.querySelectorAll('.form__input-color');

let memory = 256;
let memoryRam = 8;
let sumVal = '';

let oldSumVal = '11 400 000';
let sumCount = +elPrice.textContent;
changePrice(256,8)

elOzu16Btn.addEventListener('click',()=>{
    elOzuTxt.textContent = '16gb'
    elMemor1Btn.classList.add('dib');
    memoryRam = 16;
    changePrice(memory,memoryRam);
})
elOzu8Btn.addEventListener('click',()=>{
    elOzuTxt.textContent = '8gb'
    elMemor1Btn.classList.remove('dib');
    memoryRam = 8;
    changePrice(memory,memoryRam);
})

for(let item of elMemorBtns){
    item.addEventListener('click',()=>{
        if(item.classList.contains('memor1')){
            elOzu8Btn.classList.remove('dib');
            elMemTxt.textContent = '1tb';
            memory = 1;
            memoryRam = 16;
            changePrice(memory,memoryRam);
        }else if(item.classList.contains('memor256')){
            elOzu8Btn.classList.add('dib');
            elMemTxt.textContent = '256gb';
            memory = 256;
            changePrice(memory,memoryRam);
        }else{
            elOzu8Btn.classList.add('dib');
            elMemTxt.textContent = '512gb';
            memory = 512;
            changePrice(memory,memoryRam);
        }
    })
}

elColorGoldBtn.addEventListener('click',()=>{
    elColorTxt.textContent = 'Gold';
})
elColorSilverBtn.addEventListener('click',()=>{
    elColorTxt.textContent = 'Silver';
})
elColorGreyBtn.addEventListener('click',()=>{
    elColorTxt.textContent = 'Grey';
})

function changePrice(mem,ram){
    sumCount = 1;
    elPrice.textContent = 1;
    if(ram == 8 && mem == 256){
        oldSumVal = '11 550 000';
        elPriceText.textContent = oldSumVal;
    }else if(ram == 8 && mem == 512){
        oldSumVal = '14 190 000';
        elPriceText.textContent = oldSumVal;
    }else if(ram == 16 && mem == 256){
        oldSumVal = '16 280 000';
        elPriceText.textContent = oldSumVal;
    }else if(ram == 16 && mem == 512){
        oldSumVal = '18 150 000';
        elPriceText.textContent = oldSumVal;
    }else if(ram == 16 && mem == 1){
        oldSumVal = '21 450 000';
        elPriceText.textContent = oldSumVal;
    }
    sumVal = oldSumVal.replace(/ /g, "");
}

elPlusBtn.addEventListener('click',()=>{
    sumCount++;
    elPrice.textContent = sumCount;
    elPriceText.textContent = sumVal *sumCount;
})

elMinusBtn.addEventListener('click',()=>{
    if(sumCount > 0){
        sumCount--;
        elPrice.textContent = sumCount;
        elPriceText.textContent = +elPriceText.textContent - sumVal;
    }
})

chooseImg('gold');

function chooseImg(color){
    let count = 0;
    for(let item of mac[color]){
        count++;
        elImgInner.innerHTML += `
            <div class="left__imgs">
                <img class="left__img" src="${item}" alt="image">
            </div>
        `;
        if(count < 2){
            elBtns.innerHTML += `
            <button class="left__btn left__btn--active" value='${count}'>
                <img class="left__btn-image" src="${item}" alt="btn-image">
            </button>
            `;
        }else{
            elBtns.innerHTML += `
            <button class="left__btn" value='${count}'>
                <img class="left__btn-image" src="${item}" alt="btn-image">
            </button>
            `;
        }
    }
    let elBtn = document.querySelectorAll('.left__btn');
    let width = elImgInner.offsetWidth;
    let leftVal = 700;

    for(let item of elBtn){
        item.addEventListener('click',()=>{
            elImgInner.style.left = `${leftVal - width* (item.value - 1)}px`;
            removeClass();
            item.classList.add('left__btn--active');
        });
    }
    function removeClass(){
        for(let item of elBtn){
            item.classList.remove('left__btn--active');
        }
    }
}

for(let item of elColorInp){
    item.addEventListener('click',()=>{
        elBtns.innerHTML = '';
        elImgInner.innerHTML = '';
        chooseImg(item.value)
    })
}