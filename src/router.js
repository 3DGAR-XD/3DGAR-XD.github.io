import {createRouter, createWebHistory} from "vue-router"
import HomeApp from "./components/HomeApp"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import MyProjects from "./components/MyProjects"
import PlayGround from "./components/PlayGround"
import ContactMe from "./components/ContactMe"
import NotFound from "./components/NotFound"
export const router = createRouter({
	history: createWebHistory(),
	routes:
	[
		{ path: '/', component: HomeApp, name:"home"},
		{ path: '/about', component: AboutMe, name:"about"},
		{ path: '/skills', component: Skills, name:"skills" },
		{ path: '/projects', component: MyProjects, name:"projects"},
		{ path: '/playground', component: PlayGround, name:"playground"},
		{ path: '/contact', component: ContactMe, name:"contact"},
		{ path: '/:pathName(.*)', component: NotFound, name:"not-found"},
	]
})