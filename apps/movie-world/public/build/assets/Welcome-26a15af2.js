import{f as r,a,u as o,b as m,c as l,w as s,F as c,g as d,o as e,X as g,d as n,l as u}from"./app-3781b57f.js";import f from"./Dashboard-742d2726.js";import"./AuthenticatedLayout-d9a70520.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Movie-223e0382.js";const h={key:0,class:"sm:fixed sm:top-0 sm:right-0 p-6 text-right"},b={__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String,Dashboard:f},setup(i){return(t,p)=>(e(),r(c,null,[a(o(g),{title:"Welcome"}),m("div",null,[i.canLogin?(e(),r("div",h,[t.$page.props.auth.user?(e(),l(o(u),{key:0,href:t.route("dashboard"),class:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:s(()=>[n("Dashboard")]),_:1},8,["href"])):(e(),r(c,{key:1},[a(o(u),{href:t.route("login"),class:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:s(()=>[n("Log in")]),_:1},8,["href"]),i.canRegister?(e(),l(o(u),{key:0,href:t.route("register"),class:"ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:s(()=>[n("Register")]),_:1},8,["href"])):d("",!0)],64))])):d("",!0),a(f)])],64))}};export{b as default};