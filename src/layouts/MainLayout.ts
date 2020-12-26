import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    name: 'MainLayout',

    data() {
        return {
            drawer: true,
            state: true,
            navigations: [
                { icon: 'home', text: 'Home' },
                { icon: 'timeline', text: 'Experience' },
                { icon: 'code', text: 'Programming Languages' },
                { icon: 'integration_instructions', text: 'Frameworks' },
                { icon: 'design_services', text: 'Services' },
                { icon: 'business_center', text: 'Portfolio' },
            ],
        }
    },

    methods: {}
});