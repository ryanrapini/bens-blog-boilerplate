(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{261:function(t,o,e){var content=e(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(24).default)("233601b2",content,!0,{sourceMap:!1})},262:function(t,o,e){"use strict";e.r(o);var n={name:"BlogPostPreview",props:{post:{type:Object,required:!0}},computed:{formatPublishDate:function(){return new Date(this.post.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}}},r=(e(263),e(9)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"blog-post"},[e("time",{staticClass:"blog-post__time"},[t._v(t._s(t.formatPublishDate))]),t._v(" "),e("h2",{staticClass:"blog-post__title"},[e("a",{staticClass:"blog-post__link",attrs:{href:t.post.path}},[t._v(t._s(t.post.title))])]),t._v(" "),t.post.excerpt?e("p",{staticClass:"blog-post__excerpt"},[t._v(t._s(t.post.excerpt))]):t._e(),t._v(" "),e("nuxt-link",{staticClass:"button blog-post__button ",attrs:{to:t.post.path}},[t._v("\n    Read More >\n  ")])],1)}),[],!1,null,"74bd2745",null);o.default=component.exports},263:function(t,o,e){"use strict";e(261)},264:function(t,o,e){var n=e(23)(!1);n.push([t.i,'.nuxt-content h1[data-v-74bd2745],.nuxt-content h2[data-v-74bd2745]{color:#6b26c5}.blog-post[data-v-74bd2745]{margin-bottom:2.5rem}.blog-post__button[data-v-74bd2745]{display:inline-block}.blog-post__excerpt[data-v-74bd2745]{margin-top:0;margin-bottom:.75rem;font-size:1.2rem}.blog-post__link[data-v-74bd2745]{font-weight:700;color:#2c3e50}.blog-post__link[data-v-74bd2745]:hover{text-decoration:underline}.blog-post__time[data-v-74bd2745]{font-family:"Poppins";font-weight:500}.blog-post__title[data-v-74bd2745]{margin-top:.5rem;margin-bottom:.75rem;font-weight:700;font-family:Rubik,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:1.5rem}.button[data-v-74bd2745]{font-family:"Poppins";font-weight:500;border:1px solid #6b26c5;border-radius:4px;color:#6b26c5;font-size:.9rem;padding:.3rem .6rem;text-transform:uppercase;box-shadow:0 0;transition:background-color .2s ease-in,color .2s ease-in}.button[data-v-74bd2745]:hover{color:#fff;text-decoration:none;background-color:#6b26c5}.tag-list[data-v-74bd2745]{list-style:none;padding-left:0;display:flex;margin-bottom:25px}.tag-list__item[data-v-74bd2745]{margin-left:10px}.tag-list__item[data-v-74bd2745]:first-child{margin-left:0}.tag-list__btn[data-v-74bd2745]{padding:5px;font-size:.9rem;background-color:#fff}',""]),t.exports=n}}]);