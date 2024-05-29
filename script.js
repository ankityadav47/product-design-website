const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});
function firstPageAnim(){
  var tl = gsap.timeline();
  tl.from("#nav",{
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
  .to(".boundingelem",{
    y: 0,
    ease: Expo.easeInOut,
    stagger: .2,
    duration: 1.5,

  })
  .from(".subheading",{
    y: '-10',
    opacity: 0,
    duration: 1,
    delay: -0.6,
    ease: Expo.easeInOut
  })
  .from(".heading",{
    y: '-10',
    opacity: 0,
    duration: 0.5,
    delay: -0.3,
    ease: Expo.easeInOut
  })
  .from(".part1footer",{
    y: '-10',
    opacity: 0,
    duration: 2,
    delay: -1,
    ease: Expo.easeInOut
  })
}
let timeout;
function circleScaleAnim(){
  let xscale = 1;
  let yscale = 1;
  let xprev = 0;
  let yprev = 0;
  window.addEventListener("mousemove",(dets)=>{
    clearTimeout(timeout);
    let xdiff = dets.clientX - xprev;
    let ydiff = dets.clientY - yprev;
    xscale = gsap.utils.clamp(.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(.8,1.2, ydiff);
    xprev = dets.clientX;
    yprev = dets.clientY;
    circleMove(xscale,yscale)
    timeout= setTimeout(()=>{
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
    },100);
  });
}
function circleMove(xscale,yscale){
  window.addEventListener("mousemove",(dets)=>{
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
  })
}
circleScaleAnim();
circleMove();
firstPageAnim();
let elem=document.querySelectorAll('.elem');

elem.forEach(function(val){
  console.log(val);
  val.addEventListener('mouseenter',function(){
   val.childNodes[1].style.opacity=1;

  });
  val.addEventListener('mouseleave',()=>{
    val.childNodes[1].style.opacity=0;
  });
  val.addEventListener('mousemove',(dets)=>{
    val.childNodes[1].style.left =dets.pageX+"px";
      val.childNodes[1].setAttribute("data-fromTop", val.childNodes[3].offsetTop - scrollY);
    // console.log(e)
  });
});
