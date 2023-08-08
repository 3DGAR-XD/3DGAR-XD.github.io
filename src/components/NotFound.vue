<template>
	<div class="container-fluid vh-100 vw-100 py-4 d-flex flex-column">
    <div class="d-flex align-self-center">
      <span class="w-100 fw-900 fs-2 align-self-center">~エドガル~</span>
    </div>
		<div class="text-center w-100 h-100 d-flex flex-column justify-content-center not-found flex-md-row">
			<img src="../assets/404.png" alt="" class="align-self-center py-3 p-md-0 col-md-6 col-3">
		<div class="align-self-center ts-black">
				<h1>What are U doing here???</h1>
					<span>these are the places you can go</span>
					<ul class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 align-content-around align-content-md-center w-100 justify-content-center gap-4 align-items-center row-cols-custom">
						<li class="border-md-0 text-center border rounded-pill p-2 col"><router-link class="text-decoration-none text-white link" :to="{name:'home'}">Home</router-link>
						</li>
						<li class="border-md-0 text-center border rounded-pill p-2 col"><router-link class="text-decoration-none text-white link" :to="{name:'about'}">About Me</router-link>
						</li>
						<li class="border-md-0 text-center border rounded-pill p-2 col"><router-link class="text-decoration-none text-white link" :to="{name:'projects'}">Projects</router-link>
						</li>
						<li class="border-md-0 text-center border rounded-pill p-2 col"><router-link class="text-decoration-none text-white link" :to="{name:'playground'}">Small projects</router-link>
						</li>
						<li class="border-md-0 text-center border rounded-pill p-2 col"><router-link class="text-decoration-none text-white link" :to="{name:'contact'}">Contact Me</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
</template>

<style scoped>
  .container-fluid {
    background: #1f1f1f url("../assets/background5.png") no-repeat center;
  }
img{
	width:30%;
}
li{
	background:url("../assets/bg-img.png")no-repeat center;
	background-size: cover;
	transition: .2s;
	position: relative;
}
.link{
	z-index: 2;
	width: 100%;
}
li:hover{
	transform: scale(.95);
}
li::before{
	transition: .2s;
	z-index: 1;
}
li:hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cambia el valor de 0.5 para ajustar la opacidad */
  z-index: 1;
	border-radius: inherit;
}
@media (max-width:768px) and (max-height:900px) {
	img{
		width: 30%;
	}
	.row-cols-custom li{
		width: 33.333333333%;
	}
}
</style>

<script>
export default{
	name:"NotFound",
	beforeCreate(){document.title="!ERR404*&%#@"}
}
</script>