import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';


import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';
import Paginator from 'primevue/paginator';


import "primevue/resources/themes/lara-dark-green/theme.css";

const pinia = createPinia();

const app = createApp(App);


app.use(pinia);
app.use(PrimeVue);

app.component("FloatLabel", FloatLabel);
app.component("InputText", InputText);
app.component("RadioButton", RadioButton);
app.component("Button", Button);
app.component("Paginator", Paginator);

app.mount('#app')



/*
primevue/resources/themes/md-light-indigo/theme.css
primevue/resources/themes/md-light-deeppurple/theme.css
primevue/resources/themes/md-dark-indigo/theme.css
primevue/resources/themes/md-dark-deeppurple/theme.css
primevue/resources/themes/mdc-light-indigo/theme.css
primevue/resources/themes/mdc-light-deeppurple/theme.css
primevue/resources/themes/mdc-dark-indigo/theme.css
primevue/resources/themes/mdc-dark-deeppurple/theme.css
primevue/resources/themes/aura-light-blue/theme.css
primevue/resources/themes/aura-light-indigo/theme.css
primevue/resources/themes/aura-light-purple/theme.css
primevue/resources/themes/aura-light-teal/theme.css
primevue/resources/themes/aura-light-green/theme.css
primevue/resources/themes/aura-light-amber/theme.css
primevue/resources/themes/aura-light-cyan/theme.css
primevue/resources/themes/aura-light-pink/theme.css
primevue/resources/themes/aura-light-lime/theme.css
primevue/resources/themes/aura-light-noir/theme.css
primevue/resources/themes/aura-dark-blue/theme.css
primevue/resources/themes/aura-dark-indigo/theme.css
primevue/resources/themes/aura-dark-purple/theme.css
primevue/resources/themes/aura-dark-teal/theme.css
primevue/resources/themes/aura-dark-green/theme.css
primevue/resources/themes/aura-dark-amber/theme.css
primevue/resources/themes/aura-dark-cyan/theme.css
primevue/resources/themes/aura-dark-pink/theme.css
primevue/resources/themes/aura-dark-lime/theme.css
primevue/resources/themes/aura-dark-noir/theme.css
primevue/resources/themes/lara-light-blue/theme.css
primevue/resources/themes/lara-light-indigo/theme.css
primevue/resources/themes/lara-light-purple/theme.css
primevue/resources/themes/lara-light-teal/theme.css
primevue/resources/themes/lara-light-green/theme.css
primevue/resources/themes/lara-light-amber/theme.css
primevue/resources/themes/lara-light-cyan/theme.css
primevue/resources/themes/lara-light-pink/theme.css
primevue/resources/themes/lara-dark-blue/theme.css
primevue/resources/themes/lara-dark-indigo/theme.css
primevue/resources/themes/lara-dark-purple/theme.css
primevue/resources/themes/lara-dark-teal/theme.css
primevue/resources/themes/lara-dark-green/theme.css
primevue/resources/themes/lara-dark-amber/theme.css
primevue/resources/themes/lara-dark-cyan/theme.css
primevue/resources/themes/lara-dark-pink/theme.css 
*/