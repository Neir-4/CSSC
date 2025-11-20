import { Link } from "react-router-dom";

const Materi = () => {
    const materials = [
        {
            id: "pemrograman-website",
            name: "Pemrograman Website",
            image: "pemweb.png",
            pengajar: "Dr. Dewi Sartika Br Ginting S.Kom Nurrahmadiayah M.Kom",
            meetings: 15
        },
        {
            id: "struktur-data",
            name: "Struktur Data",
            image: "sd.png",
            pengajar: "Dr. Ahmad Rahman S.Kom M.Kom",
            meetings: 14
        },
        {
            id: "basis-data",
            name: "Basis Data",
            image: "basdat.png",
            pengajar: "Prof. Siti Nurhaliza S.Kom M.Kom",
            meetings: 16
        },
        {
            id: "wirausaha-digital",
            name: "Wirausaha Digital",
            image: "wirdig.png",
            pengajar: "Dr. Budi Santoso S.E M.M",
            meetings: 12
        },
        {
            id: "kecerdasan-buatan",
            name: "Kecerdasan Buatan",
            image: "ai.png",
            pengajar: "Dr. Indra Wijaya S.Kom M.Kom",
            meetings: 15
        },
        {
            id: "etika-profesi",
            name: "Etika Profesi",
            image: "etprof.png",
            pengajar: "Prof. Maria Ulfa S.H M.H",
            meetings: 10
        },
        {
            id: "ielts-preparation",
            name: "IELTS Preparation",
            image: "ielts.png",
            pengajar: "Dr. John Smith M.A",
            meetings: 20
        },
        {
            id: "komputerisasi-ekonomi-bisnis",
            name: "Komputerisasi Ekonomi & Bisnis",
            image: "kompre.png",
            pengajar: "Dr. Rina Sari S.E M.Kom",
            meetings: 14
        },
        {
            id: "praktikum-pemrograman-website",
            name: "Praktikum Pemrograman Website",
            image: "iklc 1.png",
            pengajar: "Asisten Lab Komputer",
            meetings: 15
        },
        {
            id: "praktikum-struktur-data",
            name: "Praktikum Struktur Data",
            image: "iklc 1.png",
            pengajar: "Asisten Lab Komputer",
            meetings: 14
        },
        {
            id: "praktikum-basis-data",
            name: "Praktikum Basis Data",
            image: "iklc 1.png",
            pengajar: "Asisten Lab Komputer",
            meetings: 16
        },
    ];

    return (    
        <>
            <div className="min-h-screen bg-[#f5f5f0] pt-20 pb-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-12">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e1e1e] mb-4">
                            Akses Materi Kuliah
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg text-[#4b4b4b] max-w-3xl mx-auto mb-8">
                            Pilih mata kuliah untuk melihat materi yang sudah dibagikan pengajar.
                        </p>
                    </div>

                    {/* Materials Grid */}
                    <div className="flex justify-center">
                        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl w-full">
                            {materials.map((item) => (
                                <Link
                                    key={item.id}
                                    to={`/Materi/${item.id}`}
                                    className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1"
                                >
                                    {/* Subject Image */}
                                    <div className="h-40 sm:h-48 bg-gradient-to-br from-[#8db89a] to-[#7da88a] flex items-center justify-center p-4 relative overflow-hidden">
                                        {item.image && (
                                            <img 
                                                src={`/${item.image}`} 
                                                alt={item.name}
                                                className="w-full h-full object-contain opacity-20 absolute inset-0"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        )}
                                        <h3 className="text-white font-bold text-base sm:text-lg text-center px-2 relative z-10 leading-tight">
                                            {item.name}
                                        </h3>
                                    </div>
                                    
                                    {/* Subject Info */}
                                    <div className="p-4 sm:p-5">
                                        <div className="mb-3 sm:mb-4">
                                            <p className="text-xs text-[#4b4b4b] mb-1">Pengajar:</p>
                                            <p className="text-sm font-medium text-[#1e1e1e] leading-tight line-clamp-2">
                                                {item.pengajar}
                                            </p>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-[#4b4b4b]">Pertemuan:</p>
                                                <p className="text-sm font-semibold text-[#1e1e1e]">
                                                    {item.meetings} Sesi
                                                </p>
                                            </div>
                                            <svg 
                                                className="w-5 h-5 text-[#8db89a] group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Materi;