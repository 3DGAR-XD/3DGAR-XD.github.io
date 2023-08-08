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
  <p class="m-4 m-sm-5 text-center p-3 position-relative ts-black" :contentEditable="contentEditable" @input="checkText">
    <span v-if="(contentEditable=== true)" class="now-editable position-absolute text-success text-start ts-black" contenteditable="false">Now you can edit!</span>
    I am a web developer who is entering the world of development, with a wide capacity for learning and ideas to implement in different projects. I have a lot to do and learn, for keep improving in this world
    <span class="editable position-absolute text-white" contenteditable="false" @click="edit">edit</span>
  </p>
  <span class="my-5 text-center ts-black">Actually i'm learning Vue, and improving SQL and Backend</span>

  <button type="button" class="ts-black align-self-end my-3 p-1 rounded-pill border-0 text-white things" data-bs-toggle="modal" data-bs-target="#animeModal" :disabled="!enableButton">
    This is a useless list of things i like
</button>
<!-- anime y manga -->
<div class="modal fade" id="animeModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1" data-bs-theme="dark">
  <div class="modal-dialog modal-dialog-scrollable d-flex align-items-center">
    <div class="modal-content">
      <div class="modal-header">
        Anime & Manga
      </div>
      <div class="modal-body">
        <div class="d-flex flex-column">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/g4wBVvB-2qU?controls=0&amp;start=24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="w-100" id="yt-player"></iframe>
          <p>The anime genres I watch are varied, among my favorites are No Game No Life, Darling in the Franxx, Re:Zero and Bocchi the Rock!</p>
        </div>
      </div>
      <div class="modal-footer flex-column align-items-stretch">
          <button class="btn btn-primary" data-bs-target="#gamesModal" data-bs-toggle="modal">Videogames</button>
          <button class="btn btn-primary" data-bs-target="#musicModal" data-bs-toggle="modal">Music</button>
          <button class="btn btn-primary" data-bs-target="#cookModal" data-bs-toggle="modal">Cooking</button>
          <button class="btn btn-primary" data-bs-target="#factsModal" data-bs-toggle="modal">Tecnology Facts</button>
        <p class="small text-end">(Click anywhere for exit)</p>
      </div>
    </div>
  </div>
</div>

<!-- videojuegos -->
<div class="modal fade" id="gamesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
  <div class="modal-dialog modal-dialog-scrollable d-flex align-items-center">
    <div class="modal-content">
      <div class="modal-header">
        VideoGames
      </div>
      <div class="modal-body d-flex flex-column align-items-center">
        <img src="../assets/games.png" alt="">
        <p>I can hardly play video games anymore because of my job, but I like rhythm games, like Muse Dash and Osu!</p>
      </div>
      <div class="modal-footer flex-column align-items-stretch">
        <button class="btn btn-primary" data-bs-target="#animeModal" data-bs-toggle="modal">Anime</button>
        <button class="btn btn-primary" data-bs-target="#musicModal" data-bs-toggle="modal">Music</button>
        <button class="btn btn-primary" data-bs-target="#cookModal" data-bs-toggle="modal">Cooking</button>
        <button class="btn btn-primary" data-bs-target="#factsModal" data-bs-toggle="modal">Tecnology Facts</button>
        <p class="small text-end">(Click anywhere for exit)</p>
      </div>
    </div>
  </div>
</div>
<!-- musica -->
<div class="modal fade" id="musicModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        Music
      </div>
      <div class="modal-body">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4qfUCOBQ40ABNiMRpFPuKW?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7bl3zzrbaVtFneoB1Xal8K?utm_source=generator&teme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/43ylWdM7CZVwsdcNcqFVCG?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <p>I really like listening to music, I usually listen to Konomi Suzuki, Geoxor, Xplosn and Nanahira.</p>
      </div>
      <div class="modal-footer flex-column align-items-stretch">
        <button class="btn btn-primary" data-bs-target="#animeModal" data-bs-toggle="modal">Anime</button>
        <button class="btn btn-primary" data-bs-target="#gamesModal" data-bs-toggle="modal">Videogames</button>
        <button class="btn btn-primary" data-bs-target="#cookModal" data-bs-toggle="modal">Cooking</button>
        <button class="btn btn-primary" data-bs-target="#factsModal" data-bs-toggle="modal">Tecnology Facts</button>
        <p class="small text-end">(Click anywhere for exit)</p>
      </div>
    </div>
  </div>
</div>
<!-- comida y cocina-->
<div class="modal fade" id="cookModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
  <div class="modal-dialog modal-dialog-scrollable d-flex align-items-center">
    <div class="modal-content">
      <div class="modal-header">
        Cooking
      </div>
      <div class="modal-body d-flex flex-column align-items-center">
        <img src="../assets/cooking.png" alt="" class="">
        <p>I like to cook, I am usually the one who cooks at home and I like having to make recipes that I find online.</p>
      </div>
      <div class="modal-footer flex-column align-items-stretch">
        <button class="btn btn-primary" data-bs-target="#animeModal" data-bs-toggle="modal">Anime</button>
        <button class="btn btn-primary" data-bs-target="#gamesModal" data-bs-toggle="modal">Videogames</button>
        <button class="btn btn-primary" data-bs-target="#musicModal" data-bs-toggle="modal">Music</button>
        <button class="btn btn-primary" data-bs-target="#factsModal" data-bs-toggle="modal">Tecnology Facts</button>
        <p class="small text-end">(Click anywhere for exit)</p>
      </div>
    </div>
  </div>
</div>
<!-- investigacion -->
<div class="modal fade" id="factsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
  <div class="modal-dialog modal-dialog-scrollable d-flex align-items-center">
    <div class="modal-content">
      <div class="modal-header">
        Technology Facts
      </div>
      <div class="modal-body d-flex flex-column align-items-center">
        <img src="../assets/facts.png" alt="">
        <p>I like to be informed about things like tools to improve productivity, new phone releases, operating system updates, and new work frameworks.</p>
      </div>
      <div class="modal-footer flex-column align-items-stretch">
        <button class="btn btn-primary" data-bs-target="#animeModal" data-bs-toggle="modal">Anime</button>
        <button class="btn btn-primary" data-bs-target="#gamesModal" data-bs-toggle="modal">Videogames</button>
        <button class="btn btn-primary" data-bs-target="#musicModal" data-bs-toggle="modal">Music</button>
        <button class="btn btn-primary" data-bs-target="#cookModal" data-bs-toggle="modal">Cooking</button>
        <p class="small text-end">(Click anywhere for exit)</p>
      </div>
    </div>
  </div>
</div>

  <router-link class="align-self-center p-3 rounded text-white button text-decoration-none" :to="{name:'skills'}">View Skills</router-link>
</div>
</template>

<style scoped>
  .container-fluid {
    background: #1f1f1f url("../assets/background2.png") no-repeat center;
  }
.things{
  font-size: .7em;
}
nav{
  z-index: 2;
}
p, p+span, button{
    z-index: 1;
}
button{
  background-color: #ffffff00;
}
.editable, .now-editable{
  font-size: .6em;
  right: 1em;
  bottom: 0;
  text-decoration: underline;
  color: #00000065;
  cursor: pointer;
}
.now-editable{
  left: 1em;
  text-decoration: none;

}
.modal-body img{
  width: 70%;
}
</style>

<script>
export default {
  beforeCreate() {document.title = "3DGAR XD - About"},
  name: "AboutMe",
  computed:{
    enableButton(){
      return this.pContent === '3DGAR XD'
    }
  },
  data(){
    return{
      contentEditable:false,
      isActive:false,
      pContent:"",
    }
  },
  methods:{openDropdown(){this.isActive = !this.isActive},

          edit(){this.contentEditable = true},

          checkText(e){
            this.pContent = e.target.textContent.slice(17, -4).trim()
          },
}}

</script>
