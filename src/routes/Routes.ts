import HomePage from "@/views/HomePage.vue";
import GenerateModel from "@/views/GenerateModel.vue";

export const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/generate',
        component: GenerateModel
    }
]