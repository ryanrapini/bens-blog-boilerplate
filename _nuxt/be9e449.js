(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{261:function(t,e,o){var content=o(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("233601b2",content,!0,{sourceMap:!1})},262:function(t,e,o){"use strict";o.r(e);var n={name:"BlogPostPreview",props:{post:{type:Object,required:!0}},computed:{formatPublishDate:function(){return new Date(this.post.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}}},l=(o(263),o(9)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"blog-post"},[o("time",{staticClass:"blog-post__time"},[t._v(t._s(t.formatPublishDate))]),t._v(" "),o("h2",{staticClass:"blog-post__title"},[o("a",{staticClass:"blog-post__link",attrs:{href:t.post.path}},[t._v(t._s(t.post.title))])]),t._v(" "),t.post.excerpt?o("p",{staticClass:"blog-post__excerpt"},[t._v(t._s(t.post.excerpt))]):t._e(),t._v(" "),o("nuxt-link",{staticClass:"button blog-post__button ",attrs:{to:t.post.path}},[t._v("\n    Read More >\n  ")])],1)}),[],!1,null,"74bd2745",null);e.default=component.exports},263:function(t,e,o){"use strict";o(261)},264:function(t,e,o){var n=o(23)(!1);n.push([t.i,'.nuxt-content h1[data-v-74bd2745],.nuxt-content h2[data-v-74bd2745]{color:#6b26c5}.blog-post[data-v-74bd2745]{margin-bottom:2.5rem}.blog-post__button[data-v-74bd2745]{display:inline-block}.blog-post__excerpt[data-v-74bd2745]{margin-top:0;margin-bottom:.75rem;font-size:1.2rem}.blog-post__link[data-v-74bd2745]{font-weight:700;color:#2c3e50}.blog-post__link[data-v-74bd2745]:hover{text-decoration:underline}.blog-post__time[data-v-74bd2745]{font-family:"Poppins";font-weight:500}.blog-post__title[data-v-74bd2745]{margin-top:.5rem;margin-bottom:.75rem;font-weight:700;font-family:Rubik,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:1.5rem}.button[data-v-74bd2745]{font-family:"Poppins";font-weight:500;border:1px solid #6b26c5;border-radius:4px;color:#6b26c5;font-size:.9rem;padding:.3rem .6rem;text-transform:uppercase;box-shadow:0 0;transition:background-color .2s ease-in,color .2s ease-in}.button[data-v-74bd2745]:hover{color:#fff;text-decoration:none;background-color:#6b26c5}.tag-list[data-v-74bd2745]{list-style:none;padding-left:0;display:flex;margin-bottom:25px}.tag-list__item[data-v-74bd2745]{margin-left:10px}.tag-list__item[data-v-74bd2745]:first-child{margin-left:0}.tag-list__btn[data-v-74bd2745]{padding:5px;font-size:.9rem;background-color:#fff}',""]),t.exports=n},265:function(t,e,o){var content=o(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("72778111",content,!0,{sourceMap:!1})},267:function(t,e,o){"use strict";o(265)},268:function(t,e,o){var n=o(23)(!1);n.push([t.i,'.nuxt-content h1[data-v-41146d78],.nuxt-content h2[data-v-41146d78]{color:#6b26c5}.blog-list[data-v-41146d78]{padding:0;margin:0}.blog-list-subtitle[data-v-41146d78]{font-size:1.875rem;border-bottom:1px solid #ebedf0;margin-bottom:.75rem;padding-bottom:.25rem}.blog-list-subtitle[data-v-41146d78],.blog-list-title[data-v-41146d78]{font-weight:700;font-family:Rubik,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}.blog-list-title[data-v-41146d78]{font-size:2.25rem;margin-bottom:1rem}.blog-list__container[data-v-41146d78]{margin-top:2rem}.blog-list__header[data-v-41146d78]{display:flex;align-items:center}.blog-list__item[data-v-41146d78]{list-style-type:none}.button--load-more[data-v-41146d78]{background-color:#2af;border-radius:4px;border-color:#2af;color:#fff;font-size:1rem;padding:.5rem .75rem;text-transform:uppercase;font-weight:500;box-shadow:0 0;cursor:pointer;transition:background-color .2s ease-in,color .2s ease-in}.button--load-more[data-v-41146d78]:hover{background-color:#fff;border:1px solid #2af;border-radius:4px;color:#2af}.clear-filter-btn[data-v-41146d78]{align-self:center;margin-left:20px}.filtered-heading[data-v-41146d78]{display:flex}.pagination[data-v-41146d78]{text-align:center}.tooltip-ex[data-v-41146d78]{position:relative;cursor:help;margin-right:20px;display:inline-block;float:left}.tooltip-ex-bottom[data-v-41146d78]{top:135%;left:50%;margin-left:-60px}.tooltip-ex-text[data-v-41146d78]{visibility:hidden;position:absolute;width:300px;background-color:#555;color:#fff;text-align:center;padding:20px;border-radius:6px;z-index:1;opacity:0;transition:opacity .6s}.tooltip-ex:hover .tooltip-ex-text[data-v-41146d78]{visibility:visible;opacity:1}',""]),t.exports=n},271:function(t,e,o){"use strict";o.r(e);o(49),o(57),o(26);var n={name:"BlogPostList",components:{BlogPostPreview:o(262).default},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{displayRange:{end:4},selectedTag:""}},computed:{filteredList:function(){var t=this,e=this.$options.propsData;return!!(e&&e.list&&e.list.length>0)&&e.list.filter((function(e){var o=e.path.includes("/blog/"),n=new Date(e.date)<=new Date,l=e.tags&&e.tags.includes(t.selectedTag);if(t.selectedTag?o&&n&&l:o&&n)return e})).sort((function(a,b){return new Date(b.date)-new Date(a.date)}))}},methods:{loadMore:function(){this.displayRange.end+=5},updateSelectedTag:function(t){this.selectedTag=t}}},l=(o(267),o(9)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog-list__container"},[t._m(0),t._v(" "),o("h2",{staticClass:"blog-list-subtitle"},[t._v("Most Recent")]),t._v(" "),o("ul",{staticClass:"blog-list"},t._l(t.filteredList,(function(e,n){return o("li",{key:"blog-post-"+n,staticClass:"blog-list__item"},[o("BlogPostPreview",{directives:[{name:"show",rawName:"v-show",value:n<=t.displayRange.end,expression:"index <= displayRange.end"}],attrs:{post:e},on:{updateSelectedTag:t.updateSelectedTag}})],1)})),0),t._v(" "),t.displayRange.end<=t.filteredList.length?o("div",{staticClass:"pagination"},[o("button",{staticClass:"button--load-more",attrs:{type:"button"},on:{click:t.loadMore}},[t._v("\n      Load More\n    ")])]):t._e()])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog-list__header"},[o("h1",{staticClass:"blog-list-title"},[t._v("Blog Posts")])])}],!1,null,"41146d78",null);e.default=component.exports;installComponents(component,{BlogPostPreview:o(262).default})}}]);