const AGES = Array.from(Array(29).keys())
const BRANCHES = {
    '1': 'Jakarta & Tangerang',
    '2':'Pekanbaru',
    '3':'Palembang',
    '4':'Makassar',
    '5':'Medan',
    '6':'Surabaya',
    '7':'Batam',
    '8':'Balikpapan'
};

const CITY = {
    'Jakarta': 1
};

const DEPARTMENTS = {
    '1': 'Decorative Project',
    '2': 'Decorative Retail',
    '3': 'Factory Operations',
    '4': 'Finance & IT',
    '5': 'HR & GA',
    '6': 'Marine',
    '7': 'Marketing',
    '8': 'Powder Sales',
    '9': 'Protective',
    '10': 'Supply Chain',
    '11': 'TSS',
    '12': 'Factory Paints',
    '13': 'Factory Powder',
    '14': 'Maintenance',
    '15': 'Management',
    '17': 'QHSE',
    '18': 'Warehouse',
};

const TRANSPORTATIONS = {
    '1': 'Kendaraan Pribadi (Mobil)',
    '2': 'Kendaraan Pribadi (Motor)',
    '3': 'Bus Powder Factory',
    '4': 'Bus Jotun Plant 2 - JDC'
};

const CONTEST_RULE = [
    {
        id: 6,
        text: [
            'Usia peserta 0-15 tahun',
            'Pendaftaran lomba akan ditutup H-5',
            'Jadwal lomba setiap peserta akan di infokan H-1',
            'Pelaksanaan lomba akan dilaksanakan dalam beberapa sesi di hari H',
            'Waktu lomba per sesi adalah 15 menit',
            'Peserta boleh didampingi orang tua namun orang tua tidak diperkenankan membantu peserta',
            'Tim EO berhak mendiskualifikasi peserta yang dibantu orang tuanya dalam bentuk tindakan apapun',
            'Tim EO akan memilih 2 pemenang favorit',
            'Pemenang favorit dinilai dari hasil kreasi peserta dengan warna menarik dan rapih, minimum kombinasi 5 warna',
            'Setiap pemenang akan mendapatkan hadiah uang tunai senilai Rp 500.000',
        ]
    },
    {
        id: 7,
        text: [
            'Usia peserta 11-28 tahun',
            'Pendaftaran lomba akan ditutup H-5',
            'Jadwal lomba setiap peserta akan di infokan H-1',
            'Pelaksanaan lomba akan dilaksanakan dalam beberapa sesi di hari H',
            'Waktu lomba per sesi adalah 15 menit',
            'Tim EO akan memilih 2 pemenang favorit',
            'Pemenang favorit dinilai dari hasil kreasi peserta dengan warna menarik dan rapih',
            'Setiap pemenang akan mendapatkan hadiah uang tunai senilai Rp 500.000',
        ]
    },
    {
        id: 8,
        text: [
            'Usia peserta 6-28 tahun',
            'Pendaftaran lomba akan ditutup H-5',
            'Jadwal lomba setiap peserta akan di infokan H-1',
            'Pelaksanaan lomba akan dilaksanakan dalam beberapa sesi di hari H',
            'Waktu lomba per sesi adalah 15 menit',
            'Peserta boleh didampingi orang tua namun orang tua tidak diperkenankan membantu peserta',
            'Tim EO berhak mendiskualifikasi peserta yang dibantu orang tuanya dalam bentuk tindakan apapun',
            'Tim EO akan memilih 2 pemenang dengan waktu tercepat dalam menyusun puzzle',
            'Setiap pemenang akan mendapatkan hadiah uang tunai senilai Rp 500.000',
        ]
    }
]

export {
    AGES,
    BRANCHES,
    CITY,
    DEPARTMENTS,
    TRANSPORTATIONS,
    CONTEST_RULE
};