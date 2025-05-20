const stars = document.querySelectorAll(".star");
const defises = document.querySelectorAll(".defis");
const h4Rules = document.getElementById("h4-rules");
const pRules = document.getElementById("p-rules");
const firstPage = document.getElementById("firstPage");
const secondPage = document.getElementById("secondPage");
const thirdPage = document.getElementById("thirdPage");
const leftRule = document.querySelector(`.left-strel`);
const rightRule = document.querySelector(`.right-strel`);
const toPage1 = document.getElementById(`page-1`);
const toPage3 = document.getElementById(`page-3`);
const toPage2Top = document.getElementById(`page-2-top`);
const toPage2Bottom = document.getElementById(`page-2-bot`);
const clientHeight = window.innerHeight * -1;
const rulesArr = [
    {h4:"Спам", p:"одинаковые сообщения/гифки если более 3 подрядсначала варн. потом жебан и кик из флуда."},
    {h4:"Оскорбления", p:"при оскорблении других участников в первый раз, Вам выдаётся предупреждение, в случае повторных казусов &mdash; мут на 3 часа. В случае если оскорбления перетекают в травлю, Вам выдаётся бан навсегда."},
    {h4:"Контент 18+", p:"контент с материалами 18+ разрешён при условии, что там имеется цензура и Вы предупредили о своём намерении. материалы с частично обнажёнными частями тела (кроме половых органов) не попадают под действие данного правила."},
    {h4:"Ccоры", p:"желательно решать недопонимания в лс, но если же такого не происходит и это просто перепалка, то так и быть. ситуация, перерастающая в серьёзную ссору, которая портит атмосферу чата, карается предупреждением, потом мутом минимум на 3 часа. если дело доходит до травли &mdash; бан навсегда."},
    {h4:"Неактив", p:"неактив более 5 дней карается баном. нью, которые в чате не более 5 дней, данное правило не касается."},
    {h4:"Политика", p:"обсуждение политики строго-настрого запрещено. за нарушение выдаётся предупреждение при повторном нарушении &mdash; бан"},
    {h4:"Жалобы", p:"если на вас поступает 10 серьёзных жалоб, которые были обоснованы, то вас кикают. мы будем предупреждать о каждой жалобе, и, конечно, проверять их на достоверность и обоснованность тоже будем."},
    {h4:"Незнание правил", p:"не освобождает от ответственности."},
];
function updateClasses(maxId) {
    stars.forEach((star) => {
        const starId = Number(star.id);
        star.classList.toggle("act", starId === maxId);
        star.classList.toggle("pass", starId > maxId);
    });
    defises.forEach((defis) => {
        const defisId = Number(defis.id);
        defis.classList.toggle("pass", defisId > maxId);
    });
}
function updateRules(index) {
    anime({
        targets: [h4Rules, pRules],
        opacity: 0.3,
        duration: 300,
        easing: "linear",
        complete: () => {
            h4Rules.innerHTML = rulesArr[index].h4;
            pRules.innerHTML = rulesArr[index].p;
            anime({ targets: [h4Rules, pRules], opacity: 1, duration: 300, easing: "linear" });
        },
    });
}
stars.forEach((star) => {
    star.addEventListener("click", () => {
        const starId = Number(star.id);
        const ruleIndex = starId / 2;
        updateClasses(starId);
        updateRules(ruleIndex);
    });
});
leftRule.addEventListener("click", () => {
    const starId = Number(document.querySelector(`.act`).id);
    if (starId === 0) {
        starId = 14;
    } else {
        starId -= 2;
    }
    const ruleIndex = starId / 2;
    updateClasses(starId);
    updateRules(ruleIndex);
});
rightRule.addEventListener("click", () => {
    let starId = Number(document.querySelector(`.act`).id);
    if (starId === 14) {
        starId = 0;
    } else {
        starId += 2;
    }
    const ruleIndex = starId / 2;
    updateClasses(starId);
    updateRules(ruleIndex);
});
toPage2Top.addEventListener(`click`, () => {
    anime
        .timeline()
        .add(
            {
                targets: secondPage,
                translateY: 0,
                duration: 1300,
                easing: "cubicBezier(0,0,0.6,1)",
                complete: () => {
                    secondPage.classList.toggle(`marginTOP100`);
                },
            },
            0
        )
        .add({ targets: firstPage, translateY: clientHeight, duration: 1200, easing: "cubicBezier(0,0,0.6,1)" }, 0);
});
toPage1.addEventListener(`click`, () => {
    anime
        .timeline()
        .add(
            {
                targets: firstPage,
                translateY: 0,
                duration: 1300,
                easing: "cubicBezier(0,0,0.6,1)",
                complete: () => {
                    secondPage.classList.toggle(`marginTOP100`);
                },
            },
            0
        )
        .add({ targets: secondPage, translateY: clientHeight * -1, duration: 1200, easing: "cubicBezier(0,0,0.6,1)" }, 0);
});
toPage3.addEventListener(`click`, () => {
    anime
        .timeline()
        .add(
            {
                targets: thirdPage,
                translateY: 0,
                duration: 1300,
                easing: "cubicBezier(0,0,0.6,1)",
                complete: () => {
                    secondPage.classList.toggle(`marginTOP100`);
                },
            },
            0
        )
        .add({ targets: secondPage, translateY: clientHeight, duration: 1200, easing: "cubicBezier(0,0,0.6,1)" }, 0);
});
toPage2Bottom.addEventListener(`click`, () => {
    anime
        .timeline()
        .add(
            {
                targets: secondPage,
                translateY: 0,
                duration: 1300,
                easing: "cubicBezier(0,0,0.6,1)",
                complete: () => {
                    secondPage.classList.toggle(`marginTOP100`);
                },
            },
            0
        )
        .add({ targets: thirdPage, translateY: clientHeight * -1, duration: 1200, easing: "cubicBezier(0,0,0.6,1)" }, 0);
});
