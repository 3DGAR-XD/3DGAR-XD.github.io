<template>
  <div class="container-fluid vh-100 vw-100 py-4 d-flex flex-column">
    <div class="d-flex justify-content-around">
        <span class="w-100 fw-900 fs-2">~エドガル~<br><code class="fs-6 d-block">(3DGAR XD)</code></span>
<svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 626.000000 626.000000" preserveAspectRatio="xMidYMid meet" @click="openDropdown" class="d-md-none mx-4">

<g transform="translate(0.000000,626.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
<path d="M360 5761 c-79 -25 -128 -53 -188 -106 -65 -58 -101 -110 -138 -200 -25 -62 -28 -82 -28 -175 0 -90 4 -115 27 -174 60 -153 169 -255 337 -312 53 -18 134 -19 2760 -19 2626 0 2707 1 2760 19 168 57 277 159 337 312 23 59 27 84 27 174 0 93 -3 113 -28 175 -37 89 -72 141 -138 200 -59 53 -130 92 -203 111 -41 11 -528 14 -2760 13 -2569 0 -2713 -1 -2765 -18z"/>
<path d="M360 3611 c-92 -29 -142 -61 -210 -130 -103 -105 -145 -207 -144 -356 0 -86 4 -110 28 -170 62 -152 168 -252 324 -306 54 -18 134 -19 2767 -19 2464 0 2716 1 2766 16 157 47 271 152 335 309 24 60 28 84 28 170 1 148 -44 257 -148 361 -64 64 -112 94 -205 125 -52 18 -139 19 -2770 18 -2575 0 -2719 -1 -2771 -18z"/>
<path d="M450 1480 c-267 -30 -470 -277 -446 -542 19 -212 170 -390 373 -443 50 -13 396 -15 2758 -15 2455 0 2706 1 2756 16 156 47 272 153 332 305 73 183 28 390 -116 533 -63 64 -107 92 -207 130 l-55 21 -2665 1 c-1466 1 -2694 -2 -2730 -6z"/>
</g>
</svg>
      </div>
      <nav class="w-100 position-absolute top-0 start-0 py-md-4" :class="{active:isActive}">
        <ul class="flex-md-row justify-content-end-md list-group">
          <li class="list-group-item border-md-0 text-center"><router-link class="text-decoration-none text-white link" :to="{name:'home'}">Home</router-link></li>
          <li class="list-group-item border-md-0 text-center"><router-link class="text-decoration-none text-white link" :to="{name:'about'}">About Me</router-link></li>
          <li class="list-group-item border-md-0 text-center"><router-link class="text-decoration-none text-white link" :to="{name:'projects'}">Projects</router-link></li>
          <li class="list-group-item border-md-0 text-center"><router-link class="text-decoration-none text-white link" :to="{name:'playground'}">Small projects</router-link></li>
          <li class="list-group-item border-md-0 text-center"><router-link class="text-decoration-none text-white link" :to="{name:'contact'}">Contact Me</router-link></li>
        </ul>
      </nav>

    <p class="text-center pt-4">These are some projects that I have done</p>
    <div id="carouselExampleCaptions" class="carousel slide h-80">
  <div class="carousel-indicators">
    <button
      v-for="(items, index) in projects"
      :key="index"
      type="button"
      :data-bs-target="'#carouselExampleCaptions'"
      :data-bs-slide-to="index"
      :class="{ active: index === 0 }"
      aria-current="true"
      :aria-label="`Slide ${index + 1}`"
    ></button>
  </div>
  <div class="carousel-inner h-100 d-flex align-items-center align-items-md-start">
    <div
      v-for="(items, index) in projects"
      :key="index"
      :class="{ 'carousel-item': true, active: index === 0 }"
    >
      <img :src="items.imgSrc" class="d-block mx-auto" :alt="items.figcaption"/>
      <div class="text-center carousel-label ts-black m-sm-custom m-md-custom">
        <h5>{{ items.name }}</h5>
        <p class="mx-5">{{ items.description }}</p>
        <a :href="items.projectUrl" role="button" target="_blank" rel="noreferrer noopener" class="button align-self-center rounded text-white text-decoration-none p-2">Go to the project</a>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    <router-link to="/playground" class="button align-self-center rounded text-white text-decoration-none p-2">Do u want to go to my small projects?</router-link>
  </div>
</template>

<style scoped>
.container-fluid {
    background: #1f1f1f url("../assets/background3.png") no-repeat center;
  }
img{
  width: 45%;
}
.carousel-label{
  left:0;
  right:0;
}
.vh-50{
  height: 50vh;
}
.button{
  bottom: 1em
}
.carousel-inner{
  height: 70vh;
}
.h-80{
  height: 80%;
}
@media (min-width: 768px){
  .m-md-custom{
    margin: 1em 8em!important;
  }
  img{
    width: 30%;
  }
}
</style>

<script>
export default {
  beforeCreate(){document.title= "3DGAR XD - Projects" },
  name: "MyProjects",
  methods:{
    openDropdown(){this.isActive = !this.isActive}
  },
  data(){
    return{
      projects:[
        {
          name: "Pokedex App",
          description: "A project in which you can see and download the information of pokemons, items, berries and regions of PokeApi. Here I learned to use import and export.",
          projectUrl:"https://3dgar-xd.github.io/Pokedex/",
          figCaption:"...",
          imgSrc: require("../assets/pokeapi.png")
        },
        {
          name: "CRUD App",
          description: "A basic CRUD that I did against the clock, which is not well polished but it is functional with this I learned to program a server from 0.",
          projectUrl:"https://github.com/3DGAR-XD/CRUD-APP",
          figCaption:"...",
          imgSrc: require("../assets/crud.png")
        },
        {
          name: "Country Quiz",
          description: "This is my most complex project which I have remodeled using bootstrap, async-await and error handling.",
          projectUrl:"https://3dgar-xd.github.io/Country-Quiz/",
          figCaption:"...",
          imgSrc: require("../assets/cq.png")
        },
      ],
      isActive: false
    }
  }
}
</script>