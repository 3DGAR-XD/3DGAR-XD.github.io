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
<div id="carouselExampleCaptions" class="carousel slide h-custom">
  <div class="carousel-indicators">
    <button
      v-for="(items, index) in skills"
      :key="index"
      type="button"
      :data-bs-target="'#carouselExampleCaptions'"
      :data-bs-slide-to="index"
      :class="{ active: index === 0 }"
      aria-current="true"
      :aria-label="`Slide ${index + 1}`"
    ></button>
  </div>
  <div class="carousel-inner h-100 d-flex align-items-center">
    <div
      v-for="(items, index) in skills"
      :key="index"
      :class="{ 'carousel-item': true, active: index === 0 }"
    >
      <img :src="items.imgSrc" class="d-block mx-auto" :at="items.figcaption"/>
      <div class="text-center carousel-label ts-black m-sm-custom m-md-custom">
        <h5>{{ items.name }}</h5>
        <p class="mx-5">{{ items.description }}</p>
        <ul class="d-flex flex-column w-50 mx-auto">
          <li v-for="(value, index) in items.progress" :key="index">
            {{ value.name }}
            <div class="progress" role="progressbar" aria-label="Animated striped example" :aria-valuenow="value.value" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated ts-black" :style="{width: value.value + '%'}">{{ value.value }}</div>
</div>
          </li>
        </ul>
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

    <router-link to="/projects" class="button align-self-center rounded text-white text-decoration-none p-2">Do u want to go to my projects?</router-link>
  </div>
</template>

<style scoped>
  .container-fluid {
    background: #1f1f1f url("../assets/background2.png") no-repeat center;
  }

img{width: 65%;}
.carousel-label{
  left:0;
  right:0
}

.vh-50{
  height: 50vh;
}

.button{
  bottom: 1em
}

@media (min-width: 576px){
  .m-sm-custom{
    margin: 0 2em
  }
}
@media (min-width: 768px){
  .m-md-custom{
    margin: 1em 4em;
    height: auto!important;
  }
  img{width: 40%;}
}
@media (min-height:700px){
  img, .carousel-label{
    margin: 3em 0;
  }
}

</style>

<script>
export default {
  beforeCreate(){document.title="3DGAR XD - Skills"},
  name: "MySkills",
  methods: {
    openDropdown() {
      this.isActive = !this.isActive;
    },
  },
  computed:{
    WidthValue(){
      return this.skills.forEach(element => element.value)
    }
  },
  data() {
    return {
      skills: [
        {
          name: "Basic Web Stack",
          figcaption: "HMTL, CSS, JavaScript",
          imgSrc: require("../assets/web-stack.png"),

          description:
            "I use semantical HTML, libraries CSS, animations, api calls with async/await and fetch functions and data saving in the localstorage",
          progress: [
            {
              name: "HTML",
              value: 70,
            },
            {
              name: "CSS",
              value: 60,
            },
            {
              name: "JavaScript",
              value: 50,
            },
          ],
        },
        {
          name: "Vue JS",

          imgSrc: require("../assets/vue.png"),
          figcaption: "Vue JS",
          description:
            "I'm learning this technology for upgrade my knowledges in JavaScript",
          progress: [{ name: "Vue js", value: 30 }],
        },
        {
          name: "PHP",

          imgSrc: require("../assets/php.png"),
          figcaption: "PHP",
          description:
            "I was learned this technology for Backend, since it is very similar to Javascript in it's syntax",
          progress: [{ name: "PHP", value: 30 }],
        },
        {
          name: "Node Js",

          imgSrc: require("../assets/node.png"),
          figcaption: "Node Js",
          description:
            "I'm learning this technology at the same time as Vue Js, but i just use it for install packages and create projects",
          progress: [{ name: "Node Js", value: 10 }],
        },
        {
          name: "GNU/Linux",

          imgSrc: require("../assets/linux.png"),
          figcaption: "GNU/Linux",
          description:
            "Since 2 years ago, i was using linux for local programming because is faster creating projects, installing apps and you don't have to worry about updates",
          progress: [{ name: "GNU/Linux", value: 35 }],
        },
        {
          name: "Git",

          imgSrc: require("../assets/git.png"),
          figcaption:"Git",
          description:
            "I don't know a lot of this technology because it have many functions and sometimes it's difficult to update projects",
          progress: [{ name: "Git", value: 20 }],
        },
        {
          name: "SQL",

          imgSrc: require("../assets/sql.png"),
          figcaption: "SQL",
          description:
            "I've done only one project where i manage a database, i just know the basics methods and the integration with PHP",
          progress: [{ name: "SQL", value: 10 }],
        },
      ],
      isActive: false,
    };
  },
};
</script>
