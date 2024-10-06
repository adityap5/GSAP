var tl =  gsap.timeline()

tl.from("#nav img,#nav h4,#nav button,#nav h3",{
    y:-100,
    duration:0.5,
    delay:.2,
    opacity:0,
    stagger:0.2
})

tl.from("#main h1 ,#vgs",{
 delay:0.5,
    opacity:0,
    stagger:0.2,
    scale:0
})
tl.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.1
}) 
tl.from("#main h5",{
    opacity:0,
    y:10,
    repeat:-1,
    yoyo:true,
    scale:0
})

