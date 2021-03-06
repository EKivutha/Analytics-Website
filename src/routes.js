import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import { AnalyticsHome } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
//import Header from './pages/header';
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import UsersOverview from "./components/blog/UsersOverview";
import UsersByDevice from "./components/blog/UsersByDevice";
import Discussions from "./components/blog/Discussions";
import ProductsView from "./components/blog/productview.js";
import CheckedInDays from "./components/blog/checkedindays.js";
import SalesTargetvsMade from "./components/blog/sales.js";
import VisitTargetsvsMade from "./components/blog/visits.js";
import ActiveCustomervsTerritory from "./components/blog/customerterritory.js";
import NewStockvsProduct from "./components/blog/newstockvsproduct.js";
import RemovedStockvsProduct from "./components/blog/removedstockvsproduct.js";
import Notifications from "./components/layout/MainNavbar/NavbarNav/Notifications.js";
import AssignedProductsvsStock from "./components/blog/assignedproductstocksvsagent.js";
//import Footer from './pages/footer.js';
import Service from './pages/service.js';
import Servicea from './pages/Service1.js';
import Serviceb from './pages/service2.js';
import SignIn from './pages/signin.js';
import SignUp from './pages/signup.js';
import Terms from './pages/terms.js';
import About from './pages/about.js';
import Feedback from './pages/feedback.js';

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/users-overview",
    layout: DefaultLayout,
    component: UsersOverview
  },
  {
    path: "/productsview",
    layout: DefaultLayout,
    component:ProductsView
  },
  {
    path: "/signup",
    layout: AnalyticsHome,
    component:SignUp
  },
  {
    path: "/notifications",
    layout: AnalyticsHome,
    component:Notifications
  },
  {
    path: "/terms",
    layout: AnalyticsHome,
    component:Terms
  },

  {
    path: "/checked-in-days",
    layout: DefaultLayout,
    component: CheckedInDays
  },
  {
    path: "/sales-target ",
    layout: DefaultLayout,
    component: SalesTargetvsMade
  },
  {
    path: "/visit-target",
    layout: DefaultLayout,
    component: VisitTargetsvsMade
  },
  {
    path: "/active-customer",
    layout: DefaultLayout,
    component: ActiveCustomervsTerritory
  },
  {
    path: "/stock",
    layout: DefaultLayout,
    component: NewStockvsProduct
  },
  {
    path: "/removed-stock",
    layout: DefaultLayout,
    component: RemovedStockvsProduct
  },
  {
    path: "/assigned-product",
    layout: DefaultLayout,
    component: AssignedProductsvsStock
  },
  {
    path: "/user-device",
    layout: DefaultLayout,
    component: UsersByDevice
  },
  {
    path: "/home",
    layout: AnalyticsHome,
    component: Home
  },
  {
    path: "/contact",
    layout: AnalyticsHome,
    component: Contact
  },
  {
    path: "/service",
    layout: AnalyticsHome,
    component: Service
  },
  {
    path: "/servicea",
    layout: AnalyticsHome,
    component: Servicea
  },{
    path: "/serviceb",
    layout: AnalyticsHome,
    component: Serviceb
  },
  {
    path: "/signin",
    layout: AnalyticsHome,
    component: SignIn
  },
  {
    path: "/feedback",
    layout: AnalyticsHome,
    component: Feedback
  },
  {
    path: "/about",
    layout: AnalyticsHome,
    component: About
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/discussions",
    layout: DefaultLayout,
    component: Discussions
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
