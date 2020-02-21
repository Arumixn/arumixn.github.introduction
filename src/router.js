import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './Home.vue';
import About from './About.vue';
import Portfolios from './Portfolios.vue';
import Booking from './Booking.vue';
import PortfolioList from './PortfolioList';
import PortfolioDetail from './PortfolioDetail';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        { path: 'home', component: Home},
        { path: 'about', component: About},
        { path: 'booking', component: Booking},
        {
          path: 'portfolios',
          component: Portfolios,
          children: [
            {path: '', component: PortfolioList},
            {path: ':id', component: PortfolioDetail},
          ],
        },
        { path:'*', redirect:'portfolios' },
      ],
    }
  ],
})