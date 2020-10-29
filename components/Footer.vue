<template>
    <div class="layout-footer">
        <div class="layout-footer-left">
            <span>PrimeVue 3.0.0-rc.2 on Vue 3.0.0 by </span>
            <a href="https://www.primetek.com.tr">PrimeTek</a>
        </div>

        <div class="layout-footer-right">
            <a href="https://github.com/primefaces/primevue" class="p-mr-3">
                <i class="pi pi-github"></i>
            </a>
            <a href="https://twitter.com/primevue">
                <i class="pi pi-twitter"></i>
            </a>
        </div>
    </div>
</template>
<style scoped>
.layout-footer {
    font-size: 1rem;
    padding: 1rem;
    background-color: var(--surface-a);
    background-color: #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    bottom: 0;
    position: fixed;
    width: 100%;
    border-top-color: #ddd;
    border-top-style: solid;
    border-top-width: 1px;
}
.layout-footer a {
    color: var(--text-color);
    font-weight: 600;
}
.p-mr-3 {
    margin-right: 1rem!important;
}
.layout-footer .layout-footer-right a i {
    color: var(--text-secondary-color);
    font-size: 1.5rem;
}
.pi {
    font-family: primeicons;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.pi-github:before {
    content: "\E9B5";
}
.pi:before {
    --webkit-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.pi-twitter:before {
    content: "\E9B6";
}
</style>
