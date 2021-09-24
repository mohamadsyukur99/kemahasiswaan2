import {writable} from 'svelte/store'
import type {IMenu} from './../global'

export  const menus:IMenu[] = [
    {
        id:1,
        name:'Dashboard', 
        icon:"home", 
        code:'dashboard', 
        child:[], 
        ket:'Halman Dashboard'
    },
    {   
        id:2,
        name:'Manajemen data siswa', 
        icon:"tasks",
        code:'Manajemendatasiswa',
        child:[
            {name:'Data Siswa', grup:"Manajemen data siswa", code:'Manajemendatasiswa/datasiswa', ket:'Halaman Untuk Mengolah Data Siswa'},
            {name:'Walikelas', grup:"Manajemen data siswa", code:'Manajemendatasiswa/walikelas', ket:'Halaman Untuk Mengolah Data Walikelas'},
            {name:'Walikelas Siswa', grup:"Manajemen data siswa", code:'Manajemendatasiswa/walikelassiswa', ket:'Halaman Untuk Mengolah Data Walikelas Siswa'},
            {name:'Pengaturan Kenaikan kelas', grup:"Manajemen data siswa", code:'Manajemendatasiswa/pengaturankenaikankelas', ket:'Halaman Untuk Mengolah Data Pengaturan Kenaikan kelas'},
            {name:'Pengaturan Kelulusan', grup:"Manajemen data siswa", code:'Manajemendatasiswa/pengaturankelulusan', ket:'Halaman Untuk Mengolah Data Pengaturan Kelulusan'},
        ],
        ket:'',
    },
    {   
        id:3,
        name:'Buku Pantau', 
        icon:"file-signature",
        code:'bukupantau',
        child:[],
        ket:'Halaman Untuk Mengolah Data Buku Pantau'
    },
    {   
        id:4,
        name:'Pembinaan siswa', 
        icon:"user-graduate",
        code:'Pembinaansiswa',
        child:[
            {name:'Pendidikan Karakter', grup:"Pembinaan siswa", code:'Pembinaansiswa/pendidikankarakter', ket:'Halaman Untuk Mengolah Pendidikan karakter'},
            {name:'Ekstrakurikuler', grup:"Pembinaan siswa", code:'Pembinaansiswa/ekstrakurikuler', ket:'Halaman Untuk Mengolah Ekstrakurikuler'},
            {name:'Olimpiade', grup:"Pembinaan siswa", code:'Pembinaansiswa/olimpiade', ket:'Halaman Untuk Mengolah Olimpiade'},
        ],
        ket:''
    },
    {   
        id:5,
        name:'Riwayat siswa', 
        icon:"street-view",
        code:'Riwayatsiswa',
        child:[
            {name:'Riwayat kesehatan', grup:"Riwayat siswa", code:'Riwayatsiswa/riwayatkesehatan', ket:'Halaman Untuk Mengolah Riwayat kesehatan'},
            {name:'Riwayat prestasi', grup:"Riwayat siswa", code:'Riwayatsiswa/riwayatprestasi', ket:'Halaman Untuk Mengolah Riwayat prestasi'},
            {name:'Riwayat konseling', grup:"Riwayat siswa", code:'Riwayatsiswa/riwayatkonseling', ket:'Halaman Untuk Mengolah Riwayat konseling'},
        ],
        ket:''
    },
    {   
        id:6,
        name:'Laporan', 
        icon:"clipboard",
        code:'Laporan',
        child:[
            {name:'Absensi siswa', grup:"Laporan", code:'Laporan/absensisiswa', ket:'Halaman Untuk Mengolah Absensi siswa'},
            {name:'Rekap buku pantau', grup:"Laporan", code:'Laporan/rekapbukupantau', ket:'Halaman Untuk Mengolah Rekap buku pantau'},
            {name:'Lap Kenaikan kelas', grup:"Laporan", code:'Laporan/lapkenaikankelas', ket:'Halaman Untuk Mengolah Lap Kenaikan kelas'},
            {name:'Lap Kelulusan', grup:"Laporan", code:'Laporan/lapkelulusan', ket:'Halaman Untuk Mengolah Lap Kelulusan'},
        ],
        ket:''
    }
]

const menuStoreFn = () => {
    // const selectedMenu : IMenu = {id:1, name:'Dashboard', grup:"dashboard", code:'dashboard',ket:'Halman Dashboard'}
    const selectedMenu: IMenu = {id:1, name:'Data Siswa', grup:"Manajemen data siswa", code:'Manajemendatasiswa/datasiswa', ket:'Halaman Untuk Mengolah Data Siswa'}
    const {subscribe, set} = writable(selectedMenu)
    const selectMenu = (menu: IMenu) => set(menu)
    return {
        subscribe,
        selectMenu
    }
}


const toogleSidebarStoreFn = () => {
    let status = true;
    const {subscribe, set,update} = writable(status)
    const openMenu = () => set(status = true)
    const closeMenu = () => set(status = false)
    return {
        subscribe,
        openMenu,
        closeMenu
    }
}

const statusSieberFn = () => {
    let status = true;
    const {subscribe, set,update} = writable(status)
    const statusTrue = () => set(status = true)
    const statusFalse = () => set(status = false)
    return {
        subscribe,
        statusTrue,
        statusFalse
    }
}

const toogleSidebarStoreMiniFn = () => {
    let status = false;
    const {subscribe, set,update} = writable(status)
    const openMenu = () => set(status = true)
    const closeMenu = () => set(status = false)
    return {
        subscribe,
        openMenu,
        closeMenu
    }
}

const statusPageHeadingFn = () =>{
    let status = false;
    const {subscribe, set,update} = writable(status)
    const fixed = () => set(status = true)
    const noFixed = () => set(status = false)
    return {
        subscribe,
        fixed,
        noFixed
    }
}

export let sidebarStore = toogleSidebarStoreFn()
export let statusPageHeading = statusPageHeadingFn()
export let sidebarStoreMini = toogleSidebarStoreMiniFn()
export let statusSieber = statusSieberFn()
export let menuStore = menuStoreFn()
