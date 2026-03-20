import circlePurple from "../../assets/images/Bulat_Ungu.png";
import logoORWhite from "../../assets/images/Logo_OR_White.png";
import { Link } from "react-router-dom";
import SidebarUser from "./SidebarItem";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Home,
  ShieldCheck,
  CreditCard,
  FileText,
  ClipboardCheck,
  BookOpen,
  ListTodo,
  LogOut,
} from "lucide-react";

export default function UserLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex min-h-screen bg-[#1a0023] text-white overflow-hidden relative">
      {/* ================= BACKGROUND ================= */}

      {/* Circle Ungu */}
      <img
        src={circlePurple}
        alt=""
        className="absolute -top-20 left-1/3 w-[300px] "
      />
      <img
        src={circlePurple}
        alt=""
        className="absolute -bottom-20 left-1/4 "
      />
      <img src={circlePurple} alt="" className="absolute top-1/3 -right-10" />

      {/* Glow Biru kanan bawah */}
      <div className="absolute -bottom-40 -right-40 w-[300px] h-[300px] bg-[#01FFFF] blur-[80px] rounded-full" />

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[260px] bg-[#501A5E] flex flex-col justify-between py-8 px-6 z-20 shadow-xl transition-transform duration-300
  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo */}
        <div>
          <div className="mb-10">
            <img src={logoORWhite} alt="logo" className="w-[160px]" />
          </div>

          {/* Menu */}
          <nav className="flex flex-col gap-4 text-sm">
            <SidebarUser
              to="/dashboard"
              icon={<Home size={18} />}
              label="Dashboard"
            />

            <SidebarUser
              to="/verifikasi"
              icon={<ShieldCheck size={18} />}
              label="Verifikasi"
            />
            <SidebarUser
              to="/pembayaran"
              icon={<CreditCard size={18} />}
              label="Pembayaran"
            />
            <SidebarUser
              to="/ujian"
              icon={<FileText size={18} />}
              label="Ujian"
            />
            <SidebarUser
              to="/absensi"
              icon={<ClipboardCheck size={18} />}
              label="Absensi"
            />
            <SidebarUser
              to="/materi"
              icon={<BookOpen size={18} />}
              label="Materi"
            />
            <SidebarUser
              to="/tugas"
              icon={<ListTodo size={18} />}
              label="Tugas"
            />
          </nav>
        </div>

        {/* Logout */}
        <button className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition">
          <LogOut size={18} />
          Keluar
        </button>
      </aside>

      {/* ================= CONTENT ================= */}
      <main
        className={`flex-1 relative z-10 transition-all duration-300
  ${isOpen ? "ml-[260px]" : "ml-0"}`}
      >
        {/* ===== TOP BAR ===== */}
        <div className="flex items-center gap-4 px-6 py-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white/10 backdrop-blur px-3 py-2 rounded-lg hover:bg-white/20 transition"
          >
            <Menu size={18} />
          </button>

          
        </div>

        {/* ===== CONTENT ===== */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}

/* ================= COMPONENT ITEM ================= */
function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition
      ${active ? "bg-[#6A1B7A]" : "hover:bg-[#5c206b]"}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
