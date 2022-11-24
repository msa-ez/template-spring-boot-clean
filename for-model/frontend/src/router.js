path: frontend/src
---

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


{{#boundedContexts}}
    {{#aggregates}}
import {{namePascalCase}}Manager from "./components/{{namePascalCase}}Manager"
    {{/aggregates}}

    {{#viewes}}
import {{namePascalCase}} from "./components/{{namePascalCase}}"
    {{/viewes}}
{{/boundedContexts}}
export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
       {{#boundedContexts}}
        {{#aggregates}}
            {
                path: '/{{namePlural}}',
                name: '{{namePascalCase}}Manager',
                component: {{namePascalCase}}Manager
            },
        {{/aggregates}}

        {{#viewes}}
            {
                path: '/{{namePlural}}',
                name: '{{namePascalCase}}',
                component: {{namePascalCase}}
            },
        {{/viewes}}
       {{/boundedContexts}}


    ]
})
