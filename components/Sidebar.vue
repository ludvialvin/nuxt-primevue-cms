<template>
    <div :class="['layout-sidebar', {'active': active}]">
        <div class="layout-menu">
            <div class="menu-category">Main</div>
            <div class="menu-items">
                <nuxt-link to="/">Dashboard</nuxt-link>
                <nuxt-link to="/articles">Articles</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        active: Boolean
    },
    data() {
        return {
            activeSubmenus: {}
        }
    },
    methods: {
        toggleSubmenu(event, name) {
            this.activeSubmenus[name] = this.activeSubmenus[name] ? false: true;
            this.activeSubmenus = {...this.activeSubmenus};
            event.preventDefault();
        },
        isSubmenuActive(name, routerIsActive) {
            if (this.activeSubmenus[name]) {
                return true;
            }
            else if (routerIsActive) {
                this.activeSubmenus[name] = true;
                return true;
            }
            return false;
        }
    }
}
</script>
<style scoped>
.layout-sidebar, .layout-sidebar .layout-menu .menu-category {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.layout-sidebar {
    position: fixed;
    left: 0;
    top: 61px;
    height: calc(100% - 119px);
    background-color: var(--surface-a);
    overflow: auto;
    width: 250px;
    border-right: 1px solid var(--surface-d);
    padding: 1rem;
    -webkit-transition: -webkit-transform .4s cubic-bezier(.05,.74,.2,.99);
    transition: -webkit-transform .4s cubic-bezier(.05,.74,.2,.99);
    transition: transform .4s cubic-bezier(.05,.74,.2,.99);
    transition: transform .4s cubic-bezier(.05,.74,.2,.99),-webkit-transform .4s cubic-bezier(.05,.74,.2,.99);
    bottom: 58px;
}
.layout-sidebar .layout-menu .menu-category:first-child {
    border-top: 0 none;
    padding-top: 1rem;
}
.layout-sidebar .layout-menu .menu-category {
    display: block;
    color: var(--text-color-secondary);
    font-weight: 600;
    padding: 1.5rem 0 1rem 0;
    font-size: .857rem;
    text-transform: uppercase;
    border-top: 1px solid var(--surface-d);
}
.layout-sidebar, .layout-sidebar .layout-menu .menu-category {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.layout-sidebar .layout-menu .menu-items {
    padding: 0 0 1rem 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.layout-sidebar .layout-menu .menu-items a {
    color: var(--text-color);
    display: block;
    padding: .5rem;
    border-radius: 3px;
    cursor: pointer;
}
.menu-items .nuxt-link-exact-active {
    font-weight: 700;
}
</style>
