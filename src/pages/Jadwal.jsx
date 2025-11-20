import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Jadwal = () => {
    const { user } = useAuth();
    const [currentWeek, setCurrentWeek] = useState(0);

    // Sample schedule data based on the image provided
    const scheduleData = [
        {
            day: "Senin",
            date: "10",
            classes: [
                {
                    time: "08:20 - 10:00",
                    subject: "Praktikum Basis Data",
                    instructor: "Muhammad Syukron",
                    room: "Lab 2",
                    type: "praktikum",
                    color: "bg-purple-100 border-purple-300 text-purple-800"
                },
                {
                    time: "10:30 - 12:10",
                    subject: "Komputerisasi Ekonomi & Bisnis",
                    instructor: "Teknik Akbar Perkutanan",
                    room: "SL 1",
                    type: "teori",
                    color: "bg-blue-100 border-blue-300 text-blue-800"
                }
            ]
        },
        {
            day: "Selasa",
            date: "11",
            classes: [
                {
                    time: "08:50 - 10:30",
                    subject: "Praktikum Struktur Data",
                    instructor: "Arya Debora Pengajaran",
                    room: "Lab 2",
                    type: "praktikum",
                    color: "bg-green-100 border-green-300 text-green-800"
                },
                {
                    time: "10:30 - 12:10",
                    subject: "Praktikum Struktur Data",
                    instructor: "Arya Debora Pengajaran",
                    room: "Lab 2",
                    type: "praktikum",
                    color: "bg-green-100 border-green-300 text-green-800"
                }
            ]
        },
        {
            day: "Rabu",
            date: "12",
            classes: [
                {
                    time: "08:00 - 10:30",
                    subject: "Pemrograman Website",
                    instructor: "Dr. Dewi Sartika Br Ginting S.Kom Nurrahmadiayah M.Kom",
                    room: "D-103",
                    type: "teori",
                    color: "bg-yellow-100 border-yellow-400 text-yellow-800"
                },
                {
                    time: "13:50 - 16:20",
                    subject: "Kecerdasan Buatan",
                    instructor: "Dr. Amelia S.T., M.Kom Dr. Fauzi Serafim Nainggolan S.Kom., M.Sc",
                    room: "D-104",
                    type: "teori",
                    color: "bg-orange-100 border-orange-300 text-orange-800"
                },
                {
                    time: "14:40 - 17:10",
                    subject: "Basis Data",
                    instructor: "Dr. Dewi Sartika Br Ginting S.Kom Insiden Fawwaz M.Kom",
                    room: "D-103",
                    type: "teori",
                    color: "bg-pink-100 border-pink-300 text-pink-800"
                }
            ]
        },
        {
            day: "Kamis",
            date: "13",
            classes: [
                {
                    time: "08:00 - 09:40",
                    subject: "Etika Profesi",
                    instructor: "Dr. Ir. Elvariany Musa Zainuddin S.T, M.T Dr. Daud Sihombing S.T, M.Kom",
                    room: "D-104",
                    type: "teori",
                    color: "bg-indigo-100 border-indigo-300 text-indigo-800"
                },
                {
                    time: "08:00 - 09:40",
                    subject: "Wirausaha Digital",
                    instructor: "Dr. T. Henry Fabriana S.Kom., M.Kom Dr. Fauzan Nainggolan S.Kom., M.Sc",
                    room: "D-104",
                    type: "teori",
                    color: "bg-teal-100 border-teal-300 text-teal-800"
                }
            ]
        },
        {
            day: "Jumat",
            date: "14",
            classes: [
                {
                    time: "10:30 - 12:10",
                    subject: "Praktikum Pemrograman Website",
                    instructor: "Muhammad Dzikrullah Arfagy",
                    room: "Lab 3",
                    type: "praktikum",
                    color: "bg-cyan-100 border-cyan-300 text-cyan-800"
                },
                {
                    time: "13:50 - 16:20",
                    subject: "Struktur Data",
                    instructor: "Asandimitra Modestus Nainggolan S.Kom.,M.T Insiden Fawwaz M.Kom",
                    room: "D-101",
                    type: "teori",
                    color: "bg-emerald-100 border-emerald-300 text-emerald-800"
                }
            ]
        }
    ];

    const timeSlots = [
        "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", 
        "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
    ];

    const navigateWeek = (direction) => {
        setCurrentWeek(prev => prev + direction);
    };

    const getCurrentWeekDates = () => {
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay() + 1 + (currentWeek * 7));
        
        return scheduleData.map((day, index) => {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + index);
            return {
                ...day,
                fullDate: date,
                dateNum: date.getDate()
            };
        });
    };

    const weekDates = getCurrentWeekDates();
    const currentDate = new Date();
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", 
                       "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    return (
        <div className="min-h-screen bg-[#f5f5f0] pt-20 pb-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#1e1e1e] mb-2">
                            Jadwal Kelas Mu
                        </h1>
                        <div className="flex items-center gap-2 text-sm text-[#4b4b4b]">
                            <span className="bg-yellow-300 px-3 py-1 rounded-full text-[#1e1e1e] font-semibold">
                                {user?.name || "Yehezkiel"}
                            </span>
                        </div>
                    </div>
                    
                    {/* Week Navigation */}
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => navigateWeek(-1)}
                            className="p-2 rounded-full hover:bg-white/50 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <span className="text-lg font-semibold text-[#1e1e1e] min-w-[120px] text-center">
                            {monthNames[weekDates[0]?.fullDate.getMonth()]} {weekDates[0]?.fullDate.getFullYear()}
                        </span>
                        <button 
                            onClick={() => navigateWeek(1)}
                            className="p-2 rounded-full hover:bg-white/50 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Schedule Grid */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Desktop View */}
                    <div className="hidden lg:block">
                        <div className="grid grid-cols-6 bg-[#8db89a] text-white">
                            <div className="p-4 text-center font-semibold border-r border-white/20">
                                <div className="text-xs">GMT +7</div>
                                <div className="text-sm mt-1">Waktu</div>
                            </div>
                            {weekDates.map((day, index) => (
                                <div key={index} className="p-4 text-center border-r border-white/20 last:border-r-0">
                                    <div className="font-semibold text-lg">{day.day}</div>
                                    <div className="text-2xl font-bold mt-1">{day.dateNum}</div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="grid grid-cols-6 min-h-[600px]">
                            {/* Time Column */}
                            <div className="border-r border-gray-200">
                                {timeSlots.map((time, index) => (
                                    <div key={index} className="h-16 border-b border-gray-100 flex items-center justify-center text-sm text-[#4b4b4b] font-medium">
                                        {time}
                                    </div>
                                ))}
                            </div>
                            
                            {/* Days Columns */}
                            {weekDates.map((day, dayIndex) => (
                                <div key={dayIndex} className="border-r border-gray-200 last:border-r-0 relative">
                                    {timeSlots.map((time, timeIndex) => (
                                        <div key={timeIndex} className="h-16 border-b border-gray-100"></div>
                                    ))}
                                    
                                    {/* Classes */}
                                    {day.classes.map((classItem, classIndex) => {
                                        const startTime = classItem.time.split(' - ')[0];
                                        const endTime = classItem.time.split(' - ')[1];
                                        const startHour = parseInt(startTime.split(':')[0]);
                                        const startMinute = parseInt(startTime.split(':')[1]);
                                        const endHour = parseInt(endTime.split(':')[0]);
                                        const endMinute = parseInt(endTime.split(':')[1]);
                                        
                                        const startPosition = ((startHour - 6) * 64) + (startMinute / 60 * 64);
                                        const duration = ((endHour - startHour) * 64) + ((endMinute - startMinute) / 60 * 64);
                                        
                                        return (
                                            <div
                                                key={classIndex}
                                                className={`absolute left-1 right-1 rounded-lg border-2 p-2 ${classItem.color} shadow-sm`}
                                                style={{
                                                    top: `${startPosition}px`,
                                                    height: `${duration}px`,
                                                    zIndex: 10
                                                }}
                                            >
                                                <div className="text-xs font-bold mb-1 leading-tight">
                                                    {classItem.subject}
                                                </div>
                                                <div className="text-xs opacity-90 leading-tight">
                                                    {classItem.instructor}
                                                </div>
                                                <div className="text-xs font-medium mt-1">
                                                    {classItem.room}
                                                </div>
                                                <div className="text-xs font-medium">
                                                    {classItem.time}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile View */}
                    <div className="lg:hidden">
                        {weekDates.map((day, dayIndex) => (
                            <div key={dayIndex} className="border-b border-gray-200 last:border-b-0">
                                <div className="bg-[#8db89a] text-white p-4 flex items-center justify-between">
                                    <div>
                                        <div className="font-semibold text-lg">{day.day}</div>
                                        <div className="text-sm opacity-90">{day.dateNum} {monthNames[day.fullDate.getMonth()]}</div>
                                    </div>
                                    <div className="text-right text-sm">
                                        {day.classes.length} kelas
                                    </div>
                                </div>
                                
                                <div className="p-4 space-y-3">
                                    {day.classes.length > 0 ? (
                                        day.classes.map((classItem, classIndex) => (
                                            <div key={classIndex} className={`rounded-lg border-2 p-3 ${classItem.color}`}>
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="font-bold text-sm">{classItem.subject}</div>
                                                    <div className="text-xs font-medium">{classItem.time}</div>
                                                </div>
                                                <div className="text-xs opacity-90 mb-1">{classItem.instructor}</div>
                                                <div className="text-xs font-medium">{classItem.room}</div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center text-[#4b4b4b] py-8">
                                            Tidak ada kelas hari ini
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jadwal;