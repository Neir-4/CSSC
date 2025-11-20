import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="pt-20 min-h-screen bg-[#f5f5f0] flex justify-center items-start px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl mt-6 sm:mt-10 border border-gray-100 overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-[#8db89a] to-[#7da88a] px-6 sm:px-8 py-8 text-white">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">{user.name}</h1>
                <p className="text-white/90 text-sm sm:text-base">
                  {user.role === "dosen" ? "Dosen" : "Mahasiswa"}
                </p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="text-xl font-bold mb-6 text-[#1e1e1e]">Informasi Personal</h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-3">
                <span className="font-semibold text-[#4b4b4b] text-sm sm:text-base w-full sm:w-32 mb-1 sm:mb-0">Nama:</span>
                <span className="text-[#1e1e1e] text-sm sm:text-base">{user.name}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-3">
                <span className="font-semibold text-[#4b4b4b] text-sm sm:text-base w-full sm:w-32 mb-1 sm:mb-0">Email:</span>
                <span className="text-[#1e1e1e] text-sm sm:text-base break-all">{user.email}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-3">
                <span className="font-semibold text-[#4b4b4b] text-sm sm:text-base w-full sm:w-32 mb-1 sm:mb-0">No HP:</span>
                <span className="text-[#1e1e1e] text-sm sm:text-base">{user.phone}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-3">
                <span className="font-semibold text-[#4b4b4b] text-sm sm:text-base w-full sm:w-32 mb-1 sm:mb-0">Peran:</span>
                <span className="text-[#1e1e1e] text-sm sm:text-base">
                  {user.role === "dosen" ? "Dosen" : "Mahasiswa"}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center pb-3">
                <span className="font-semibold text-[#4b4b4b] text-sm sm:text-base w-full sm:w-32 mb-1 sm:mb-0">
                  {user.role === "dosen" ? "NIP:" : "NIM:"}
                </span>
                <span className="text-[#1e1e1e] text-sm sm:text-base">{user.identityNumber}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-end mt-8 gap-3">
              <button
                onClick={handleLogout}
                className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
