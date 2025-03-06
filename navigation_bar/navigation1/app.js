const $market = document.querySelector(".market");
const $list = document.querySelectorAll("ul li");

$list.forEach(($li)=>{
    $li.addEventListener(
        "mousemove",
        (event)=>{
            $market.style.left = $li.offsetLeft + 'px';
            $market.style.width = $li.offsetWidth + 'px';
            document.querySelector(".active")?.classList.remove("active");
            $li.classList.add('active');
        }
    )
})