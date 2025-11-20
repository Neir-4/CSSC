import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MATERIALS = {
  "pemrograman-website": {
    title: "Pemrograman Website",
    image: "pemweb",
    pengajar: "Dr. Dewi Sartika Br Ginting S.Kom Nurrahmadiayah M.Kom",
    meetings: 15
  },
  "struktur-data": {
    title: "Struktur Data",
    image: "sd.png",
    pengajar: "Dr. Ahmad Rahman S.Kom M.Kom",
    meetings: 14
  },
  "basis-data": {
    title: "Basis Data",
    image: "basdat.png",
    pengajar: "Prof. Siti Nurhaliza S.Kom M.Kom",
    meetings: 16
  },
  "wirausaha-digital": {
    title: "Wirausaha Digital",
    image: "wirdig.png",
    pengajar: "Dr. Budi Santoso S.E M.M",
    meetings: 12
  },
  "kecerdasan-buatan": {
    title: "Kecerdasan Buatan",
    image: "ai.png",
    pengajar: "Dr. Indra Wijaya S.Kom M.Kom",
    meetings: 15
  },
  "etika-profesi": {
    title: "Etika Profesi",
    image: "etprof.png",
    pengajar: "Prof. Maria Ulfa S.H M.H",
    meetings: 10
  },
  "ielts-preparation": {
    title: "IELTS Preparation",
    image: "ielts.png",
    pengajar: "Dr. John Smith M.A",
    meetings: 20
  },
  "komputerisasi-ekonomi-bisnis": {
    title: "Komputerisasi Ekonomi & Bisnis",
    image: "kompre.png",
    pengajar: "Dr. Rina Sari S.E M.Kom",
    meetings: 14
  },
  "praktikum-pemrograman-website": {
    title: "Praktikum Pemrograman Website",
    image: "iklc 1.png",
    pengajar: "Asisten Lab Komputer",
    meetings: 15
  },
  "praktikum-struktur-data": {
    title: "Praktikum Struktur Data",
    image: "iklc 1.png",
    pengajar: "Asisten Lab Komputer",
    meetings: 14
  },
  "praktikum-basis-data": {
    title: "Praktikum Basis Data",
    image: "iklc 1.png",
    pengajar: "Asisten Lab Komputer",
    meetings: 16
  },
};

const MateriDetail = () => {
  const { id } = useParams();
  const materi = MATERIALS[id];

  if (!materi) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Materi tidak ditemukan</h1>
          <p className="mb-4 text-sm text-slate-600">
            Pastikan kamu memilih materi dari halaman daftar materi.
          </p>
          <Link
            to="/Materi"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-300 px-4 py-2 text-sm font-semibold text-[#1e1e1e]"
          >
            <FaArrowLeft />
            Kembali ke daftar materi
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0] pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/Materi"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
        >
          <FaArrowLeft />
          Kembali ke daftar materi
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-4">
            {materi.title}
          </h1>
          
          {/* pengajar Info Card */}
          <div className="bg-[#e8e8e0] rounded-lg p-4 mb-8 max-w-md mx-auto">
            <p className="text-sm text-[#4b4b4b] mb-1">Pengajar:</p>
            <p className="text-sm font-medium text-[#1e1e1e]">
              {materi.pengajar}
            </p>
          </div>
        </div>

        {/* Meeting Cards */}
        <div className="space-y-3">
          {Array.from({ length: materi.meetings }, (_, index) => (
            <Link
              key={index + 1}
              to={`/Materi/${id}/pertemuan-${index + 1}`}
              className="block w-full"
            >
              <div className="bg-[#8db89a] hover:bg-[#7da88a] transition-colors duration-200 rounded-lg p-4 flex items-center justify-between group">
                <h3 className="text-white font-semibold text-lg">
                  Pertemuan {index + 1}
                </h3>
                <svg 
                  className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MateriDetail;
