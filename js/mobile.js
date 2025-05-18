const h4Rules = document.querySelector(".h4-rules");
const pRules = document.querySelector(".p-rules");
const leftRule = document.querySelector(`.text_strel_left`);
const rightRule = document.querySelector(`.text_strel_right`);
const mobilePageOne = document.querySelector(`.mobile_page_one`);
const mobilePageTwo = document.querySelector(`.mobile_page_two`);
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
leftRule.addEventListener("click", () => {
    if(Number(h4Rules.id) == 7){
        var ruleIndex = 0;
        h4Rules.id = ruleIndex;
    }else{
       var ruleIndex = Number(h4Rules.id) + 1; 
       h4Rules.id = ruleIndex;
    }
    updateRules(ruleIndex);
});
rightRule.addEventListener("click", () => {
    if(Number(h4Rules.id) == 0){
        var ruleIndex = 7;
        h4Rules.id = ruleIndex;
    }else{
       var ruleIndex = Number(h4Rules.id) - 1; 
       h4Rules.id = ruleIndex;
    }
    updateRules(ruleIndex);
});

window.addEventListener('touchmove', function(e) {
    e.preventDefault(); // отменяем стандартное поведение браузера
    let currentY = e.touches[0].clientY;
    let deltaY = currentY - startY;

        if (deltaY > 0) {
            if(mobilePageOne.style.marginTop == 0){
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
            }
        } else {
            // свайп вверх
        }
});