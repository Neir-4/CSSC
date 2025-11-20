import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const Home = () => {
    return(
        <>
        <div className="min-h-screen mx-auto items-center justify-center bg-white flex min-w-screen relative bg-no-repeat bg-contain overflow-hidden px-4 sm:px-6 lg:px-8">
            <img src="./kelas.png" alt="kelas" className="w-full max-w-7xl rounded-3xl object-cover"/>
            <div className="absolute flex flex-col items-start top-8 sm:top-16 lg:top-30 left-4 sm:left-8 lg:left-30 max-w-xs sm:max-w-md lg:max-w-lg">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-yellow-300 text-shadow-lg text-shadow-slate-950">CSSC</h1>
                <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-yellow-300 text-shadow-lg text-shadow-slate-950">CompScie Smart Class</h1>
                <h1 className="text-sm sm:text-lg lg:text-xl font-medium text-white text-shadow-lg text-shadow-slate-950 leading-tight">Platform Sumber Informasi untuk Mahasiswa dan Dosen.</h1>
            </div>
            <div className="absolute flex flex-col items-center gap-2 sm:gap-3 px-3 sm:px-5 py-3 sm:py-5 bg-[#243e36]/50 rounded-xl border-1 border-[#7ca982] bottom-4 sm:bottom-8 lg:bottom-20 right-4 sm:right-8 lg:right-20">
                <h1 className="text-white font-medium text-sm sm:text-lg lg:text-xl">Masuk sebagai</h1>
                <div className="text-[#1e1e1e] flex gap-2 sm:gap-3 lg:gap-5 flex-col sm:flex-row">
                    <Link to="/Login" className="px-2 sm:px-3 bg-yellow-300 font-bold text-sm sm:text-lg lg:text-2xl rounded-xl py-1 text-center">Mahasiswa</Link>
                    <Link to="/Login" className="px-2 sm:px-6 bg-yellow-300 font-bold text-sm sm:text-lg lg:text-2xl rounded-xl py-1 text-center">Dosen</Link>
                </div>
            </div>
        </div>
        <div className="min-h-[90vh] relative mx-auto items-center justify-center mt-5 px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-white to-[#9ddf87] max-w-7xl min-h-[70vh] sm:h-[83vh] mx-auto items-center flex flex-col lg:flex-row justify-center relative rounded-2xl p-4 sm:p-8 gap-4 lg:gap-8">
                <div className="flex flex-col w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="text-[#1e1e1e] flex flex-col gap-3 mb-6 lg:mb-0">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">Akses Jadwal Kuliah dengan Mudah!</h1>
                        <h1 className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed">Lihat agenda perkuliahan setiap hari dengan cepat dan akurat. Kamu tidak akan ketinggalan pertemuan penting lagi.</h1>
                    </div>
                    <div className="text-[#1e1e1e] text-left">
                        <h1 className="text-lg sm:text-xl font-medium mb-3">Lihat Jadwal Kuliah</h1>
                        <Link to="/Jadwal" className="text-lg sm:text-xl lg:text-2xl font-bold px-4 sm:px-7 py-2 bg-amber-300 rounded-2xl inline-flex items-center gap-2 hover:bg-amber-400 transition-colors">Jadwal <FaArrowRight />
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
                    <img src="buku.png" alt="buku" className="w-full max-w-md lg:max-w-[33rem] rounded-xl object-contain"/>
                </div>
            </div>
        </div>
        <div className="min-h-[90vh] relative mx-auto items-center justify-center mt-5 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto items-center flex justify-center relative rounded-2xl flex-col gap-6 sm:gap-8">
                <div className="text-center flex flex-col gap-3 sm:gap-4 max-w-4xl">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Semua Materi, Dalam Satu Klik.</h1>
                    <h1 className="text-sm sm:text-base lg:text-lg leading-relaxed px-4">Materi dosen tiap pertemuan bisa kamu lihat langsung di sini. Mulai dari file PDF, slide, sampai catatan tambahan, semua siap kamu pelajari kapanpun kamu butuh.</h1>
                </div>
                <div className="justify-center flex flex-col items-center relative w-full">
                    <img src="materi.png" alt="materi" className="rounded-2xl w-full max-w-6xl h-auto object-cover"/>
                    <Link to="/Materi" className="bg-yellow-300 px-4 sm:px-6 text-[#1e1e1e] font-bold text-lg sm:text-xl lg:text-2xl rounded-lg py-2 sm:py-3 absolute bottom-4 sm:bottom-6 hover:bg-yellow-400 transition-colors">Mulai Akses Materi</Link>
                </div>
            </div>
        </div>
        <div className="min-h-[70vh] relative mx-auto items-center justify-center mt-5 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto items-center flex flex-col lg:flex-row justify-center rounded-2xl gap-6 lg:gap-8 py-8 lg:py-16">
                <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
                    <img src="speaker.png" alt="speaker" className="w-full max-w-sm lg:max-w-md object-contain" />
                </div>
                <div className="flex flex-col text-[#1e1e1e] text-center lg:text-right w-full lg:w-1/2 gap-6 lg:gap-12 order-1 lg:order-2">
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">Informasi Terbaru dari Dosen dan Komting</h1>
                        <h1 className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed">Jangan lewatkan pengumuman penting mengenai jadwal kuliah, tugas, maupun kegiatan akademik lainnya. Semua informasi terbaru akan selalu diperbarui disini.</h1>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-lg sm:text-xl font-medium">Lihat Pengumuman</h1>
                        <Link to="/Pengumuman" className="text-lg sm:text-xl lg:text-2xl font-bold bg-amber-300 px-4 sm:px-6 rounded-lg py-2 sm:py-3 hover:bg-amber-400 transition-colors inline-block">Pengumuman</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;