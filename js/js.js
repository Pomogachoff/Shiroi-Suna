const whiteScreen = document.querySelector(`.white-scr`);
const loader = document.querySelector(`.loader`);
let timerId;
function loadIF(){
    if(getComputedStyle(loader).opacity == 0){
        loader.classList.add(`d-none`);
        clearInterval(timerId);
    }
}
function addSet(){
    timerId = setInterval(loadIF, 100);
}

document.addEventListener('DOMContentLoaded', function() {
    anime({
      targets: whiteScreen,
      opacity: 0,
      duration: 3000,
      easing: 'linear',
      complete: ()=>{
        whiteScreen.classList.add(`opacity-zero`);
        whiteScreen.classList.add(`d-none`);
        loader.classList.add(`opacity-zero`);
        addSet();
      }
    }); 
});

const stars = document.querySelectorAll('.star');
const defises = document.querySelectorAll('.defis');
const h4Rules = document.getElementById('h4-rules');
const pRules = document.getElementById('p-rules');
const firstPage = document.getElementById('firstPage');
const secondPage = document.getElementById('secondPage');
const thirdPage = document.getElementById('thirdPage');
const leftRule = document.querySelector(`.left-strel`);
const rightRule = document.querySelector(`.right-strel`);
const toPage1 = document.getElementById(`page-1`);
const toPage3 = document.getElementById(`page-3`);
const toPage2Top = document.getElementById(`page-2-top`);
const toPage2Bottom = document.getElementById(`page-2-bot`);
const clientHeight = window.innerHeight * (-1);
const rulesArr = [
    {'h4':'Спам', 'p':'одинаковые сообщения/гифки<br>если более 3 подряд сначала варн.<br>потом же бан и кик из флуда.'},
    {'h4':'Оскорбления', 'p':'при оскорблении других участников<br />в первый раз, Вам выдаётся преду-<br />преждение, в случае повторных ка-<br />зусов &mdash; мут на 3 часа. В случае если<br />оскорбления перетекают в травлю,<br />Вам выдаётся бан навсегда.'},
    {'h4':'Контент 18+', 'p':'контент с материалами 18+ разрешён<br />при условии,что там имеется цензура<br />и вы предупредили о своём намерении.<br />материалы с частично обнажёнными ча-<br />стями тела(кроме половых органов) не<br /> попадают под действие данного правила.'},
    {'h4':'Ccоры', 'p':'желательно решать недопонимания в лс,<br />но если же такого не происходит и это про-<br />сто перепалка, то так и быть. ситуация, пе-<br />рерастающая в серьёзную ссору, которая<br />портит атмосферу чата, карается предупре-<br />ждением, потом мутом минимум на 3 часа.<br />если дело доходит до травли &mdash; бан навсегда.'},
    {'h4':'Неактив', 'p':'неактив более 5 дней карается<br>баном. нью, которые в чате не более<br>5 дней, данное правило не касается.'},
    {'h4':'Политика', 'p':'обсуждение политики строго-настрого<br>запрещено. за нарушение выдаётся предупре-<br>ждениепри повторном нарушении — бан'},
    {'h4':'Жалобы', 'p':'если на вас поступает 10 серьёзных жалоб,<br />которые были обоснованы, то вас кикают.<br />мы будем предупреждать о каждой жалобе,<br />и, конечно, проверять их на достоверность<br />и обоснованность тоже будем всегда.'},
    {'h4':'Незнание правил', 'p':'не освобождает от ответственности'},
];

function updateClasses(maxId) {
    stars.forEach(star => {
        const starId = Number(star.id);
        star.classList.toggle('act', starId === maxId);
        star.classList.toggle('pass', starId > maxId);
    });

    defises.forEach(defis => {
        const defisId = Number(defis.id);
        defis.classList.toggle('pass', defisId > maxId);
    });
}
function updateRules(index) {
    // Анимация исчезновения
    anime({
        targets: [h4Rules, pRules],
        opacity: 0.3,
        duration: 300,
        easing: 'linear',
        complete: () => {
            // Обновляем содержимое
            h4Rules.innerHTML = rulesArr[index].h4;
            pRules.innerHTML = rulesArr[index].p;
            
            // Анимация появления
            anime({
                targets: [h4Rules, pRules],
                opacity: 1,
                duration: 300,
                easing: 'linear'
            });
        }
    });
}
stars.forEach(star => {
    star.addEventListener('click', () => {
        const starId = Number(star.id);
        const ruleIndex = starId / 2;
        
        updateClasses(starId);
        updateRules(ruleIndex);
    });
});
leftRule.addEventListener('click', () => {
    const starId = Number(document.querySelector(`.act`).id);
    if(starId === 0){
        starId = 14;
    } else {
        starId -= 2;
    }
    const ruleIndex = starId / 2;
    
    updateClasses(starId);
    updateRules(ruleIndex);
});
rightRule.addEventListener('click', () => {
    let starId = Number(document.querySelector(`.act`).id);
    if(starId === 14){
        starId = 0;
    } else {
        starId += 2;
    }
    const ruleIndex = starId / 2;
    
    updateClasses(starId);
    updateRules(ruleIndex);
});

toPage2Top.addEventListener(`click`, ()=>{
    anime.timeline()
    .add({
        targets:secondPage,
        translateY:0,
        duration:1300,
        easing: 'cubicBezier(0, 0, 0.6, 1)',
        complete: ()=>{
            secondPage.classList.toggle(`marginTOP100`);
        }
    },0)
    .add({
        targets:firstPage,
        translateY:clientHeight,
        duration:1200,
        easing: 'cubicBezier(0, 0, 0.6, 1)',
    }, 0)
});
toPage1.addEventListener(`click`, ()=>{
    anime.timeline()
    .add({
        targets:firstPage,
        translateY:0,
        duration:1300,
        easing: 'cubicBezier(0, 0, 0.6, 1)',
        complete: ()=>{
            secondPage.classList.toggle(`marginTOP100`);
        }
    },0)
    .add({
        targets:secondPage,
        translateY:clientHeight*(-1),
        duration:1200,
        easing: 'cubicBezier(0, 0, 0.6, 1)',
    }, 0)
});
toPage3.addEventListener(`click`, ()=>{
    anime.timeline()
    .add({
        targets:thirdPage,
        translateY:0,
        duration:1300,
        easing: 'cubicBezier(0, 0, 0.6, 1)',
        complete: ()=>{
            secondPage.classList.toggle(`marginTOP100`);

        }
    },0)
    .add({
        targets:secondPage,
        translateY:clientHeight,
        duration:1200,
        easing: 'cubicBezier(0, 0, 0.6, 1)',
    }, 0)
});
toPage2Bottom.addEventListener(`click`, ()=>{
    anime.timeline()
    .add({
        targets:secondPage,
        translateY:0,
        duration:1300,
        easing: 'cubicBezier(0, 0, 0.6, 1)',
        complete: ()=>{
            secondPage.classList.toggle(`marginTOP100`);
        }
    },0)
    .add({
        targets:thirdPage,
        translateY:clientHeight*(-1),
        duration:1200,
        easing: 'cubicBezier(0, 0, 0.6, 1)',
    }, 0)
});