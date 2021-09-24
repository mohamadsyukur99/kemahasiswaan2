<svelte:head>
    <title>{$menuStore.name}</title>
</svelte:head>
<script>
	import { FormFilter, tabelHeader, tabelData, FormEditor } from './config.js';
	import Filter from '../../../component/Filter/Filter.svelte';
    import Table from './Table.svelte';
    import PageHeading from '../../../component/PageHeading/PageHeading.svelte';
    import FormUser from './Form.svelte';
    import { menuStore } from './../../../stores/store.ts';
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { getNotificationsContext } from 'svelte-notifications';

    const { addNotification } = getNotificationsContext();

    const Notification  = (text, type) =>{
        addNotification({
            text: text,
            type: type,
            position: 'top-right',
            removeAfter: 4000,
        })
    }

    let isForm = false;
    let isFilter = true;
    let dataFilter = {noinduk:"",nama:"",tanggal:"",tanggal2:"",coutry:"", jenis:""}
    let dataEditor = {noinduk:"d",nama:"c",tanggal:"2021-01-01",tanggal2:"2021-01-01 to 2021-01-02",coutry:"1",hobby:['1','2'],gender:"2"}


    const submitFilter = (e) =>{
        console.log(e.detail)
    }

    const submitFormEditor = async (e) =>{
        // let res = await axios.post("http://localhost/upload-file/api-file-upload.php", e.detail);
        // console.log(res.data);
    }
    
    let todoData = []
    let isLoading =false

    const apiURL = "https://gate-sisma.sekolahsabilillah.sch.id/api/pegawai?page=&limit=10";



    function getTodos(url) {
        return fetch(url, {
            method: "GET",
            headers : {
                "Secret-Key" : "UzBsdXMxc3RlbS1TSVNNQQ==",
                'Content-Type': 'application/json',
                'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImdhdGUiOiJzaXAtc2lzbWEiLCJkYXRhIjp7IklEVVNFUiI6IjEiLCJJRFNBVFVBTiI6IjEiLCJMRVZFTCI6IjEiLCJOQU1BIjoiQURNSU5JU1RSQVRPUiJ9fSwiaWF0IjoxNjMyNDQ5MTUwLCJleHAiOjE2MzI1MzU1NTB9.w5DnYxa16w9cCQLNpQZm0JGVtuXuHrQn-C8nMQ8m3mE'
            },
            credentials: "include"

        }).then(body => body.json())
    }
    
    onMount(() => {
		isLoading = true

        getTodos(apiURL)
        .then(data => console.log(data))
        .catch(e => console.log(e))
        .finally(()=>isLoading = false)

	});
</script>    
<PageHeading />
<div style="padding: 1.1rem;">
    <ul>
        {#each todoData as todo}
            <li>{todo.title}</li>
        {/each}
    </ul>
    {#if isForm}
    <FormUser 
        values={dataEditor}
        config={FormEditor}
        on:onClose={()=>isForm = !isForm}
        on:submit={submitFormEditor}
    />
    
    {:else}
        {#if isFilter}
        <Filter config = {FormFilter} 
            values={dataFilter}
            on:onClose={()=>isFilter =  !isFilter}
            on:submit={(e)=>dataFilter = {...dataFilter, ...e.detail}}
        />
        {/if}
        <Table  headers={tabelHeader}
                data={tabelData}
                on:onFilter={()=>isFilter =  !isFilter}
                on:onForm={()=>isForm = !isForm}
        />
    {/if}
</div>


  