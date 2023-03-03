function Form() {
    const [name, setName] = React.useState("HI :)");
    const Answer=["Бесспорно","Предрешено","Определённо да","Вероятнее всего","Да","Бесспорно","Предрешено","Мне кажется «да»","Мой ответ «нет»","сомнительно","Даже не думай","Спроси позже"];

const Timets=()=>{
   const randomIndex = Math.floor(Math.random() * 12);
    setName(Answer[randomIndex]);
}

const Show=()=>
{
    $("#img").hide("fade", {}, 2500);
     setTimeout(Timets, 2500);
    $("#img").show("fade", {}, 3500);
}

    return (
<div>
<div className="ball" onClick={Show}>             
<div className="ball2">           
<div id="img" className="triangle c_triangle">
<div className="txt">
{name}
</div>
</div>
</div>
 </div>
 </div>); }