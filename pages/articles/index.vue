<template>
    <div class="layout-content">
        <div class="dashboard">
            <div class="content">
                <Breadcrumb/>
                <div class="content_wrapper">
                    <div class="card">
                        <DataTable :value="articles" :paginator="true" class="p-datatable-articles" :rows="10"
                        dataKey="id" :rowHover="true" :selection.sync="selectedArticles" :filters="filters" :loading="loading"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                            <template #empty>
                                No articles found.
                            </template>
                            <template #loading>
                                Loading articles data. Please wait.
                            </template>
                            <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
                            <Column field="title" header="Title" :sortable="true">
                                <template #body="slotProps">
                                    {{slotProps.data.title}}
                                </template>
                                <template #filter>
                                    <InputText type="text" v-model="filters['title']" class="p-column-filter" placeholder="Search by title"/>
                                </template>
                            </Column>
                            <Column field="category" header="Category" :sortable="true">
                                <template #body="slotProps">
                                    {{slotProps.data.category}}
                                </template>
                                <template #filter>
                                    <InputText type="text" v-model="filters['category']" class="p-column-filter" placeholder="Search by category"/>
                                </template>
                            </Column>
                            <Column field="subCategory" header="Sub Category" :sortable="true">
                                <template #body="slotProps">
                                    {{slotProps.data.sub_category}}
                                </template>
                                <template #filter>
                                    <InputText type="text" v-model="filters['subCategory']" class="p-column-filter" placeholder="Search by sub category"/>
                                </template>
                            </Column>
                            <Column field="date" header="Tanggal dibuat" :sortable="true" filterMatchMode="custom" :filterFunction="filterDate">
                                <template #body="slotProps">
                                    <span>{{slotProps.data.created_datetime}}</span>
                                </template>
                                <template #filter>
                                    <Calendar v-model="filters['date']" dateFormat="yy-mm-dd" class="p-column-filter" placeholder="Tanggal dibuat"/>
                                </template>
                            </Column>
                            <Column header="Action" headerStyle="width: 8rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
                                <template #body>
                                    <Button type="button" icon="pi pi-cog" class="p-button-secondary"></Button>
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </div>
                <Toast/>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from '../../components/Breadcrumb.vue'

	export default {
        middleware : 'auth',
        components: {
			Breadcrumb
        },
        data() {
            return {
                articles: null,
                selectedArticles: null,
                filters: {},
                loading: true
            }
        },
        mounted() {
            try {
				this.$axios.get('/backend/v1/articles').then((resp) => {
					if(resp.data.status === 'success'){
                        this.articles = resp.data.data
                        this.loading = false
					}else{
						this.$toast.add({severity: 'info', summary: resp.data.message});
					}
				})
			} catch (e) {
				this.$toast.add({severity: 'error', summary: e.response.data.message});
            }
        },
        methods: {
            filterDate(value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value === this.formatDate(filter);
            },
            formatDate(date) {
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (month < 10) {
                    month = '0' + month;
                }
                if (day < 10) {
                    day = '0' + day;
                }
                return date.getFullYear() + '-' + month + '-' + day;
            }
        }
	}
</script>

<style>
.layout-content .card {
    background: var(--surface-e);
    padding: 2rem;
    -webkit-box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-bottom: 2rem;
}
</style>
