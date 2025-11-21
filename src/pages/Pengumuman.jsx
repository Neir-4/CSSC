import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { FaPlus, FaClock, FaUser, FaCalendarAlt } from "react-icons/fa";

const Pengumuman = () => {
    const { user } = useAuth();
    const [announcements, setAnnouncements] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);

    // Load announcements from localStorage on component mount
    useEffect(() => {
        const savedAnnouncements = localStorage.getItem("cssc-announcements");
        if (savedAnnouncements) {
            setAnnouncements(JSON.parse(savedAnnouncements));
        } else {
            // Initialize with sample data
            const sampleAnnouncements = [
                {
                    id: 1,
                    title: "Wirausaha Digital",
                    content: "Teman-teman, Wirausaha Digital hari ini pindah ke hari kamis minggu depan yaa..",
                    author: "Edric",
                    authorRole: "Komting",
                    subject: "Wirausaha Digital",
                    date: "31 Oktober 2025",
                    time: "07:21",
                    status: "approved"
                },
                {
                    id: 2,
                    title: "Basis Data",
                    content: "Adik-adik, Basis Data kita undur malam ini jam 8 malam, online ya.",
                    author: "Dewi Sartika",
                    authorRole: "Dosen",
                    subject: "Basis Data",
                    date: "5 November 2025",
                    time: "10:22",
                    status: "approved"
                },
                {
                    id: 3,
                    title: "Wirausaha Digital",
                    content: "Wirausaha digital tidak masuk hari ini.",
                    author: "Yehezkiel",
                    authorRole: "Anggota",
                    subject: "Wirausaha Digital",
                    date: "7 November 2025",
                    time: "10:22",
                    status: "26 Setuju"
                }
            ];
            setAnnouncements(sampleAnnouncements);
            localStorage.setItem("cssc-announcements", JSON.stringify(sampleAnnouncements));
        }
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        };
        return date.toLocaleDateString('id-ID', options);
    };

    const getAnnouncementStyle = (authorRole) => {
        if (authorRole === "Dosen") {
            return "bg-gradient-to-r from-green-600 to-green-700";
        } else if (authorRole === "Komting") {
            return "bg-gradient-to-r from-slate-600 to-slate-700";
        } else {
            return "bg-gradient-to-r from-slate-700 to-slate-800";
        }
    };

    const getStatusDisplay = (status, authorRole) => {
        if (authorRole === "Dosen" || authorRole === "Komting") {
            return null; // No status needed for approved posts
        }
        return (
            <div className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                {status}
            </div>
        );
    };

    // Group announcements by date
    const groupedAnnouncements = announcements.reduce((groups, announcement) => {
        const date = announcement.date;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(announcement);
        return groups;
    }, {});

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 pt-20 pb-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                        Pengumuman Terbaru
                    </h1>
                    <button
                        onClick={() => setShowCreateForm(true)}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-xl flex items-center gap-2 transition-colors shadow-lg"
                    >
                        <span className="text-yellow-300">Ajukan Pengumuman</span>
                        <FaPlus className="text-yellow-300" />
                    </button>
                </div>

                {/* Announcements Container */}
                <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-3xl p-6 sm:p-8 shadow-2xl">
                    <div className="space-y-8">
                        {Object.entries(groupedAnnouncements).map(([date, dateAnnouncements]) => (
                            <div key={date}>
                                {/* Date Header */}
                                <div className="text-center mb-6">
                                    <div className="text-white font-semibold text-lg bg-black bg-opacity-20 inline-block px-4 py-2 rounded-lg">
                                        {date}
                                    </div>
                                </div>

                                {/* Announcements for this date */}
                                <div className="space-y-4">
                                    {dateAnnouncements.map((announcement) => (
                                        <div
                                            key={announcement.id}
                                            className={`${getAnnouncementStyle(announcement.authorRole)} text-white rounded-2xl p-4 sm:p-6 shadow-lg`}
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-yellow-300 font-bold text-lg">
                                                        {announcement.author}
                                                    </span>
                                                    <span className="text-gray-200">•</span>
                                                    <span className="text-gray-200 text-sm">
                                                        {announcement.authorRole}
                                                    </span>
                                                </div>
                                                <div className="text-right text-sm text-gray-200">
                                                    <div className="font-semibold text-white text-lg mb-1">
                                                        {announcement.subject}
                                                    </div>
                                                    <div className="flex items-center gap-1 justify-end">
                                                        <FaClock className="text-xs" />
                                                        <span>{announcement.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <p className="text-white text-base leading-relaxed mb-3">
                                                {announcement.content}
                                            </p>

                                            {/* Status for student submissions */}
                                            {getStatusDisplay(announcement.status, announcement.authorRole) && (
                                                <div className="flex justify-end">
                                                    {getStatusDisplay(announcement.status, announcement.authorRole)}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Create Announcement Modal */}
                {showCreateForm && (
                    <CreateAnnouncementModal
                        user={user}
                        onClose={() => setShowCreateForm(false)}
                        onSubmit={(newAnnouncement) => {
                            const updatedAnnouncements = [newAnnouncement, ...announcements];
                            setAnnouncements(updatedAnnouncements);
                            localStorage.setItem("cssc-announcements", JSON.stringify(updatedAnnouncements));
                            setShowCreateForm(false);
                        }}
                    />
                )}
            </div>
        </div>
    );
};

// Create Announcement Modal Component
const CreateAnnouncementModal = ({ user, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        subject: "",
        date: "",
        content: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newAnnouncement = {
            id: Date.now(),
            title: formData.subject,
            content: formData.content,
            author: user.name,
            authorRole: user.role || "Anggota", // Default to "Anggota" if no role specified
            subject: formData.subject,
            date: formatDate(formData.date),
            time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
            status: (user.role === "Dosen" || user.role === "Komting") ? "approved" : "Menunggu Persetujuan"
        };

        onSubmit(newAnnouncement);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        };
        return date.toLocaleDateString('id-ID', options);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-3xl p-8 max-w-md w-full shadow-2xl">
                <h2 className="text-2xl font-bold text-white text-center mb-6">
                    Pengumuman
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Mata Kuliah"
                                value={formData.subject}
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                className="w-full p-3 rounded-xl border-2 border-yellow-400 bg-transparent text-white placeholder-gray-200 focus:outline-none focus:border-yellow-300"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="date"
                                value={formData.date}
                                onChange={(e) => setFormData({...formData, date: e.target.value})}
                                className="w-full p-3 rounded-xl border-2 border-yellow-400 bg-transparent text-white focus:outline-none focus:border-yellow-300"
                                required
                            />
                        </div>
                    </div>
                    
                    <div>
                        <textarea
                            placeholder="Masukkan Pengumuman"
                            value={formData.content}
                            onChange={(e) => setFormData({...formData, content: e.target.value})}
                            rows="6"
                            className="w-full p-3 rounded-xl border-2 border-yellow-400 bg-transparent text-white placeholder-gray-200 focus:outline-none focus:border-yellow-300 resize-none"
                            required
                        />
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="flex-1 py-3 bg-green-800 hover:bg-green-900 text-yellow-300 font-bold rounded-xl transition-colors"
                        >
                            Ajukan Pengumuman
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Pengumuman;