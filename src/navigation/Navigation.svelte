<script>
	import Pendidikan_Karakter from './../page/Pembinaan siswa/Pendidikan_Karakter.svelte';
	import Dashboard from './../page/Dashboard/Dashboard.svelte';
    import { menuStore } from './../stores/store.ts';
    import DataSiswa from './../page/Managemen Data Siswa/DataSiswa/Index.svelte';
    import Walikelas from '../page/Managemen Data Siswa/Walikelas.svelte';
    import PengaturanKenaikanKelas from '../page/Managemen Data Siswa/Pengaturan_Kenaikan_kelas.svelte';
    import PengaturanKelulusan from '../page/Managemen Data Siswa/Pengaturan_Kelulusan.svelte';
    import BukuPantau from '../page/Buku Pantau/Buku_Pantau.svelte';
    import Ekstrakurikuler from '../page/Pembinaan siswa/Ekstrakurikuler.svelte';
    import Olimpiade from '../page/Pembinaan siswa/Olimpiade.svelte';
    import RiwayatKesehatan from '../page/Riwayat siswa/Riwayat_Kesehatan.svelte';
    import RiwayatPrestasi from '../page/Riwayat siswa/Riwayat_Prestasi.svelte';
    import RiwayatKonseling from '../page/Riwayat siswa/Riwayat_Konseling.svelte';
    import AbsensiSiswa from '../page/Laporan/Absensi_Siswa.svelte';
    import RekapBukuPantau from '../page/Laporan/Rekap_Buku_Pantau.svelte';
    import LapKenaikanKelas from '../page/Laporan/Lap_Kenaikan_Kelas.svelte';
    import LapKelulusan from '../page/Laporan/Lap_Kelulusan.svelte';
    import WalikelasSiswa from '../page/Managemen Data Siswa/Walikelas_Siswa.svelte';

</script>

<div class="flex-auto mt-16 ml-64">
    {#if $menuStore.code == "dashboard"}
        <Dashboard />
    {:else if $menuStore.code == "Manajemendatasiswa/datasiswa"}
        <DataSiswa />
    {:else if $menuStore.code == "Manajemendatasiswa/walikelas"}
        <Walikelas />
    {:else if $menuStore.code == "Manajemendatasiswa/walikelassiswa"}
        <WalikelasSiswa />
    {:else if $menuStore.code == "Manajemendatasiswa/pengaturankenaikankelas"}
        <PengaturanKenaikanKelas />
    {:else if $menuStore.code == "Manajemendatasiswa/pengaturankelulusan"}
        <PengaturanKelulusan />
    {:else if $menuStore.code == "bukupantau"}
        <BukuPantau />
    {:else if $menuStore.code == "Pembinaansiswa/pendidikankarakter"}
        <Pendidikan_Karakter />
    {:else if $menuStore.code == "Pembinaansiswa/ekstrakurikuler"}
        <Ekstrakurikuler />
    {:else if $menuStore.code == "Pembinaansiswa/olimpiade"}
        <Olimpiade />
    {:else if $menuStore.code == "Riwayatsiswa/riwayatkesehatan"}
        <RiwayatKesehatan />
    {:else if $menuStore.code == "Riwayatsiswa/riwayatprestasi"}
        <RiwayatPrestasi />
    {:else if $menuStore.code == "Riwayatsiswa/riwayatkonseling"}
        <RiwayatKonseling />
    {:else if $menuStore.code == "Laporan/absensisiswa"}
        <AbsensiSiswa />
    {:else if $menuStore.code == "Laporan/rekapbukupantau"}
        <RekapBukuPantau />
    {:else if $menuStore.code == "Laporan/lapkenaikankelas"}
        <LapKenaikanKelas />
    {:else if $menuStore.code == "Laporan/lapkelulusan"}
        <LapKelulusan />
    {/if}
</div>