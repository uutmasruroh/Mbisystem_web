async function kirimLaporan(event) {
  event.preventDefault();

  const payload = {
    namaOperator: document.getElementById('operator').value,
    shift: document.getElementById('shift').value,
    namaProduk: document.getElementById('produk').value,
    jumlahGood: parseInt(document.getElementById('good').value) || 0, // Antisipasi jika kosong
    jumlahReject: parseInt(document.getElementById('reject').value) || 0, // Antisipasi jika kosong
    catatan: document.getElementById('catatan').value
  };

  try {
    const response = await fetch('/api/laporan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    alert(result.message);

    if (response.ok) {
      event.target.reset(); // Mengosongkan isian form setelah sukses
    }
  } catch (error) {
    console.error('Gagal mengirim data:', error);
    alert('Terjadi kesalahan saat menghubungkan ke server.');
  }
}
// ==========================================
// 1. DATA MASTER CUSTOMER & PART
// ==========================================
const masterData = {
    "PT. CIKARANG PRESISI": [
        { part: "SPACER M6X70", spec: "BLUE" },
        { part: "INSULATION PIN 3X150MM", spec: "COPPER" },
        { part: "LONG ROOT NUT H8", spec: "BLUE CR3+" },
        { part: "LONG ROOT NUT H9", spec: "BLUE CR3+" },
        { part: "LONG ROOT NUT H12", spec: "BLUE CR3+" },
        { part: "LONG ROOT NUT H37", spec: "BLUE CR3+" }
    ],
    "PT. KURNIA BERDIKARI SEJAHTERA": [
        { part: "PIPA SHORT", spec: "BLUE CR3+" }
    ],
    "PT. ELYON INOVASI PERKASA": [
        { part: "-", spec: "WHITE" }
    ],
    "CV. INDOSTAR SEJAHTERA": [
        { part: "HEXAGON 3/8 \"X5\"", spec: "HALF DRA" },
        { part: "SELONGSONG 8", spec: "YELLOW" },
        { part: "SELONGSOG 10", spec: "YELLOW" },
        { part: "SELONGSONG M10", spec: "YELLOW" },
        { part: "MUR", spec: "YELLOW" },
        { part: "RING", spec: "YELLOW" }
    ],
    "PT. MITRA RODA PIRANTI": [
        { part: "FRAME P3 LOUNGE CHAIR", spec: "BLUE CR3+" },
        { part: "FRAME P3S CHAISE LOUNGE", spec: "BLUE CR3+" },
        { part: "CHAIR LOUNGE", spec: "BLUE CR3+" }
    ],
    "PAK WINRASTRO": [
        { part: "ALLL", spec: "BLUE CR3+" },
        { part: "B2", spec: "BLUE CR3+" },
        { part: "T4", spec: "BLUE CR3+" },
        { part: "A8", spec: "BLUE CR3+" },
        { part: "B3", spec: "BLUE CR3+" },
        { part: "BEHEL", spec: "BLUE CR3+" },
        { part: "A9", spec: "BLUE CR3+" },
        { part: "T9", spec: "BLUE CR3+" },
        { part: "A7", spec: "BLUE CR3+" },
        { part: "A10", spec: "BLUE CR3+" },
        { part: "T6", spec: "BLUE CR3+" },
        { part: "A1 & T7", spec: "BLUE CR3+" },
        { part: "T7", spec: "BLUE CR3+" },
        { part: "B2+B3", spec: "BLUE CR3+" }
    ],
    "CV. MNKAD AUTO SPORT": [
        { part: "METALIC GUIDE", spec: "BLUE CR3+" },
        { part: "METALIC BRIDLE", spec: "BLUE CR3+" },
        { part: "METALIC LOCKER", spec: "BLUE CR3+" },
        { part: "BLACK CLAMP", spec: "BLACK" },
        { part: "BAUT+RING+BUSHING", spec: "BLACK" }
    ],
    "PT. SAGA HIKARI TEKINDO SEJATI": [
        { part: "PW 2.68X6X0.5 CU", spec: "COOPER" },
        { part: "PW 2,68X6X0,5 CU", spec: "COOPER" },
        { part: "PW 2.68X8X0,5 CU", spec: "COOPER" }
    ],
    "PT. RIZKY KARYA MAKMURr": [
        { part: "BAUT JCBC M6X50", spec: "BLUE CR3+" },
        { part: "06X15MM", spec: "BLUE CR3+" }
    ],
    "PT. MEGA WAJA CORPORINDO": [
        { part: "JF/MS M6X15", spec: "PUTIH" },
        { part: "F/ABH I #6X1 I", spec: "BLUE CR3+" },
        { part: "F/ABH I #6X1.1/4", spec: "BLUE CR3+" },
        { part: "F/ABH I #6X3/4", spec: "BLUE CR3+" },
        { part: "IDH/MS M7X30", spec: "PUTIH" },
        { part: "JP/MS M4X70 (RETUR)", spec: "PUTIH" },
        { part: "JF/MS M4X25", spec: "PUTIH" },
        { part: "JP/MS M3X6", spec: "PUTIH" },
        { part: "JP/MS M4X50", spec: "PUTIH" },
        { part: "PP/MS M3X6", spec: "PUTIH" },
        { part: "JP/KT M6X10", spec: "PUTIH" },
        { part: "F/ABH #8X3", spec: "PUTIH" },
        { part: "JP/MS M4X6", spec: "PUTIH" },
        { part: "JP/MS M4X8", spec: "PUTIH" },
        { part: "PPS/ABH #4X1/4", spec: "PUTIH" },
        { part: "F/ABH #8X2", spec: "PUTIH" },
        { part: "F/ABH #6X1 2604", spec: "PUTIH" },
        { part: "JP/MS M3X15", spec: "PUTIH" },
        { part: "F/ABH #6X1.1/4", spec: "PUTIH" }
    ],
    "PT. GISEN TEKNIK PRESISI": [
        { part: "MIO 12,5X7,3X11,1 (7 GR)", spec: "YELLOW" },
        { part: "MIO 12,5X8,1X11,1 (6 GR)", spec: "YELLOW" },
        { part: "MIO 12,5X5,2X11,1 (9 GR)", spec: "YELLOW" },
        { part: "BEAT 12,5X12,1 (7 GR)", spec: "YELLOW" },
        { part: "BEAT 12,5X12,2 (8 GR)", spec: "YELLOW" },
        { part: "BEAT 12,5X12,1 (5 GR)", spec: "YELLOW" },
        { part: "BEAT 12,5X12,1 (9 GR)", spec: "YELLOW" },
        { part: "MIO 12,5X11,1 (8 GR)", spec: "YELLOW" },
        { part: "MIO 12,5X11,1 (6 GR)", spec: "YELLOW" },
        { part: "MIO 12,5X11,1 (5 GR)", spec: "YELLOW" },
        { part: "MIO 12,5X11,1 (7 GR)", spec: "YELLOW" },
        { part: "MIO 12,5X11,1 (9 GR)", spec: "YELLOW" },
        { part: "KZR 12 GRAM (GROOVING)", spec: "WHITE" },
        { part: "KZR 7 GRAM", spec: "WHITE" },
        { part: "KZR 12 GRAM", spec: "WHITE" },
        { part: "12,5X8X11,1 7GRAM DRILL", spec: "WHITE" },
        { part: "15X10X12,85 10 GRAM", spec: "WHITE" },
        { part: "NMAX 8 GRAM", spec: "WHITE" },
        { part: "12,6X10,6 6 GRAM", spec: "WHITE" },
        { part: "12,6X10,6 8 GRAM", spec: "WHITE" },
        { part: "17X12,75X13,5 (12GR)", spec: "BLUE CR3+" },
        { part: "12,6X10,6", spec: "BLUE CR3+" },
        { part: "12,5X12,1 (5GR)", spec: "YELLOW" },
        { part: "12,5X12,1 (6GR)", spec: "YELLOW" },
        { part: "BAUT 7GR 12,5X12,1", spec: "YELLOW" },
        { part: "ROLLER GROVING (6GR)", spec: "AFTER PLAT" },
        { part: "ROLLER GROVING (8GR)", spec: "AFTER PLAT" },
        { part: "ROOLER GROVING (9GR)", spec: "AFTER PLAT" },
        { part: "ROLLER GROVING (12GR)", spec: "AFTER PLAT" },
        { part: "ROLLER (7GR)", spec: "AFTER PLAT" },
        { part: "ROLLER (12GR)", spec: "AFTER PLAT" },
        { part: "MIO 7 GR GROVING", spec: "YELLOW" },
        { part: "MIO 8 GR DRILL", spec: "YELLOW" },
        { part: "KZR 10 GR", spec: "YELLOW" },
        { part: "12,5 x 12,1 (8 GR) POLOS", spec: "YELLOW" },
        { part: "REPAIR DRILL 12,5 x 11,1 (8 GR)", spec: "YELLOW" },
        { part: "15x10x12,9 (11 GR)", spec: "YELLOW" },
        { part: "12,5x11.1 7 (7 GR)", spec: "YELLOW" },
        { part: "15x11,25 (9 GR)", spec: "YELLOW" },
        { part: "17 X 11,3 X 15,5 (14 GR)", spec: "YELLOW" },
        { part: "17 X 11,3 X 15,5 (15 GR)", spec: "YELLOW" },
        { part: "15X10,7X12,9 (10 GR)", spec: "YELLOW" },
        { part: "12,5X12,1 (6GR)", spec: "YELLOW" },
        { part: "12,5 X 12,1 (7 GR)", spec: "YELLOW" },
        { part: "KZR 14 GRAM", spec: "YELLOW" },
        { part: "MIO 12,5X11,1 (8 GRAM)", spec: "YELLOW" },
        { part: "BEAT KARBU (6 GRAM)", spec: "YELLOW" },
        { part: "17x13,4 x 13,5 (10 GR)", spec: "YELLOW" },
        { part: "12,5x16,2 (8 gr)", spec: "BLACK" }
    ],
    "PT. GELAR INTI ANUGRAH TERJAYA": [
        { part: "MUR HEX 88 M06 KG", spec: "PUTIH" },
        { part: "BO HEX 88 M06X15MM FT", spec: "PUTIH" },
        { part: "BM HEX 88 M08X35MM", spec: "PUTIH" },
        { part: "BO HEX 88 M06X20MM FT", spec: "KUNING" },
        { part: "BM HEX 88 M16X35MM FT", spec: "KUNING" },
        { part: "BM HEX 88 M16X40MM FT", spec: "KUNING" },
        { part: "BM HEX 88 M16X50MM FT", spec: "KUNING" },
        { part: "BM HEX 88 M20X45MM FT", spec: "KUNING" },
        { part: "BM HEX 88 M20X70MM FT", spec: "KUNING" },
        { part: "BM HEX 88 M16X45MM FT", spec: "KUNING" },
        { part: "BM HEX 88 M18X40MM FT", spec: "KUNING" },
        { part: "BM HEX 88 M16X30MM FT", spec: "KUNING" },
        { part: "BO HEX 88 M16X90MM FT", spec: "KUNING" },
        { part: "BO HEX 10.9 M12X40MM HT", spec: "KUNING" },
        { part: "BO HEX 88 M08X40 MM FT", spec: "KUNING" },
        { part: "BO HEX 88 M12X110MM FT", spec: "KUNING" },
        { part: "BO HEX 88 M06X40 MM FT", spec: "KUNING" },
        { part: "BO HEX 88 M12X90 MM FT", spec: "KUNING" },
        { part: "BO HEX 88 M12X60 MM FT", spec: "KUNING" },
        { part: "BO HEX 88 M12X80 MM FT", spec: "KUNING" },
        { part: "BO HEX 88 M12X70 MM FT", spec: "KUNING" },
        { part: "BO HEX 88 M16X90 MM FT", spec: "KUNING" },
        { part: "BO HEX 88 M24X80MM FT", spec: "KUNING" },
        { part: "BO HEX 88 M24X50 MM FT HTM", spec: "KUNING" },
        { part: "BO HEX 88 M06X16 MM FT", spec: "PUTIH" },
        { part: "BO HEX 88 M06X15 MM FT", spec: "KUNING" },
        { part: "BO HEX 88 M06X80 MM FT", spec: "KUNING" },
        { part: "BM HEX 88 M12X25 MM FT", spec: "KUNING" },
        { part: "BM HEX 88 M08X25 MM FT", spec: "KUNING" },
        { part: "BM HEX 88 M08X20 MM FT", spec: "KUNING" },
        { part: "BM HEX 88 M06X20 MM FT", spec: "KUNING" },
        { part: "BM HEX 88 M06X15 MM FT", spec: "KUNING" },
        { part: "BM HEX 88 M06X10 MM FT", spec: "KUNING" },
        { part: "M10X30 MM", spec: "KUNING" },
        { part: "BM HEX 88 M06X25 MM FT", spec: "PUTIH" },
        { part: "14XNC 3/8\"1", spec: "KUNING" },
        { part: "MUR HEX M12 P 1,25 KN6", spec: "KUNING" },
        { part: "JF+MUR M05X50MM", spec: "KUNING" },
        { part: "SCREW 1-3/4 X 127 MM", spec: "PUTIH" },
        { part: "BO HEX 88 M10 X 80M FT", spec: "PUTIH" },
        { part: "MUR HEX M12", spec: "KUNING" },
        { part: "BO HEX 88 M06X25 MM + MUR M06", spec: "KUNING" },
        { part: "BO HEX 88 M10X25MM", spec: "KUNING" },
        { part: "BM HEX 88 M06 FT", spec: "KUNING" }
    ],
    "PAK AGUS (TRI TUNGGAL)": [
        { part: "MANGKOK RODA", spec: "BLUE CR3+" },
        { part: "PLATE RODA", spec: "BLUE CR3+" },
        { part: "BAUT M12X25 & CLAMP", spec: "BLUE CR3+" },
        { part: "BOLD", spec: "BLUE CR3+" },
        { part: "CLAM", spec: "BLUE CR3+" }
    ],
    "CV. CITRA PERKASA": [
        { part: "LONG 1001 NUT 12 M3", spec: "WHITE" },
        { part: "LONG NUT COOPER", spec: "WHITE" },
        { part: "NUT WELD M12", spec: "WHITE" },
        { part: "H9 LONG NUT", spec: "WHITE" },
        { part: "H37 LONG NUT", spec: "WHITE" }
    ]
};
const monthNamesIndo = ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"];
const monthNamesEng = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

let globalQcData = [];
let globalProdData = [];

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        if (!file) return resolve('');
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function saveCustomToMasterData(customer, part, spec) {
    if (!customer || !part) return;
    if (!masterData[customer]) masterData[customer] = [];
    const exists = masterData[customer].some(item => item.part.toLowerCase() === part.toLowerCase());
    if (!exists) masterData[customer].push({ part, spec: spec || '-' });
    loadCustomerOptions('qcCustomerSelect');
    loadCustomerOptions('prodCustomerSelect');
}

// INISIALISASI
document.addEventListener("DOMContentLoaded", async () => {
    loadCustomerOptions('qcCustomerSelect');
    loadCustomerOptions('prodCustomerSelect');

    const today = new Date().toISOString().split('T')[0];
    const qcDateInput = document.getElementById('qcDate');
    const prodDateInput = document.getElementById('prodDate');

    if (qcDateInput) {
        qcDateInput.value = today;
        qcDateInput.addEventListener('change', renderQcTable);
    }
    if (prodDateInput) {
        prodDateInput.value = today;
        prodDateInput.addEventListener('change', renderProdTable);
    }

    await fetchQcData();
    await fetchProdData();

    // Event Listener Form QC
    const qcForm = document.getElementById('qcForm');
    if (qcForm) {
        qcForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            let customer = document.getElementById('qcCustomerSelect').value === "CUSTOM_NEW" 
                ? document.getElementById('qcCustomerCustom').value 
                : document.getElementById('qcCustomerSelect').value;

            let part = document.getElementById('qcPartSelect').value === "CUSTOM_NEW_PART" 
                ? document.getElementById('qcPartCustom').value 
                : document.getElementById('qcPartSelect').value;

            const spec = document.getElementById('qcSpec').value;
            saveCustomToMasterData(customer, part, spec);

            let photoBase64 = document.getElementById('qcPhotoBase64')?.value || '';
            const photoInput = document.getElementById('qcPhoto');
            if (!photoBase64 && photoInput && photoInput.files[0]) {
                photoBase64 = await fileToBase64(photoInput.files[0]);
            }

            const editId = document.getElementById('qcEditIndex').value;

            const payload = {
                date: document.getElementById('qcDate')?.value || '',
                pic: document.getElementById('qcPic')?.value || '',
                customer: customer,
                part: part,
                spec: spec,
                okPcs: parseInt(document.getElementById('qcOkPcs')?.value) || 0,
                ngPcs: parseInt(document.getElementById('qcNgPcs')?.value) || 0,
                qtyKg: document.getElementById('qcQtyKg')?.value || '0',
                note: document.getElementById('qcNote')?.value || '',
                photo: photoBase64
            };

            if (editId !== "-1") {
                await fetch(`/api/qc/${editId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
            } else {
                await fetch('/api/qc', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
            }

            resetQcForm();
            await fetchQcData();
        });
    }

    // Event Listener Form Produksi
    const prodForm = document.getElementById('prodForm');
    if (prodForm) {
        prodForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            let customer = document.getElementById('prodCustomerSelect')?.value || '';
            let part = document.getElementById('prodPartSelect')?.value || '';

            if (customer === "CUSTOM_NEW") customer = document.getElementById('prodCustomerCustom')?.value || '';
            if (part === "CUSTOM_NEW_PART") part = document.getElementById('prodPartCustom')?.value || '';

            let photoBase64 = document.getElementById('prodPhotoBase64')?.value || '';
            const photoInput = document.getElementById('prodPhoto');
            if (!photoBase64 && photoInput && photoInput.files[0]) {
                photoBase64 = await fileToBase64(photoInput.files[0]);
            }

            const editId = document.getElementById('prodEditIndex').value;

            const payload = {
                date: document.getElementById('prodDate')?.value,
                shift: document.getElementById('prodShift')?.value,
                pic: document.getElementById('prodPic')?.value,
                customer: customer,
                part: part,
                cromating: document.getElementById('prodCromating')?.value || '',
                qty: document.getElementById('prodQty')?.value || '0',
                barrel: document.getElementById('prodBarrel')?.value || '1',
                ampr: document.getElementById('prodAmpr')?.value || '0',
                timeIn: document.getElementById('prodTimeIn')?.value || '',
                timeOut: document.getElementById('prodTimeOut')?.value || '',
                additive: document.getElementById('prodAdditive')?.value || '',
                note: document.getElementById('prodNote')?.value || '',
                photo: photoBase64
            };

            if (editId !== "-1") {
                await fetch(`/api/produksi/${editId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
            } else {
                await fetch('/api/produksi', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
            }

            resetProdForm();
            await fetchProdData();
        });
    }
});

// FETCH DATA DARI SERVER
async function fetchQcData() {
    try {
        const res = await fetch('/api/qc');
        globalQcData = await res.json();
        renderQcTable();
    } catch (err) { console.error('Fetch QC Error:', err); }
}

async function fetchProdData() {
    try {
        const res = await fetch('/api/produksi');
        globalProdData = await res.json();
        renderProdTable();
    } catch (err) { console.error('Fetch Prod Error:', err); }
}

// NAVIGASI TAB
function switchTab(tabName) {
    const qcView = document.getElementById('qcView');
    const produksiView = document.getElementById('produksiView');
    if (tabName === 'qc') {
        qcView?.classList.remove('hidden');
        produksiView?.classList.add('hidden');
        renderQcTable();
    } else {
        produksiView?.classList.remove('hidden');
        qcView?.classList.add('hidden');
        renderProdTable();
    }
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu')?.classList.toggle('hidden');
}

// DROPDOWN
function loadCustomerOptions(selectId) {
    const select = document.getElementById(selectId);
    if (!select) return;
    select.innerHTML = '<option value=""> Pilih PT / Customer </option>';
    for (let customer in masterData) {
        let opt = document.createElement('option');
        opt.value = customer;
        opt.textContent = customer;
        select.appendChild(opt);
    }
    let customOpt = document.createElement('option');
    customOpt.value = "CUSTOM_NEW";
    customOpt.textContent = "+ Tambah Customer Baru...";
    select.appendChild(customOpt);
}

function onCustomerChange(custSelectId, partSelectId, specInputId) {
    const custSelect = document.getElementById(custSelectId);
    const partSelect = document.getElementById(partSelectId);
    const customCustContainer = document.getElementById(custSelectId.replace('Select', 'CustomContainer'));

    partSelect.innerHTML = '<option value=""> Pilih Nama Part </option>';
    document.getElementById(specInputId).value = '';

    if (custSelect.value === "CUSTOM_NEW") {
        customCustContainer?.classList.remove('hidden');
    } else {
        customCustContainer?.classList.add('hidden');
        const selectedCustomer = custSelect.value;
        if (masterData[selectedCustomer]) {
            masterData[selectedCustomer].forEach(item => {
                let opt = document.createElement('option');
                opt.value = item.part;
                opt.textContent = item.part;
                partSelect.appendChild(opt);
            });
        }
    }
    let customPartOpt = document.createElement('option');
    customPartOpt.value = "CUSTOM_NEW_PART";
    customPartOpt.textContent = "+ Tambah Part Baru...";
    partSelect.appendChild(customPartOpt);
}

function onPartChange(custSelectId, partSelectId, specInputId) {
    const custSelect = document.getElementById(custSelectId);
    const partSelect = document.getElementById(partSelectId);
    const specInput = document.getElementById(specInputId);
    const customPartContainer = document.getElementById(partSelectId.replace('Select', 'CustomContainer'));

    if (partSelect.value === "CUSTOM_NEW_PART") {
        customPartContainer?.classList.remove('hidden');
        specInput.value = '';
    } else {
        customPartContainer?.classList.add('hidden');
        const found = masterData[custSelect.value]?.find(item => item.part === partSelect.value);
        if (found) specInput.value = found.spec;
    }
}

// RENDER TABEL QC
function renderQcTable() {
    const tbody = document.getElementById('qcTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    const selectedDate = document.getElementById('qcDate')?.value;

    let filteredData = globalQcData.filter(item => item.date === selectedDate);
    let totalOk = 0, totalNg = 0, totalKg = 0;

    if (filteredData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="11" class="py-6 text-center text-red-500 font-bold">Tidak ada data QC untuk tanggal ${selectedDate}</td></tr>`;
    } else {
        filteredData.forEach((item) => {
            totalOk += Number(item.okPcs || 0);
            totalNg += Number(item.ngPcs || 0);
            totalKg += parseFloat(String(item.qtyKg || '0').replace(',', '.')) || 0;

            const photoHtml = item.photo ? `<a href="${item.photo}" target="_blank"><img src="${item.photo}" class="h-10 w-10 object-cover rounded-lg mx-auto border"></a>` : `-`;

            let tr = document.createElement('tr');
            tr.className = "hover:bg-slate-50 transition";
            tr.innerHTML = `
                <td class="py-3 px-4 text-center">
                    <button type="button" onclick="editQc('${item._id}')" class="p-1.5 bg-amber-100 text-amber-700 hover:bg-amber-200 rounded-lg mr-1"><i class="fa-solid fa-pen text-xs"></i></button>
                    <button type="button" onclick="deleteQc('${item._id}')" class="p-1.5 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg"><i class="fa-solid fa-trash text-xs"></i></button>
                </td>
                <td class="py-3 px-4">${item.date}</td>
                <td class="py-3 px-4 font-semibold">${item.pic}</td>
                <td class="py-3 px-4">${item.customer}</td>
                <td class="py-3 px-4 font-semibold text-slate-900">${item.part}</td>
                <td class="py-3 px-4 text-slate-500">${item.spec}</td>
                <td class="py-3 px-4 text-center font-bold text-emerald-600 bg-emerald-50/40">${item.okPcs} PCS</td>
                <td class="py-3 px-4 text-center font-bold text-red-600 bg-red-50/40">${item.ngPcs} PCS</td>
                <td class="py-3 px-4 text-right font-medium">${item.qtyKg}</td>
                <td class="py-3 px-4 text-center">${photoHtml}</td>
                <td class="py-3 px-4 text-slate-600">${item.note}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    document.getElementById('qcTotalOk').textContent = totalOk + " PCS";
    document.getElementById('qcTotalNg').textContent = totalNg + " PCS";
    document.getElementById('qcTotalKg').textContent = totalKg.toFixed(1) + " Kg";
}

function editQc(id) {
    let item = globalQcData.find(i => i._id === id);
    if (!item) return;

    document.getElementById('qcEditIndex').value = id;
    document.getElementById('qcDate').value = item.date;
    document.getElementById('qcPic').value = item.pic;
    document.getElementById('qcCustomerSelect').value = item.customer;
    onCustomerChange('qcCustomerSelect', 'qcPartSelect', 'qcSpec');
    document.getElementById('qcPartSelect').value = item.part;
    document.getElementById('qcSpec').value = item.spec;
    document.getElementById('qcQtyKg').value = item.qtyKg;
    document.getElementById('qcOkPcs').value = item.okPcs;
    document.getElementById('qcNgPcs').value = item.ngPcs;
    document.getElementById('qcNote').value = item.note;

    if (item.photo) {
        document.getElementById('qcPhotoBase64').value = item.photo;
        const imgPreview = document.getElementById('qcPhotoImg');
        if (imgPreview) imgPreview.src = item.photo;
        document.getElementById('qcPhotoPreview')?.classList.remove('hidden');
    }

    document.getElementById('qcEditBadge')?.classList.remove('hidden');
    document.getElementById('btnSaveQcText').textContent = "Perbarui Data QC";
}

async function deleteQc(id) {
    if (confirm("Yakin hapus data QC ini?")) {
        await fetch(`/api/qc/${id}`, { method: 'DELETE' });
        await fetchQcData();
    }
}

function resetQcForm() {
    document.getElementById('qcForm').reset();
    document.getElementById('qcEditIndex').value = "-1";
    document.getElementById('qcEditBadge')?.classList.add('hidden');
    document.getElementById('btnSaveQcText').textContent = "Simpan Data QC";
    document.getElementById('qcPhotoPreview')?.classList.add('hidden');
    document.getElementById('qcPhotoBase64').value = '';
}

// RENDER TABEL PRODUKSI
function renderProdTable() {
    const tbody = document.getElementById('prodTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    const selectedDate = document.getElementById('prodDate').value;

    let filteredData = globalProdData.filter(item => item.date === selectedDate);
    let totalKg = 0, totalAmpr = 0;

    if (filteredData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="14" class="py-6 text-center text-slate-400 italic">Tidak ada laporan Produksi untuk tanggal ${selectedDate}</td></tr>`;
    } else {
        filteredData.forEach((item) => {
            totalKg += parseFloat(String(item.qty || '0').replace(',', '.')) || 0;
            totalAmpr += parseFloat(String(item.ampr || '0').replace(',', '.')) || 0;

            const photoHtml = item.photo ? `<a href="${item.photo}" target="_blank"><img src="${item.photo}" class="h-10 w-10 object-cover rounded-lg mx-auto border"></a>` : `-`;

            let tr = document.createElement('tr');
            tr.className = "hover:bg-slate-50 transition";
            tr.innerHTML = `
                <td class="py-3 px-4 text-center">
                    <button type="button" onclick="editProd('${item._id}')" class="p-1.5 bg-amber-100 text-amber-700 hover:bg-amber-200 rounded-lg mr-1"><i class="fa-solid fa-pen text-xs"></i></button>
                    <button type="button" onclick="deleteProd('${item._id}')" class="p-1.5 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg"><i class="fa-solid fa-trash text-xs"></i></button>
                </td>
                <td class="py-3 px-4">${item.date}</td>
                <td class="py-3 px-4 font-semibold text-slate-700">${item.shift}</td>
                <td class="py-3 px-4 font-semibold">${item.pic}</td>
                <td class="py-3 px-4">${item.customer}</td>
                <td class="py-3 px-4 font-semibold text-slate-900">${item.part}</td>
                <td class="py-3 px-4 text-slate-500">${item.cromating}</td>
                <td class="py-3 px-4 text-right font-medium">${item.qty}</td>
                <td class="py-3 px-4 text-center">${item.barrel}</td>
                <td class="py-3 px-4 text-center">${item.ampr}</td>
                <td class="py-3 px-4 text-center">${item.timeIn}</td>
                <td class="py-3 px-4 text-center">${item.timeOut}</td>
                <td class="py-3 px-4 text-center">${photoHtml}</td>
                <td class="py-3 px-4 text-slate-600">${item.note}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    document.getElementById('prodTotalKg').textContent = totalKg.toFixed(1) + " Kg";
    document.getElementById('prodTotalBarrel').textContent = filteredData.length + " Barel";
    document.getElementById('prodTotalAmpr').textContent = totalAmpr;
}

function editProd(id) {
    let item = globalProdData.find(i => i._id === id);
    if (!item) return;

    document.getElementById('prodEditIndex').value = id;
    document.getElementById('prodDate').value = item.date;
    document.getElementById('prodShift').value = item.shift;
    document.getElementById('prodPic').value = item.pic;
    document.getElementById('prodCustomerSelect').value = item.customer;
    onCustomerChange('prodCustomerSelect', 'prodPartSelect', 'prodCromating');
    document.getElementById('prodPartSelect').value = item.part;
    document.getElementById('prodCromating').value = item.cromating;
    document.getElementById('prodQty').value = item.qty;
    document.getElementById('prodBarrel').value = item.barrel;
    document.getElementById('prodAmpr').value = item.ampr;
    document.getElementById('prodTimeIn').value = item.timeIn;
    document.getElementById('prodTimeOut').value = item.timeOut;
    document.getElementById('prodAdditive').value = item.additive || '';
    document.getElementById('prodNote').value = item.note;

    if (item.photo) {
        document.getElementById('prodPhotoBase64').value = item.photo;
        const imgPreview = document.getElementById('prodPhotoImg');
        if (imgPreview) imgPreview.src = item.photo;
        document.getElementById('prodPhotoPreview')?.classList.remove('hidden');
    }

    document.getElementById('prodEditBadge')?.classList.remove('hidden');
    document.getElementById('btnSaveProdText').textContent = "Perbarui Data Produksi";
}

async function deleteProd(id) {
    if (confirm("Yakin hapus data Produksi ini?")) {
        await fetch(`/api/produksi/${id}`, { method: 'DELETE' });
        await fetchProdData();
    }
}

function resetProdForm() {
    document.getElementById('prodForm').reset();
    document.getElementById('prodEditIndex').value = "-1";
    document.getElementById('prodEditBadge')?.classList.add('hidden');
    document.getElementById('btnSaveProdText').textContent = "Simpan Data Produksi";
    document.getElementById('prodPhotoPreview')?.classList.add('hidden');
    document.getElementById('prodPhotoBase64').value = '';
}
function clearPhotoPreview(previewContainerId, base64InputId, fileInputId, imgElementId) {
    // Sembunyikan kontainer preview
    const container = document.getElementById(previewContainerId);
    if (container) container.classList.add('hidden');

    // Kosongkan nilai input hidden & input file
    const base64Input = document.getElementById(base64InputId);
    if (base64Input) base64Input.value = '';

    const fileInput = document.getElementById(fileInputId);
    if (fileInput) fileInput.value = '';

    // Reset elemen img
    const imgElement = document.getElementById(imgElementId);
    if (imgElement) imgElement.src = '';
}