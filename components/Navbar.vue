<template>
    <div class="layout-topbar">
        <a class="menu-button" @click="$emit('menubutton-click')">
            <i class="pi pi-bars"></i>
        </a>
        <router-link to="/" class="logo">
            <img alt="logo" src="../assets/primevue-logo.png">
        </router-link>
        <ul ref="topbarMenu" class="topbar-menu">
            <li><a @click="logout">Logout</a></li>
            <li class="topbar-submenu topbar-resources-submenu">
                <a tabindex="0" @click="toggleMenu($event, 0)">{{ loggedInUser.name }}</a>
                <transition name="p-connected-overlay" @enter="onMenuEnter">
                    <ul v-show="activeMenuIndex === 2">
                        <li><a @click="logout">Logout</a></li>
                    </ul>
                </transition>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(['loggedInUser'])
    },
    outsideClickListener: null,
    darkDemoStyle: null,
    watch: {
        $route() {
            this.activeMenuIndex = null;
        }
    },
    props: {
        theme: null
    },
    data() {
        return {
            activeMenuIndex: null,
            logoMap: {
                'bootstrap4-light-blue': 'bootstrap4-light-blue.svg',
                'bootstrap4-light-purple': 'bootstrap4-light-purple.svg',
                'bootstrap4-dark-blue': 'bootstrap4-dark-blue.svg',
                'bootstrap4-dark-purple': 'bootstrap4-dark-purple.svg',
                'md-light-indigo': 'md-light-indigo.svg',
                'md-light-deeppurple': 'md-light-deeppurple.svg',
                'md-dark-indigo': 'md-dark-indigo.svg',
                'md-dark-deeppurple': 'md-dark-deeppurple.svg',
                'mdc-light-indigo': 'md-light-indigo.svg',
                'mdc-light-deeppurple': 'md-light-deeppurple.svg',
                'mdc-dark-indigo': 'md-dark-indigo.svg',
                'mdc-dark-deeppurple': 'md-dark-deeppurple.svg',
                'saga-blue': 'saga-blue.png',
                'saga-green': 'saga-green.png',
                'saga-orange': 'saga-orange.png',
                'saga-purple': 'saga-purple.png',
                'vela-blue': 'vela-blue.png',
                'vela-green': 'vela-green.png',
                'vela-orange': 'vela-orange.png',
                'vela-purple': 'vela-purple.png',
                'arya-blue': 'arya-blue.png',
                'arya-green': 'arya-green.png',
                'arya-orange': 'arya-orange.png',
                'arya-purple': 'arya-purple.png',
                'nova': 'nova.png',
                'nova-alt': 'nova-alt.png',
                'nova-accent': 'nova-accent.png',
                'nova-vue': 'nova-vue.png',
                'luna-blue': 'luna-blue.png',
                'luna-green': 'luna-green.png',
                'luna-pink': 'luna-pink.png',
                'luna-amber': 'luna-amber.png',
                'rhea': 'rhea.png'
            }
        }
    },
    methods: {
        toggleMenu(event, index) {
            this.activeMenuIndex = (this.activeMenuIndex === index) ? null : index;
            event.preventDefault();
        },
        onMenuEnter() {
            this.bindOutsideClickListener();
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if ((this.activeMenuIndex != null && this.isOutsideTopbarMenuClicked(event))) {
                        this.activeMenuIndex = null;
                        this.unbindOutsideClickListener();
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        isOutsideTopbarMenuClicked(event) {
            return !(this.$refs.topbarMenu.isSameNode(event.target) || this.$refs.topbarMenu.contains(event.target));
        },
        async logout() {
            await this.$auth.logout();
            this.$router.push('/login')
        },
    }
}
</script>

<style>
.layout-topbar {
    background-color: var(--surface-a);
    background-color: #ffffff;
    padding: 0;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 997;
    -webkit-box-shadow: 0 0 4px rgba(0,0,0,.25);
    box-shadow: 0 0 4px rgba(0,0,0,.25);
    border-bottom: 1px solid var(--surface-d);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 35px;
}
.layout-topbar .menu-button {
    display: none;
    color: var(--text-color);
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    -webkit-transition: background-color .2s;
    transition: background-color .2s;
    cursor: pointer;
}
a {
    text-decoration: none;
}
.layout-topbar .logo img {
    width: 180px;
}
.layout-topbar .topbar-menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100%;
    margin-left: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.layout-topbar .topbar-menu>li {
    height: 70px;
    line-height: 70px;
}
.layout-topbar .topbar-menu>li.topbar-submenu {
    position: relative;
}
.layout-topbar .topbar-menu>li.topbar-submenu {
    position: relative;
}
.layout-topbar .topbar-menu>li>a {
    text-decoration: none;
    color: var(--text-color);
    min-width: 120px;
    font-size: 16px;
    display: block;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    line-height: 68px;
    border-bottom: 2px solid transparent;
    -webkit-transition: border-bottom-color .2s;
    transition: border-bottom-color .2s;
    cursor: pointer;
}
.layout-topbar .topbar-menu>li.topbar-submenu>ul {
    position: absolute;
    -webkit-transform-origin: top;
    transform-origin: top;
    top: 70px;
    right: 0;
    width: 275px;
    max-height: 400px;
    background-color: var(--surface-f);
    -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    overflow: auto;
    list-style-type: none;
    padding: 1rem;
    margin: 0;
    border-radius: 3px;
}
.layout-topbar .topbar-menu>li.topbar-submenu>ul>li.topbar-submenu-header:first-child {
    padding-top: 1rem;
}
.layout-topbar .topbar-menu>li.topbar-submenu>ul>li.topbar-submenu-header {
    display: block;
    color: var(--text-color-secondary);
    font-weight: 600;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 1.5rem 0 1rem 0;
    font-size: .857rem;
    text-transform: uppercase;
}
.layout-topbar .topbar-menu>li.topbar-submenu>ul>li {
    line-height: 1;
}
.layout-topbar .topbar-menu>li.topbar-submenu>ul a {
    text-decoration: none;
    color: var(--text-color);
    padding: .5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 3px;
    cursor: pointer;
}
</style>
