<template>
  <router-view class="overflow-hidden"/>
</template>

<style>
svg{
  width: 1.5em;
  height: 1.5em;
  transition: .2s;
  z-index: 3;
}
svg:hover{
  transform: scaleX(1.5);
}
.container-fluid{
  color: #fff;
    font-family: "Fira Code Condensed", "Lato"
}
a.link {
  color: #62e5ff;
  position: relative;
}
@media (min-height:1200px){
  .h-custom{
    height: 70vh!important;
  }
}.h-custom{
  height: 100%!important;
}
.list-group-item{
  background-color: #0003!important;
  border: 0!important
}
.link:hover {
  color: #28a5be;
  text-shadow: #fff 0px 0px 10px;
  cursor: pointer;
}
.link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #a438e2, #1662c5);
  z-index: 1;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease-in-out;
}

.link:hover::before {
  transform-origin: left;
  transform: scaleX(1);
  transition-timing-function: cubic-bezier(0.2, 1, 0.82, 0.94);
}
.h-90{
  height: 90%;
}
:root {
  --colorBefore: (#ffffff80);
  --colorAfter: (#fff);
}
  .skills {
    color: var(--colorBefore);
  }
  a {
    color: var(--colorBefore);
    transition: 0.5s;
  }
  a:hover {
    color: var(--colorAfter);
  }
  .button:disabled{
    background: var(--color, linear-gradient(180deg, #6fe7e7 0%, #4939af 100%));
  }
  .fun-fact {
    bottom: 0.5em;
    right: 2em;
  }
  nav {
    background-color: #a5a5a573;
}
  .signature {
    font:"Maru Kiwi";
  }
  nav{
    z-index: 1;
  }
  nav, .active{
    transform:  translateY(-15em);
    transition: 2s;
  }
  .active{
    transform: translateY(0);
  }
  .button {
    background: var(--color, linear-gradient(180deg, #15b9b9 0%, #3c1dff 100%));
    cursor: pointer;
  }
  .list-group-item{
    background-color: #85858561!important;
  }
  .end{
    right:1em
  }
  li{
    list-style: none;
  }
  .ts-black{
  text-shadow: 1px 1px #000;
}
@media (min-width:768px) {
  nav, .active{
    background-color: #0000;
    transform:  translateY(0);
  }
  .justify-content-end-md{
    justify-content: end;
  }
  .border-md-0{
    border: 0!important;
  }
  .list-group-item{
    background: #0000!important; ;
  }
}
</style>