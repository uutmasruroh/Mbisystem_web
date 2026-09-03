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

const monthNamesIndo = [
    "januari", "februari", "maret", "april", "mei", "juni",
    "juli", "agustus", "september", "oktober", "november", "desember"
];

const monthNamesEng = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
];

// ==========================================
// HELPER FILE / FOTO
// ==========================================

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            resolve('');
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// ==========================================
// PREVIEW GAMBAR UPLOAD
// ==========================================

function previewImage(input, imgId, containerId) {
    const previewContainer = document.getElementById(containerId);
    const imgElement = document.getElementById(imgId);

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imgElement.src = e.target.result;
            previewContainer.classList.remove('hidden');
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        imgElement.src = '';
        previewContainer.classList.add('hidden');
    }
}

// ==========================================
// SIMPAN CUSTOMER / PART BARU
// ==========================================

function saveCustomToMasterData(customer, part, spec) {
    if (!customer || !part) return;

    if (!masterData[customer]) {
        masterData[customer] = [];
    }

    const exists = masterData[customer].some(
        item => item.part.toLowerCase() === part.toLowerCase()
    );

    if (!exists) {
        masterData[customer].push({
            part: part,
            spec: spec || '-'
        });
    }

    loadCustomerOptions('qcCustomerSelect');
    loadCustomerOptions('prodCustomerSelect');
}

// ==========================================
// 2. INISIALISASI DASBOR
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
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

    renderQcTable();
    renderProdTable();
});

// ==========================================
// 3. NAVIGASI TAB UTAMA
// ==========================================

function switchTab(tabName) {
    const qcView = document.getElementById('qcView');
    const produksiView = document.getElementById('produksiView');
    const navQcBtnMobile = document.getElementById('navQcBtnMobile');
    const navProdBtnMobile = document.getElementById('navProdBtnMobile');
    const navQcBtnDesktop = document.getElementById('navQcBtnDesktop');
    const navProdBtnDesktop = document.getElementById('navProdBtnDesktop');

    if (tabName === 'qc') {
        if (qcView) qcView.classList.remove('hidden');
        if (produksiView) produksiView.classList.add('hidden');

        if (navQcBtnDesktop && navProdBtnDesktop) {
            navQcBtnDesktop.className = "px-4 py-2 rounded-xl font-bold text-xs transition-all bg-red-600 text-white shadow-md";
            navProdBtnDesktop.className = "px-4 py-2 rounded-xl font-bold text-xs transition-all text-slate-300 hover:text-white";
        }

        if (navQcBtnMobile && navProdBtnMobile) {
            navQcBtnMobile.className = "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold text-xs transition-all bg-red-600 text-white text-left shadow-md";
            navProdBtnMobile.className = "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold text-xs transition-all text-slate-300 hover:bg-white/10 hover:text-white text-left";
        }

        renderQcTable();
    } else {
        if (produksiView) produksiView.classList.remove('hidden');
        if (qcView) qcView.classList.add('hidden');

        if (navQcBtnDesktop && navProdBtnDesktop) {
            navQcBtnDesktop.className = "px-4 py-2 rounded-xl font-bold text-xs transition-all text-slate-300 hover:text-white";
            navProdBtnDesktop.className = "px-4 py-2 rounded-xl font-bold text-xs transition-all bg-red-600 text-white shadow-md";
        }

        if (navQcBtnMobile && navProdBtnMobile) {
            navQcBtnMobile.className = "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold text-xs transition-all text-slate-300 hover:bg-white/10 hover:text-white text-left";
            navProdBtnMobile.className = "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold text-xs transition-all bg-red-600 text-white text-left shadow-md";
        }

        renderProdTable();
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// ==========================================
// 4. DROPDOWN DINAMIS
// ==========================================

function loadCustomerOptions(selectId) {
    const select = document.getElementById(selectId);
    if (!select) return;

    const currentVal = select.value;
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

    if (currentVal) {
        select.value = currentVal;
    }
}

function onCustomerChange(custSelectId, partSelectId, specInputId) {
    const custSelect = document.getElementById(custSelectId);
    const partSelect = document.getElementById(partSelectId);
    const customCustContainer = document.getElementById(custSelectId.replace('Select', 'CustomContainer'));

    partSelect.innerHTML = '<option value=""> Pilih Nama Part </option>';
    document.getElementById(specInputId).value = '';

    if (custSelect.value === "CUSTOM_NEW") {
        if (customCustContainer) customCustContainer.classList.remove('hidden');

        let customPartOpt = document.createElement('option');
        customPartOpt.value = "CUSTOM_NEW_PART";
        customPartOpt.textContent = "+ Tambah Part Baru...";
        partSelect.appendChild(customPartOpt);
    } else {
        if (customCustContainer) customCustContainer.classList.add('hidden');

        const selectedCustomer = custSelect.value;
        if (masterData[selectedCustomer]) {
            masterData[selectedCustomer].forEach(item => {
                let opt = document.createElement('option');
                opt.value = item.part;
                opt.textContent = item.part;
                partSelect.appendChild(opt);
            });
        }

        let customPartOpt = document.createElement('option');
        customPartOpt.value = "CUSTOM_NEW_PART";
        customPartOpt.textContent = "+ Tambah Part Baru...";
        partSelect.appendChild(customPartOpt);
    }
}

function onPartChange(custSelectId, partSelectId, specInputId) {
    const custSelect = document.getElementById(custSelectId);
    const partSelect = document.getElementById(partSelectId);
    const specInput = document.getElementById(specInputId);
    const customPartContainer = document.getElementById(partSelectId.replace('Select', 'CustomContainer'));

    if (partSelect.value === "CUSTOM_NEW_PART") {
        if (customPartContainer) customPartContainer.classList.remove('hidden');
        specInput.value = '';
    } else {
        if (customPartContainer) customPartContainer.classList.add('hidden');

        const customer = custSelect.value;
        const part = partSelect.value;

        if (masterData[customer]) {
            const found = masterData[customer].find(item => item.part === part);
            if (found) {
                specInput.value = found.spec;
            }
        }
    }
}

// ==========================================
// 5. FORM LAPORAN QC HARIAN
// ==========================================

document.addEventListener('DOMContentLoaded', function () {

    const qcForm = document.getElementById('qcForm');

    if (qcForm) {
        qcForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            console.log("SUBMIT QC BERHASIL DIPANGGIL");
        e.preventDefault();
        let customer = document.getElementById('qcCustomerSelect').value;
        if (customer === "CUSTOM_NEW") {
            customer = document.getElementById('qcCustomerCustom').value;
        }

        let part = document.getElementById('qcPartSelect').value;
        if (part === "CUSTOM_NEW_PART") {
            part = document.getElementById('qcPartCustom').value;
        }

        const spec = document.getElementById('qcSpec').value;
        if (typeof saveCustomToMasterData === 'function') {
        saveCustomToMasterData(customer, part, spec);
        }


        // FOTO QC
        let photoBase64 = document.getElementById('qcPhotoBase64')?.value || '';
        const photoInput = document.getElementById('qcPhoto');

        if (!photoBase64 && photoInput && photoInput.files[0]) {
            photoBase64 = await fileToBase64(photoInput.files[0]);
        }

        let qcData = JSON.parse(localStorage.getItem('mbi_qc_data') || '[]');
        const editIndex = parseInt(document.getElementById('qcEditIndex').value);

        if (editIndex > -1 && !photoBase64 && qcData[editIndex]) {
            photoBase64 = qcData[editIndex].photo || '';
        }

       const dataItem = {
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
        if (editIndex > -1) {
            qcData[editIndex] = dataItem;
            document.getElementById('qcEditIndex').value = "-1";
        } else {
            qcData.push(dataItem);
        }

        localStorage.setItem('mbi_qc_data', JSON.stringify(qcData));
        resetQcForm();
        renderQcTable();
    });
 }
});

// ==========================================
// RENDER TABEL QC
// ==========================================

function renderQcTable() {
    const tbody = document.getElementById('qcTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    // 1. Ambil elemen tanggal secara fleksibel (aman dari beda ID)
    const dateInput =
    document.getElementById('qcDate') ||
    document.getElementById('tanggalQc');
    let selectedDate = dateInput ? dateInput.value : '';

    // Kalau kosong, otomatis set ke tanggal hari ini 
    if (!selectedDate) {
    const today = new Date().toISOString().split('T')[0];
    selectedDate = today;

    if (dateInput) {
        dateInput.value = selectedDate;
    }
}

    let qcData = JSON.parse(localStorage.getItem('mbi_qc_data') || '[]');

    // 2. Ambil data, petakan indeks aslinya, lalu filter berdasarkan tanggal
    let filteredData = qcData
        .map((item, originalIndex) => ({ ...item, originalIndex }))
        .filter(item => {
            const itemDate = item.date ? String(item.date).split('T')[0] : '';
            return itemDate === String(selectedDate).split('T')[0];
        });

    let totalOk = 0;
    let totalNg = 0;
    let totalKg = 0;

    if (filteredData.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="11" class="py-6 text-center text-red-500 font-bold">
                    Tidak ada data QC untuk tanggal ${selectedDate}
                </td>
            </tr>
        `;
    } else {
        filteredData.forEach((item) => {
            totalOk += Number(item.okPcs || 0);
            totalNg += Number(item.ngPcs || 0);
            totalKg += parseFloat(String(item.qtyKg || '0').replace(',', '.')) || 0;

            const photoHtml = item.photo ? `
                <a href="${item.photo}" target="_blank">
                    <img src="${item.photo}" class="h-10 w-10 object-cover rounded-lg mx-auto border border-slate-200 hover:scale-110 transition">
                </a>
            ` : `<span class="text-slate-400 font-normal italic">-</span>`;

            let tr = document.createElement('tr');
            tr.className = "hover:bg-slate-50 transition";
            tr.innerHTML = `
                <td class="py-3 px-4 text-center">
                    <button type="button"
    onclick="editQc(${item.originalIndex})"
    class="p-1.5 bg-amber-100 text-amber-700 hover:bg-amber-200 rounded-lg mr-1"
    title="Edit">
    <i class="fa-solid fa-pen text-xs"></i>
</button>

<button type="button"
    onclick="deleteQc(${item.originalIndex})"
    class="p-1.5 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg"
    title="Hapus">
    <i class="fa-solid fa-trash text-xs"></i>
</button>
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

    // 3. Update Total Otomatis ke Bagian Bawah Tabel
    const elOk = document.getElementById('qcTotalOk');
    const elNg = document.getElementById('qcTotalNg');
    const elKg = document.getElementById('qcTotalKg');

    if (elOk) elOk.textContent = totalOk + " PCS";
    if (elNg) elNg.textContent = totalNg + " PCS";
    if (elKg) elKg.textContent = totalKg.toFixed(1) + " Kg";
}
// ==========================================
// FUNGSI EDIT QC
// ==========================================
function editQc(index) {
    let qcData = JSON.parse(localStorage.getItem('mbi_qc_data') || '[]');
    let item = qcData[index];
    if (!item) return;

    document.getElementById('qcEditIndex').value = index;
    document.getElementById('qcDate').value = item.date;
    document.getElementById('qcPic').value = item.pic;

    if (typeof masterData !== 'undefined' && !masterData[item.customer]) {
        if (typeof saveCustomToMasterData === 'function') {
            saveCustomToMasterData(item.customer, item.part, item.spec);
        }
    }

    document.getElementById('qcCustomerSelect').value = item.customer;
    if (typeof onCustomerChange === 'function') {
        onCustomerChange('qcCustomerSelect', 'qcPartSelect', 'qcSpec');
    }

    document.getElementById('qcPartSelect').value = item.part;
    document.getElementById('qcSpec').value = item.spec;
    document.getElementById('qcQtyKg').value = item.qtyKg;
    document.getElementById('qcOkPcs').value = item.okPcs;
    document.getElementById('qcNgPcs').value = item.ngPcs;
    document.getElementById('qcNote').value = item.note;

    // FOTO QC SAAT EDIT
    const imgPreview = document.querySelector('#qcPhotoPreview img');
    const containerPreview = document.getElementById('qcPhotoPreview');
    const photoBase64Input = document.getElementById('qcPhotoBase64');

    if (photoBase64Input) photoBase64Input.value = item.photo || '';

    if (item.photo && imgPreview && containerPreview) {
        imgPreview.src = item.photo;
        containerPreview.classList.remove('hidden');
        containerPreview.classList.add('flex');
    } else if (containerPreview && imgPreview) {
        imgPreview.src = '';
        containerPreview.classList.add('hidden');
        containerPreview.classList.remove('flex');
    }

    const editBadge = document.getElementById('qcEditBadge');
    const saveText = document.getElementById('btnSaveQcText');
    if (editBadge) editBadge.classList.remove('hidden');
    if (saveText) saveText.textContent = "Perbarui Data QC";

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// RESET FORM QC
// ==========================================

function resetQcForm() {
    document.getElementById('qcForm').reset();
    document.getElementById('qcEditIndex').value = "-1";
    document.getElementById('qcEditBadge').classList.add('hidden');
    document.getElementById('btnSaveQcText').textContent = "Simpan Data QC";
    document.getElementById('qcCustomerCustomContainer').classList.add('hidden');
    document.getElementById('qcPartCustomContainer').classList.add('hidden');

    const previewContainer = document.getElementById('qcPhotoPreview');
    if (previewContainer) {
        previewContainer.classList.add('hidden');
        previewContainer.classList.remove('flex');
    }

    const qcPhotoBase64 = document.getElementById('qcPhotoBase64');
    if (qcPhotoBase64) qcPhotoBase64.value = '';

    const qcPhotoInput = document.getElementById('qcPhoto');
    if (qcPhotoInput) qcPhotoInput.value = '';

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('qcDate').value = today;
}

// ==========================================
// FUNGSI DELETE QC
// ==========================================
function deleteQc(targetIndex) {
    if (confirm("Apakah Anda yakin ingin menghapus data QC ini?")) {
        let qcData = JSON.parse(localStorage.getItem('mbi_qc_data') || '[]');
        
        if (targetIndex !== undefined && targetIndex >= 0 && targetIndex < qcData.length) {
            qcData.splice(targetIndex, 1);
            localStorage.setItem('mbi_qc_data', JSON.stringify(qcData));
            if (typeof renderQcTable === 'function') {
                renderQcTable();
            }
        } else {
            alert("Gagal menghapus: Indeks data tidak valid!");
        }
    }
}

// ==========================================
// HUBUNGKAN FORM PRODUKSI KE FUNGSI SIMPAN
// ==========================================

document.addEventListener('DOMContentLoaded', function () {

    const prodForm = document.getElementById('prodForm');

    if (prodForm) {
        prodForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Jalankan fungsi simpan produksi
            simpanDataProduksiManual(e);
        });
    }

});
// ==========================================
// SIMPAN DATA PRODUKSI MANUAL (ANTI MACET)
// ==========================================
function simpanDataProduksiManual(e) {
    if (e) e.preventDefault();
    try {
        let customer = document.getElementById('prodCustomerSelect')?.value || '';
        let part = document.getElementById('prodPartSelect')?.value || '';
        let date = document.getElementById('prodDate')?.value;
        let shift = document.getElementById('prodShift')?.value;
        let pic = document.getElementById('prodPic')?.value;

        // Validasi wajib isi
        if (!date || !shift || !pic || !customer || !part) {
            alert('Mohon lengkapi data utama terlebih dahulu (Tanggal, Shift, PIC, Customer, dan Part Name)!');
            return;
        }

        const cromating = document.getElementById('prodCromating')?.value || '';
        let photoBase64 = document.getElementById('prodPhotoBase64')?.value || '';
        let prodData = JSON.parse(localStorage.getItem('mbi_prod_data') || '[]');
        const editIndex = parseInt(document.getElementById('prodEditIndex')?.value || "-1", 10);

        if (editIndex > -1 && !photoBase64 && prodData[editIndex]) {
            photoBase64 = prodData[editIndex].photo || '';
        }

        const dataItem = {
            date: date,
            shift: shift,
            pic: pic,
            customer: customer,
            part: part,
            cromating: cromating,
            qty: document.getElementById('prodQty')?.value || '0',
            barrel: document.getElementById('prodBarrel')?.value || '1',
            ampr: document.getElementById('prodAmpr')?.value || '0',
            timeIn: document.getElementById('prodTimeIn')?.value || '',
            timeOut: document.getElementById('prodTimeOut')?.value || '',
            additive: document.getElementById('prodAdditive')?.value || '',
            note: document.getElementById('prodNote')?.value || '',
            photo: photoBase64
        };

        if (editIndex > -1) {
            prodData[editIndex] = dataItem;
            document.getElementById('prodEditIndex').value = "-1";
        } else {
            prodData.push(dataItem);
        }

        localStorage.setItem('mbi_prod_data', JSON.stringify(prodData));
        
        if (typeof resetProdForm === 'function') resetProdForm();
        if (typeof renderProdTable === 'function') renderProdTable();
        
        alert('Data produksi berhasil disimpan!');
    } catch (err) {
        console.error("Error saving:", err);
        alert("Terjadi error: " + err.message);
    }
}
// ==========================================
// RENDER TABEL PRODUKSI
// ==========================================

function renderProdTable() {
    const tbody = document.getElementById('prodTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    const selectedDate = document.getElementById('prodDate').value;

    let prodData = JSON.parse(localStorage.getItem('mbi_prod_data') || '[]');
    let filteredData = prodData
        .map((item, originalIndex) => ({ ...item, originalIndex }))
        .filter(item => item.date === selectedDate);

    let totalKg = 0;
    let totalBarrelCount = filteredData.length;
    let totalAmpr = 0;

    if (filteredData.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="16" class="py-6 text-center text-slate-400 font-medium italic">
                    Tidak ada laporan Produksi untuk tanggal ${selectedDate}
                </td>
            </tr>
            
        `;
    } else {
        filteredData.forEach((item, index) => {
            totalKg += parseFloat(String(item.qty || '0').replace(',', '.')) || 0;
            totalAmpr += parseFloat(String(item.ampr || '0').replace(',', '.')) || 0;

            const photoHtml = item.photo ? `
                <a href="${item.photo}" target="_blank" title="Lihat foto">
                    <img src="${item.photo}" class="h-10 w-10 object-cover rounded-lg mx-auto border border-slate-200 hover:scale-110 transition">
                </a>
            ` : `<span class="text-slate-400 font-normal italic">-</span>`;

           let tr = document.createElement('tr');
            tr.className = "hover:bg-slate-50 transition";
            tr.innerHTML = `
                <td class="py-3 px-4 text-center">
                    <button type="button" onclick="editProd(${item.originalIndex})" class="p-1.5 bg-amber-100 text-amber-700 hover:bg-amber-200 rounded-lg mr-1" title="Edit">
                        <i class="fa-solid fa-pen text-xs"></i>
                    </button>
                    <button type="button" onclick="deleteProd(${item.originalIndex})" class="p-1.5 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg" title="Hapus">
                        <i class="fa-solid fa-trash text-xs"></i>
                    </button>
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
    document.getElementById('prodTotalBarrel').textContent = totalBarrelCount + " Barel";
    document.getElementById('prodTotalAmpr').textContent = totalAmpr;
}

// ==========================================
// EDIT PRODUKSI
// ==========================================

function editProd(index) {
    let prodData = JSON.parse(localStorage.getItem('mbi_prod_data') || '[]');
    let item = prodData[index];
    if (!item) return;

    // Pengisian form dengan pengecekan aman (?.value)
    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val !== undefined && val !== null ? val : '';
    };

    setVal('prodEditIndex', index);
    setVal('prodDate', item.date);
    setVal('prodShift', item.shift);
    setVal('prodPic', item.pic);

    if (item.customer && !masterData[item.customer]) {
        saveCustomToMasterData(item.customer, item.part, item.cromating);
    }

    setVal('prodCustomerSelect', item.customer);
    if (typeof onCustomerChange === 'function') {
        onCustomerChange('prodCustomerSelect', 'prodPartSelect', 'prodCromating');
    }

    setVal('prodPartSelect', item.part);
    setVal('prodCromating', item.cromating);
    setVal('prodQty', item.qty);
    setVal('prodBarrel', item.barrel);
    setVal('prodAmpr', item.ampr);
    setVal('prodTimeIn', item.timeIn);
    setVal('prodTimeOut', item.timeOut);
    setVal('prodAdditive', item.additive); // Aman meskipun input prodAdditive tidak ada di HTML
    setVal('prodNote', item.note);

    // FOTO PRODUKSI SAAT EDIT
    const imgPreview = document.getElementById('prodPhotoImg');
    const containerPreview = document.getElementById('prodPhotoPreview');
    const photoBase64Input = document.getElementById('prodPhotoBase64');

    if (photoBase64Input) photoBase64Input.value = item.photo || '';

    if (item.photo && imgPreview) {
        imgPreview.src = item.photo;
        if (containerPreview) {
            containerPreview.classList.remove('hidden');
            containerPreview.classList.add('flex');
        }
    } else {
        if (imgPreview) imgPreview.src = '';
        if (containerPreview) {
            containerPreview.classList.add('hidden');
            containerPreview.classList.remove('flex');
        }
    }

    const editBadge = document.getElementById('prodEditBadge');
    if (editBadge) editBadge.classList.remove('hidden');

    const btnSaveText = document.getElementById('btnSaveProdText');
    if (btnSaveText) btnSaveText.textContent = "Perbarui Data Produksi";

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// ==========================================
// RESET FORM PRODUKSI
// ==========================================

function resetProdForm() {
    document.getElementById('prodForm').reset();
    document.getElementById('prodEditIndex').value = "-1";
    document.getElementById('prodEditBadge').classList.add('hidden');
    document.getElementById('btnSaveProdText').textContent = "Simpan Data Produksi";
    document.getElementById('prodCustomerCustomContainer').classList.add('hidden');
    document.getElementById('prodPartCustomContainer').classList.add('hidden');

    const previewContainer = document.getElementById('prodPhotoPreview');
    if (previewContainer) {
        previewContainer.classList.add('hidden');
        previewContainer.classList.remove('flex');
    }

    const imgPreview = document.getElementById('prodPhotoImg');
    if (imgPreview) imgPreview.src = '';

    const photoBase64 = document.getElementById('prodPhotoBase64');
    if (photoBase64) photoBase64.value = '';

    const photoInput = document.getElementById('prodPhoto');
    if (photoInput) photoInput.value = '';

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('prodDate').value = today;
}

// ==========================================
// DELETE PRODUKSI
// ==========================================

function deleteProd(index) {
    if (confirm("Apakah Anda yakin ingin menghapus data produksi ini?")) {
        let prodData = JSON.parse(localStorage.getItem('mbi_prod_data') || '[]');
        prodData.splice(index, 1);
        localStorage.setItem('mbi_prod_data', JSON.stringify(prodData));
        renderProdTable();
    }
}

// ==========================================
// 7. ARSIP RIWAYAT HARIAN
// ==========================================

function openRiwayatModal(type) {
    const modalId = type === 'qc' ? 'riwayatQcModal' : 'riwayatProdModal';
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('hidden');
    renderRiwayatTable(type === 'qc' ? 'qc' : 'produksi');
}

function closeRiwayatModal(type) {
    const modalId = type === 'qc' ? 'riwayatQcModal' : 'riwayatProdModal';
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
}

// ==========================================
// FILTER TANGGAL
// ==========================================

function handleDateFilterChange(type) {
    const monthFilterId = type === 'qc' ? 'riwayatQcMonthFilter' : 'riwayatProdMonthFilter';
    const monthFilter = document.getElementById(monthFilterId);
    if (monthFilter) monthFilter.value = '';
    renderRiwayatTable(type);
}

// ==========================================
// FILTER BULAN
// ==========================================

function handleMonthFilterChange(type) {
    const dateFilterId = type === 'qc' ? 'riwayatQcDateFilter' : 'riwayatProdDateFilter';
    const dateFilter = document.getElementById(dateFilterId);
    if (dateFilter) dateFilter.value = '';
    renderRiwayatTable(type);
}

// ==========================================
// RESET FILTER RIWAYAT
// ==========================================

function resetRiwayatFilter(type) {
    const dateFilterId = type === 'qc' ? 'riwayatQcDateFilter' : 'riwayatProdDateFilter';
    const monthFilterId = type === 'qc' ? 'riwayatQcMonthFilter' : 'riwayatProdMonthFilter';

    const dateFilter = document.getElementById(dateFilterId);
    const monthFilter = document.getElementById(monthFilterId);

    if (dateFilter) dateFilter.value = '';
    if (monthFilter) monthFilter.value = '';

    renderRiwayatTable(type);
}

// ==========================================
// DETAIL CARD RIWAYAT
// ==========================================

function toggleRiwayatCardDetails(cardId) {
    const detailBox = document.getElementById('detail-' + cardId);
    const icon = document.getElementById('icon-' + cardId);

    if (detailBox) {
        detailBox.classList.toggle('hidden');
        if (icon) icon.classList.toggle('rotate-180');
    }
}

// ==========================================
// CARI NOMOR BULAN
// ==========================================

function getMonthNumberFromQuery(query) {
    const cleanQuery = String(query || '').toLowerCase().trim();
    if (!cleanQuery) return null;

    const num = parseInt(cleanQuery, 10);
    if (!isNaN(num) && num >= 1 && num <= 12) return num;

    for (let i = 0; i < monthNamesIndo.length; i++) {
        if (monthNamesIndo[i].startsWith(cleanQuery)) return i + 1;
    }

    for (let i = 0; i < monthNamesEng.length; i++) {
        if (monthNamesEng[i].startsWith(cleanQuery)) return i + 1;
    }

    return null;
}

// ==========================================
// TOMBOL EXCEL DINAMIS
// ==========================================

function updateDynamicExcelButton(type, filterDate, monthQuery, dataCount) {
    const containerId = type === 'qc' ? 'dynamicExcelQcContainer' : 'dynamicExcelProdContainer';
    const labelId = type === 'qc' ? 'dynamicExcelQcLabel' : 'dynamicExcelProdLabel';
    const btnTextId = type === 'qc' ? 'dynamicExcelQcBtnText' : 'dynamicExcelProdBtnText';

    const container = document.getElementById(containerId);
    const label = document.getElementById(labelId);
    const btnText = document.getElementById(btnTextId);

    if (!container || !label || !btnText) return;

    const isFilterActive = (filterDate !== '' || monthQuery !== '');

    if (isFilterActive && dataCount > 0) {
        let labelDesc = filterDate 
            ? `Tanggal ${filterDate}` 
            : `Bulan ${monthQuery.charAt(0).toUpperCase() + monthQuery.slice(1)}`;

        label.textContent = `Rekap Data ${labelDesc} (${dataCount} Data)`;
        btnText.textContent = `Unduh Rekap Excel ${labelDesc}`;

        container.classList.remove('hidden');
        container.classList.add('flex');
    } else {
        container.classList.add('hidden');
        container.classList.remove('flex');
    }
}

// ==========================================
// RENDER RIWAYAT
// ==========================================

function renderRiwayatTable(type) {
    const containerId = type === 'qc' ? 'riwayatQcContainer' : 'riwayatProdContainer';
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const filterDateId = type === 'qc' ? 'riwayatQcDateFilter' : 'riwayatProdDateFilter';
    const monthQueryId = type === 'qc' ? 'riwayatQcMonthFilter' : 'riwayatProdMonthFilter';

    const filterDate = document.getElementById(filterDateId)?.value || '';
    const monthQuery = document.getElementById(monthQueryId)?.value.trim() || '';
    const storageKey = type === 'qc' ? 'mbi_qc_data' : 'mbi_prod_data';

    let dataList = JSON.parse(localStorage.getItem(storageKey) || '[]');
    let grouped = {};

    dataList.forEach(item => {
        if (!grouped[item.date]) grouped[item.date] = [];
        grouped[item.date].push(item);
    });

    let dates = Object.keys(grouped).sort((a, b) => new Date(b) - new Date(a));

    if (filterDate) {
        dates = dates.filter(d => d === filterDate);
    } else if (monthQuery) {
        const targetMonth = getMonthNumberFromQuery(monthQuery);
        dates = dates.filter(d => {
            const parts = d.split('-');
            if (parts.length >= 2) {
                const monthNum = parseInt(parts[1], 10);
                if (targetMonth !== null) return monthNum === targetMonth;
                return d.includes(monthQuery);
            }
            return false;
        });
    }

    let totalFilteredRecords = 0;
    dates.forEach(d => { totalFilteredRecords += grouped[d].length; });

    updateDynamicExcelButton(type, filterDate, monthQuery, totalFilteredRecords);

    if (dates.length === 0) {
        container.innerHTML = `
            <div class="py-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-300 shadow-sm">
                <i class="fa-solid fa-folder-open text-4xl mb-3 text-slate-300"></i>
                <p class="text-sm font-bold text-slate-600">
                    Tidak ada arsip riwayat harian ${type.toUpperCase()}
                </p>
                <p class="text-xs text-slate-400 mt-1">
                    Gunakan filter tanggal atau ketik bulan untuk melihat rekap
                </p>
            </div>
        `;
        return;
    }

    dates.forEach((dateStr, idx) => {
        let items = grouped[dateStr];
        const cardId = `${type}-card-${idx}`;
        let cardHtml = '';

        if (type === 'qc') {
            let totalKg = items.reduce((acc, i) => acc + (parseFloat(String(i.qtyKg || '0').replace(',', '.')) || 0), 0);
            let rowsHtml = items.map((i, iIdx) => {
                const photoHtml = i.photo ? `
                    <a href="${i.photo}" target="_blank">
                        <img src="${i.photo}" class="h-8 w-8 object-cover rounded mx-auto border border-slate-200">
                    </a>
                ` : `-`;

                return `
                    <tr class="border-b border-slate-100 hover:bg-slate-50/80 transition">
                        <td class="py-2.5 px-3 text-center text-slate-400 font-bold">${iIdx + 1}</td>
                        <td class="py-2.5 px-3 text-center">${photoHtml}</td>
                        <td class="py-2.5 px-3 font-semibold text-slate-800">${i.pic || '-'}</td>
                        <td class="py-2.5 px-3 text-slate-700">${i.customer || '-'}</td>
                        <td class="py-2.5 px-3 font-semibold text-slate-900">${i.part || '-'}</td>
                        <td class="py-2.5 px-3 text-slate-500">${i.spec || '-'}</td>
                        <td class="py-2.5 px-3 text-center font-bold text-emerald-600 bg-emerald-50/30">${i.okPcs} PCS</td>
                        <td class="py-2.5 px-3 text-center font-bold text-red-600 bg-red-50/30">${i.ngPcs} PCS</td>
                        <td class="py-2.5 px-3 text-right font-medium">${i.qtyKg || 0} Kg</td>
                        <td class="py-2.5 px-3 text-slate-500">${i.note || '-'}</td>
                    </tr>
                `;
            }).join('');

            cardHtml = `
                <div class="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden hover:border-slate-300 transition">
                    <div class="p-4 flex flex-wrap items-center justify-between gap-3 bg-slate-50/70 border-b border-slate-100">
                        <div class="flex items-center gap-3 cursor-pointer select-none" onclick="toggleRiwayatCardDetails('${cardId}')">
                            <div class="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm shadow-xs">
                                <i class="fa-regular fa-calendar-check"></i>
                            </div>
                            <div>
                                <h4 class="text-xs sm:text-sm font-bold text-slate-900">${dateStr}</h4>
                                <p class="text-[11px] text-slate-500 font-medium">${items.length} Record QC</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 text-xs">
                            <span class="px-3 py-1 bg-amber-100/80 text-amber-800 rounded-lg font-bold border border-amber-200/50">
                                Total: ${totalKg.toFixed(1)} Kg
                            </span>
                            <button type="button" onclick="toggleRiwayatCardDetails('${cardId}')" class="p-1.5 bg-slate-200/80 hover:bg-slate-300 text-slate-600 rounded-xl transition">
                                <i id="icon-${cardId}" class="fa-solid fa-chevron-down text-xs transition-transform duration-200"></i>
                            </button>
                        </div>
                    </div>
                    <div id="detail-${cardId}" class="hidden p-3 bg-white">
                        <div class="overflow-x-auto rounded-xl border border-slate-200">
                            <table class="w-full text-left text-[11px] whitespace-nowrap">
                                <thead class="bg-slate-50 text-slate-600 font-bold uppercase border-b border-slate-200">
                                    <tr>
                                        <th class="py-2.5 px-3 text-center">No</th>
                                        <th class="py-2.5 px-3 text-center">Foto Label</th>
                                        <th class="py-2.5 px-3">PIC</th>
                                        <th class="py-2.5 px-3">Customer</th>
                                        <th class="py-2.5 px-3">Nama Part</th>
                                        <th class="py-2.5 px-3">Spec</th>
                                        <th class="py-2.5 px-3 text-center">Qty OK</th>
                                        <th class="py-2.5 px-3 text-center">Qty NG</th>
                                        <th class="py-2.5 px-3 text-right">QTY (Kg)</th>
                                        <th class="py-2.5 px-3">Keterangan</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-100">${rowsHtml}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
        } else {
            let totalKg = items.reduce((acc, i) => acc + (parseFloat(String(i.qty || '0').replace(',', '.')) || 0), 0);
            let rowsHtml = items.map((i, iIdx) => {
                const photoHtml = i.photo ? `
                    <a href="${i.photo}" target="_blank">
                        <img src="${i.photo}" class="h-8 w-8 object-cover rounded mx-auto border border-slate-200">
                    </a>
                ` : `-`;

                return `
                    <tr class="border-b border-slate-100 hover:bg-slate-50/80 transition">
                        <td class="py-2.5 px-3 text-center text-slate-400 font-bold">${iIdx + 1}</td>
                        <td class="py-2.5 px-3 text-center">${photoHtml}</td>
                        <td class="py-2.5 px-3 font-medium text-slate-700">${i.shift || '-'}</td>
                        <td class="py-2.5 px-3 font-semibold text-slate-800">${i.pic || '-'}</td>
                        <td class="py-2.5 px-3 text-slate-700">${i.customer || '-'}</td>
                        <td class="py-2.5 px-3 font-semibold text-slate-900">${i.part || '-'}</td>
                        <td class="py-2.5 px-3 text-slate-500">${i.cromating || '-'}</td>
                        <td class="py-2.5 px-3 text-right font-medium">${i.qty || 0} Kg</td>
                        <td class="py-2.5 px-3 text-center font-bold text-slate-700">${i.barrel || '-'}</td>
                        <td class="py-2.5 px-3 text-center text-slate-700">${i.ampr || '-'}</td>
                        <td class="py-2.5 px-3 text-center text-slate-500">${i.timeIn || '-'} / ${i.timeOut || '-'}</td>
                        <td class="py-2.5 px-3 text-slate-600">${i.additive || '-'}</td>
                        <td class="py-2.5 px-3 text-slate-500">${i.note || '-'}</td>
                    </tr>
                `;
            }).join('');

            cardHtml = `
                <div class="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden hover:border-slate-300 transition">
                    <div class="p-4 flex flex-wrap items-center justify-between gap-3 bg-slate-50/70 border-b border-slate-100">
                        <div class="flex items-center gap-3 cursor-pointer select-none" onclick="toggleRiwayatCardDetails('${cardId}')">
                            <div class="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm shadow-xs">
                                <i class="fa-regular fa-calendar-check"></i>
                            </div>
                            <div>
                                <h4 class="text-xs sm:text-sm font-bold text-slate-900">${dateStr}</h4>
                                <p class="text-[11px] text-slate-500 font-medium">${items.length} Barel / Proses Produksi</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 text-xs">
                            <span class="px-3 py-1 bg-amber-100/80 text-amber-800 rounded-lg font-bold border border-amber-200/50">
                                Total: ${totalKg.toFixed(1)} Kg
                            </span>
                            <button type="button" onclick="toggleRiwayatCardDetails('${cardId}')" class="p-1.5 bg-slate-200/80 hover:bg-slate-300 text-slate-600 rounded-xl transition">
                                <i id="icon-${cardId}" class="fa-solid fa-chevron-down text-xs transition-transform duration-200"></i>
                            </button>
                        </div>
                    </div>
                    <div id="detail-${cardId}" class="hidden p-3 bg-white">
                        <div class="overflow-x-auto rounded-xl border border-slate-200">
                            <table class="w-full text-left text-[11px] whitespace-nowrap">
                                <thead class="bg-slate-50 text-slate-600 font-bold uppercase border-b border-slate-200">
                                    <tr>
                                        <th class="py-2.5 px-3 text-center">No</th>
                                        <th class="py-2.5 px-3 text-center">Foto Label</th>
                                        <th class="py-2.5 px-3">Shift</th>
                                        <th class="py-2.5 px-3">PIC Operator</th>
                                        <th class="py-2.5 px-3">Customer</th>
                                        <th class="py-2.5 px-3">Part Name</th>
                                        <th class="py-2.5 px-3">Cromating</th>
                                        <th class="py-2.5 px-3 text-right">QTY (Kg)</th>
                                        <th class="py-2.5 px-3 text-center">Barrel</th>
                                        <th class="py-2.5 px-3 text-center">AMPR</th>
                                        <th class="py-2.5 px-3 text-center">IN / OUT</th>
                                        <th class="py-2.5 px-3">Aditif</th>
                                        <th class="py-2.5 px-3">Keterangan</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-100">${rowsHtml}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
        }

        container.innerHTML += cardHtml;
    });
}

// ==========================================
// 8. EXPORT EXCEL
// ==========================================
function exportMonthlyExcel(type) {
    const filterDateId = type === 'qc' ? 'riwayatQcDateFilter' : 'riwayatProdDateFilter';
    const monthQueryId = type === 'qc' ? 'riwayatQcMonthFilter' : 'riwayatProdMonthFilter';

    const filterDate = document.getElementById(filterDateId)?.value || '';
    const monthQuery = document.getElementById(monthQueryId)?.value.trim() || '';
    const storageKey = type === 'qc' ? 'mbi_qc_data' : 'mbi_prod_data';

    let dataList = JSON.parse(localStorage.getItem(storageKey) || '[]');
    let filteredData = dataList.filter(item => {
        if (filterDate) return item.date === filterDate;
        if (monthQuery) {
            const targetMonth = getMonthNumberFromQuery(monthQuery);
            const parts = item.date.split('-');
            if (parts.length >= 2) {
                const monthNum = parseInt(parts[1], 10);
                if (targetMonth !== null) return monthNum === targetMonth;
                return item.date.includes(monthQuery);
            }
        }
        return false;
    });

    if (filteredData.length === 0) {
        alert('Tidak ada data yang tersedia untuk diunduh pada kriteria filter saat ini!');
        return;
    }

    const isQC = (type === 'qc');
    const titleText = isQC ? "REKAP LAPORAN QUALITY CONTROL" : "REKAP LAPORAN PRODUKSI HARIAN";
    
    // Header Kolom dari 'No' ke samping kanan
    const headers = isQC 
        ? ["No", "Tanggal", "PIC Inspector", "Customer", "Nama Part", "Spec / Finishing", "Qty OK (PCS)", "Qty NG (PCS)", "Qty (Kg)", "Keterangan"]
        : ["No", "Tanggal", "Shift", "PIC Operator", "Customer", "Part Name", "Cromating", "QTY (Kg)", "Barrel", "Ampere", "Time IN", "Time OUT", "Keterangan"];

    let sheetData = [
        ["PT. MEGUMI BRAYAN INDONESIA"],
        [titleText],
        [], // Baris kosong pembatas
        headers
    ];

    // Olah Data Isi Tabel & Total
    if (isQC) {
        let totalOk = 0, totalNg = 0, totalKg = 0;
        filteredData.forEach((item, idx) => {
            let ok = parseInt(item.okPcs) || 0;
            let ng = parseInt(item.ngPcs) || 0;
            let kg = parseFloat(String(item.qtyKg || '0').replace(',', '.')) || 0;

            totalOk += ok;
            totalNg += ng;
            totalKg += kg;

            sheetData.push([
                idx + 1, item.date || '', item.pic || '', item.customer || '', item.part || '',
                item.spec || '', ok, ng, kg, item.note || ''
            ]);
        });
        sheetData.push(["TOTAL HARIAN", "", "", "", "", "", totalOk, totalNg, totalKg, ""]);
    } else {
        let totalKg = 0, totalAmpr = 0;
        filteredData.forEach((item, idx) => {
            let kg = parseFloat(String(item.qty || '0').replace(',', '.')) || 0;
            let ampr = parseFloat(String(item.ampr || '0').replace(',', '.')) || 0;

            totalKg += kg;
            totalAmpr += ampr;

            sheetData.push([
                idx + 1, item.date || '', item.shift || '', item.pic || '', item.customer || '',
                item.part || '', item.cromating || '', kg, item.barrel || '', ampr,
                item.timeIn || '', item.timeOut || '', item.note || ''
            ]);
        });
        sheetData.push(["TOTAL HARIAN", "", "", "", "", "", "", totalKg, filteredData.length + " Barel", totalAmpr, "", "", ""]);
    }

    const ws = XLSX.utils.aoa_to_sheet(sheetData);

    // 1. PENGATURAN LEBAR KOLOM OTOMATIS (MENCEGAH TEKS TERPUTUS)
    const colWidths = headers.map((header, colIdx) => {
        let maxLen = header.length;
        sheetData.forEach(row => {
            const cellVal = row[colIdx] !== null && row[colIdx] !== undefined ? String(row[colIdx]) : '';
            if (cellVal.length > maxLen) maxLen = cellVal.length;
        });
        return { wch: Math.max(maxLen + 4, 12) }; // Padded ekstra 4 karakter
    });
    ws['!cols'] = colWidths;

    // 2. PEMWARNAAN & STYLING SESUAI STANDAR QC & PRODUKSI
    const headerBgColor = isQC ? "15803D" : "1E3A8A"; // Merah (QC) atau Biru Tua (Produksi)
    const headerFgColor = "FFFFFF";

    const range = XLSX.utils.decode_range(ws['!ref']);
    for (let R = range.s.r; R <= range.e.r; ++R) {
        for (let C = range.s.c; C <= range.e.c; ++C) {
            const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
            if (!ws[cellAddress]) continue;

            // Judul Atas
            if (R === 0 || R === 1) {
                ws[cellAddress].s = {
                    font: { bold: true, size: R === 0 ? 14 : 12, color: { rgb: "000000" } },
                    alignment: { horizontal: "left" }
                };
            }
            // Baris Header Tabel (Dari 'No' ke Samping Kanan diberi Warna)
            else if (R === 3) {
                ws[cellAddress].s = {
                    fill: { fgColor: { rgb: headerBgColor } },
                    font: { bold: true, color: { rgb: headerFgColor }, size: 10 },
                    alignment: { horizontal: "center", vertical: "center" },
                    border: {
                        top: { style: "thin", color: { rgb: "000000" } },
                        bottom: { style: "medium", color: { rgb: "000000" } }
                    }
                };
            }
            // Baris Data & Baris Total
            else if (R > 3) {
                const isTotalRow = (R === range.e.r);
                ws[cellAddress].s = {
                    font: { bold: isTotalRow, size: 10 },
                    alignment: { 
                        horizontal: (typeof ws[cellAddress].v === 'number' && C !== 0) ? "right" : (C === 0 ? "center" : "left"),
                        vertical: "center" 
                    },
                    border: {
                        top: { style: "thin", color: { rgb: "D1D5DB" } },
                        bottom: { style: isTotalRow ? "double" : "thin", color: { rgb: "000000" } },
                        left: { style: "thin", color: { rgb: "E5E7EB" } },
                        right: { style: "thin", color: { rgb: "E5E7EB" } }
                    }
                };

                // Warna Highlight Khusus Kolom QC (OK = Hijau Muda, NG = Merah Muda)
                if (isQC && !isTotalRow) {
                    if (C === 6) ws[cellAddress].s.fill = { fgColor: { rgb: "DCFCE7" } };
                    if (C === 7) ws[cellAddress].s.fill = { fgColor: { rgb: "FEE2E2" } };
                }
            }
        }
    }

    // Export File
    const fileName = `${type.toUpperCase()}_REKAP_${filterDate || monthQuery || 'ALL'}.xlsx`;
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, type.toUpperCase());
    XLSX.writeFile(wb, fileName);
}

// ==========================================
// 9. FOTO LABEL (KAMERA + GALERI)
// ==========================================

async function handleGalleryPhoto(input, target) {
    if (!input || !input.files || !input.files[0]) return;

    try {
        const photoBase64 = await fileToBase64(input.files[0]);
        setPhotoForTarget(target, photoBase64);
        input.value = '';
    } catch (error) {
        console.error('Gagal membaca foto:', error);
        alert('Foto gagal dibaca. Silakan coba lagi.');
    }
}

function setPhotoForTarget(target, photoBase64) {
    const isQc = target === 'qc';
    const base64Id = isQc ? 'qcPhotoBase64' : 'prodPhotoBase64';
    const previewId = isQc ? 'qcPhotoPreview' : 'prodPhotoPreview';
    const imageId = isQc ? 'qcPhotoImg' : 'prodPhotoImg';

    const hiddenInput = document.getElementById(base64Id);
    const preview = document.getElementById(previewId);
    const image = document.getElementById(imageId);

    if (hiddenInput) hiddenInput.value = photoBase64 || '';
    if (image) image.src = photoBase64 || '';

    if (preview && photoBase64) {
        preview.classList.remove('hidden');
        preview.classList.add('flex');
    } else if (preview) {
        preview.classList.add('hidden');
        preview.classList.remove('flex');
    }
}

function chooseGalleryPhoto(target) {
    const inputId = target === 'qc' ? 'qcPhoto' : 'prodPhoto';
    const input = document.getElementById(inputId);
    if (input) input.click();
}

function clearPhotoPreview(previewContainerId, hiddenBase64Id) {
    const hiddenInput = document.getElementById(hiddenBase64Id);
    if (hiddenInput) hiddenInput.value = '';

    const container = document.getElementById(previewContainerId);
    if (container) {
        container.classList.add('hidden');
        container.classList.remove('flex');

        const img = container.querySelector('img');
        if (img) img.src = '';
    }

    const galleryInputId = hiddenBase64Id === 'qcPhotoBase64' ? 'qcPhoto' : 'prodPhoto';
    const galleryInput = document.getElementById(galleryInputId);
    if (galleryInput) galleryInput.value = '';
}

function handlePhotoInput(input, target) {
    if (!input || !input.files || !input.files[0]) return;
    handleGalleryPhoto(input, target);
}
