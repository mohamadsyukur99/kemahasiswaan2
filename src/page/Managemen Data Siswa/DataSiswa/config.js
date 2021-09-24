export const FormFilter = [
    {label:'No Induk', type:'text', name:"noinduk",value:""},
    {label:'Nama', type:'text', name:"nama",value:""},  
    {label:'Tanggal',type:'date',name:"tanggal",values:"", option:[{altInput: true,altFormat: "d-m-Y",dateFormat: "Y-m-d",}]},
    {label:'Tanggal Range',type:'date',name:"tanggal2",values:"", option:[{mode: "range",altInput: true,altFormat: "d-m-Y",dateFormat: "Y-m-d",}]},
    {label:'Country',type:'combo',name:"coutry",values:"", menu:[{key:'1', val:'United States'},{key:'2', val:'Canada'},{key:'3', val:'Mexico'}]},
    {label:'Jenis',type:'combo',name:"jenis",values:"", menu:[{key:'1', val:'jenis 1'},{key:'2', val:'jenis 2'},{key:'3', val:'jenis 3'}]},
]

export const FormEditor = [
    {label:'No Induk', type:'text', name:"noinduk",value:""},
    {label:'Nama', type:'text', name:"nama",value:""},  
    {label:'Tanggal',type:'date',name:"tanggal",values:"", option:[{altInput: true,altFormat: "d-m-Y",dateFormat: "Y-m-d",}]},
    {label:'Tanggal Range',type:'date',name:"tanggal2",values:"", option:[{mode: "range",altInput: true,altFormat: "d-m-Y",dateFormat: "Y-m-d",}]},
    {label:'Foto',type:'files',name:"foto",values:""},
    {label:'Country',type:'combo',name:"coutry",values:"", menu:[{key:'1', val:'United States'},{key:'2', val:'Canada'},{key:'3', val:'Mexico'}]},
    {label:'Hobby',type:'checkbox',name:"hobby",values:"", item : [{label: "makanan", value: '1'},{label: "minum", value: '2'},{label: "bermain", value: '3'}]},
    {label:'Gender',type:'radio',name:"gender",values:"", item : [{label: "laki laki", value: '1'},{label: "perempuan", value: '2'}]},
]

export const tabelHeader = [
    {name:'aksi',style:''},
    {name:'virtual acount', style:''},
    {name:'nis',style:''},
    {name:'nama',style:''},
    {name:'alamat',style:''},
    {name:'tpt lahir',style:''},
    {name:'tgl lahir',style:''},
    {name:'jns kelamin',style:''},
    {name:'no hp',style:''},
    {name:'pendidikan',style:''},
]

export const tabelData = [
    {id:1,foto:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",nama:"Jane Cooper",title:"Regional Paradigm Technician",role:"admin",tes:"admin",tes1:"admin",tes2:"admin",status:"Active"},
    {id:2,foto:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",nama:"Jane Cooper",title:"Regional Paradigm Technician",role:"admin",tes:"admin",tes1:"admin",tes2:"admin",status:"Active"},
    {id:3,foto:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",nama:"Jane Cooper",title:"Regional Paradigm Technician",role:"admin",tes:"admin",tes1:"admin",tes2:"admin",status:"Active"},
    {id:4,foto:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",nama:"Jane Cooper",title:"Regional Paradigm Technician",role:"admin",tes:"admin",tes1:"admin",tes2:"admin",status:"Active"},
]