const whiteScreen = document.querySelector(`.white-scr`);
const loader = document.querySelector(`.loader`);
let timerId;
function loadIF() {
    if (getComputedStyle(loader).opacity == 0) {
        loader.classList.add(`d-none`);
        clearInterval(timerId);
    }
}
function addSet() {
    timerId = setInterval(loadIF, 100);
}
document.addEventListener("DOMContentLoaded", function () {
    anime({
        targets: whiteScreen,
        opacity: 0,
        duration: 3000,
        easing: "linear",
        complete: () => {
            whiteScreen.classList.add(`opacity-zero`);
            whiteScreen.classList.add(`d-none`);
            loader.classList.add(`opacity-zero`);
            addSet();
        },
    });
});

bodyCheck = window.innerWidth;
divBody = document.getElementById(`body`);

if(bodyCheck <= 1300){
    divBody.innerHTML = `<div class="mobile d-flex">
        <div class="mobile_page_one d-flex">
            <div class="strel-div pos-absolute" id="strel-page-mobile-top">
                <div class="bottom-strel pos-relative d-flex just-center r180 pointer" id="page-2-top">
                    <div class="strel pos-relative r180"></div>
                </div>
            </div>
            <div class="back-span pos-absolute">
            </div>
            <div class="mobile_back_one pos-absolute"></div>
            <div class="mobile_back_two pos-absolute"></div>
            <div class="pos-absolute mobile_first"></div>
            <p class="mobile_text_one pos-absolute margin-none">Shiroi</p>
            <div class="mobile_second pos-absolute"></div>
            <p class="mobile_text_two pos-absolute margin-none">Suna</p>
        </div>

        <div class="mobile_page_two d-flex flex-column just-center marginTOP100">
            <div class="top-strel pos-absolute pointer d-flex just-center pointer" id="strel-page-mobile-bottom">
                    <div class="strel pos-relative r180"></div>
            </div>
            <div class="text d-flex flex-column alig-center">
                <h4 class="margin-none h4-rules" id="0">Спам</h4>
                <p class="margin-none p-rules">одинаковые сообщения/гифки если более 3 подряд сначала варн. потом же бан и кик из флуда.</p>
            </div>
            <div class="text_strel d-flex just-center">
                <div class="text_strel_right"></div>
                <div class="text_strel_left"></div>
            </div>
            <a class="pos-absolute alfa" href="https://t.me/shiroisunainfo">Вернуться в телеграмм</a>
        </div>
    </div>`;
}else{
    divBody.innerHTML = `<div class="pc d-flex">
        <div id="firstPage">
            <div class="strel-div pos-absolute" id="strel-page-1">
                <div class="bottom-strel pos-relative d-flex just-center r180 pointer" id="page-2-top">
                    <div class="strel pos-relative r180"></div>
                </div>
            </div>
            <div class="First pos-absolute">
                <div class="stroke pos-relative">
                    <p class="stroke__item">白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 </p>
                </div>
                <div class="Second d-flex just-start alig-center pos-relative">
                    <div class="Third"></div>
                </div>
                <div class="stroke pos-relative" style="bottom: 15vh;">
                    <p class="stroke__item2">白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 </p>
                </div>
            </div>
        </div>
        <div id="secondPage" class="marginTOP100">
            <div class="strel-div pos-absolute" id="strel-page-2">
                <div class="top-strel pos-relative pointer d-flex just-center pointer" id="page-1">
                    <div class="strel pos-relative r180"></div>
                </div>
                <div class="pos-relative d-flex just-center r180 pointer bottom-strel-2" id="page-3">
                    <div class="strel pos-relative r180"></div>
                </div>
            </div>
            <div class="d-flex alig-center test pos-absolute">
                <div class="star pointer act" id="0"></div>
                <div class="defis pass" id="1"></div>
                <div class="star pass pointer" id="2"></div>
                <div class="defis pass" id="3"></div>
                <div class="star pass pointer" id="4"></div>
                <div class="defis pass" id="5"></div>
                <div class="star pass pointer" id="6"></div>
                <div class="defis pass" id="7"></div>
                <div class="star pass pointer" id="8"></div>
                <div class="defis pass" id="9"></div>
                <div class="star pass pointer" id="10"></div>
                <div class="defis pass" id="11"></div>
                <div class="star pass pointer" id="12"></div>
                <div class="defis pass" id="13"></div>
                <div class="star pass pointer" id="14"></div>
            </div>
            <div class="star-strel pos-absolute d-flex just-bet">
                <div class="left-strel pos-relative pointer d-flex alig-center">
                    <div class="strel r90"></div>
                </div>
                <div class="right-strel pos-relative pointer d-flex alig-center d-flex just-end">
                    <div class="strel r270"></div>
                </div>
            </div>
            <h3 class="margin-none">Правила</h3>
            <div class="three-First pos-absolute">
                <div class="three-Second pos-absolute"></div>
                <div class="three-text d-flex flex-column alig-center just-space pos-absolute">

                    <div style="width: 50%;">
                        <h4 id="h4-rules" class="margin-none">Спам</h4>
                        <p id="p-rules" class="margin-none">одинаковые сообщения/гифки если более 3 подряд сначала варн. потом же бан и кик из флуда. </p>
                    </div>
                </div>

                <div class="pos-absolute row-div">
                    <div class="row">
                        <p class="row__item">白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 </p>
                    </div>
                    <div class="row" style="bottom: 0;">
                        <p class="row__item2">白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 </p>
                    </div>
                    <div class="row">
                        <p class="row__item">白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂
                            白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 </p>
                    </div>
                </div>
            </div>
        </div>
        <div id="thirdPage" class="pos-absolute marginTOP100">
            <div class="strel-div pos-absolute" id="strel-page-3">
                <div class="top-strel pos-relative pointer d-flex just-center pointer" id="page-2-bot">
                    <div class="strel pos-relative r180"></div>
                </div>
            </div>
            <a href="https://t.me/shiroisunainfo" class="two-Third white pos-absolute">Назад в ТГ</a>
            <div class="two-First pos-absolute ">
                <div class="stroke pos-relative">
                    <p class="stroke__item">白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 </p>
                </div>
                <div class="two-Second d-flex just-start alig-center pos-relative">
                    <div class="pos-relative div-a"></div>
                </div>
                <div class="stroke pos-relative" style="bottom: 15vh;">
                    <p class="stroke__item2">白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 白い砂 </p>
                </div>
            </div>
        </div>
    </div>`;
}
