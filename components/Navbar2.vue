<template>
    <div class="layout-topbar">
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="../assets/primevue-logo.png" height="40" class="p-mr-2">
            </template>
            <!-- <template #end>
                <InputText placeholder="Search" type="text" />
                <Button label="Logout" icon="pi pi-power-off" :style="{'margin-left': '0 .5em'}"/>
            </template> -->
        </Menubar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: this.$auth.$state.user.name || 'User',
                    items:[
                    {
                        label:'Profle',
                        icon:'pi pi-fw pi-user-plus',
                        to: '/profile'
                    },
                    {
                        label:'Logout',
                        icon:'pi pi-power-off',
                        command: async () => {
                            await this.$auth.logout();
                            this.$router.push('/login');
                        }
                    }
                   ]
                },
            ]
        }
    }
}
</script>

<style>
    .p-menubar-root-list {
        float: right;
        position: absolute;
        right: 15px;
        display: block;
    }
</style>