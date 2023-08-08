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
    <hgroup class="m-5">
      <h1 class="my-3 text-end fs-1"> I'M 3DGAR XD <br>
        (Edgar Luna)
      </h1>
      <h2 class="text-end m-4">Jr Web Developer</h2>
    </hgroup>
    <a target="_blank" href="https://drive.google.com/file/d/1ytP-4M9VJiJmHr-yrM49HCwwMRIks02Y/view?pli=1" rel="noopener noreferrer" class="text-decoration-none button p-3 rounded fw-600 text-white align-self-center">Download CV</a>
    <ul class="d-flex flex-row justify-content-evenly my-5 p-0 some-skills">
      <li class="border p-2 rounded bg-dark text-white">Javascript</li>
      <li class="border p-2 rounded bg-dark text-white">Vue Js</li>
      <li class="border p-2 rounded bg-dark text-white">PHP</li>
      <li class="border p-2 rounded bg-dark text-white">Linux</li>
    </ul>
    <span class="fs-6 fixed-bottom text-end m-2">Fun fact: {{ facts }}
    </span>
  </div>
</template>

<style scoped>
  .container-fluid {
    background: #1f1f1f url("../assets/background.png") no-repeat center;
  }
  .some-skills li{
    cursor: pointer;
  }
</style>

<script>
export default {
  beforeCreate(){document.title="3DGAR XD - Home"},
  name: "HomeApp",
  computed:{
    facts(){
      return this.likes[ Math.floor(Math.random() * this.likes.length)]
    },
  },
  data(){
    return{
      isActive:false,
      likes: [
        "I like anime :3",
        "I like Jpop, EDM, Vocaloid and Denpa music",
        "I want to develop games",
        "I prefer the documentation before videos",
        "I doing this...",
        "...while listening to Xplosn",
        "...and take me 2 hours 😤",
        "THERE IS A REASON - Konomi Suzuki 💖",
        "I took me 2 hours to do this",
      ]
    }
  },
  methods:{openDropdown(){this.isActive = !this.isActive},
  }
}
</script>