"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Download,
  Gamepad2,
  Server,
  Zap,
  Shield,
  Github,
  Twitter,
  Star,
  Users,
  Clock,
  Cpu,
  HardDrive,
  Monitor,
  Wifi,
  CheckCircle,
  Play,
  Settings,
  Database,
  Rocket,
  Heart,
  MessageSquare,
  Award,
  TrendingUp,
  Code,
  Smartphone,
  Sparkles,
  Eye,
  Layers,
  Palette,
  Maximize2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Static Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl animate-pulse delay-3000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

        {/* Static Particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000 opacity-60"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-2000 opacity-60"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-3000 opacity-60"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-4000 opacity-60"></div>
        <div className="absolute top-20 right-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-5000 opacity-60"></div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-slide-in-up { animation: slideInUp 0.8s ease-out; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out; }
        .animate-fade-in { animation: fadeIn 1s ease-out; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-text-glow { animation: textGlow 3s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotate 20s linear infinite; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
      `}</style>

      {/* Header */}
      <header className="relative z-50 px-4 lg:px-6 h-20 flex items-center backdrop-blur-xl bg-black/20 border-b border-white/5 sticky top-0 animate-slide-in-up">
        <div className="flex items-center space-x-3 animate-slide-in-left">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 transform hover:scale-110 transition-all duration-300 animate-glow">
              <Gamepad2 className="w-6 h-6 text-white animate-rotate-slow" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent animate-text-glow">
              KPLauncher
            </span>
            <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-400/30 backdrop-blur-sm animate-pulse">
              v2.1.0
            </Badge>
          </div>
        </div>
        <nav className="ml-auto flex gap-6 animate-slide-in-right">
          {["Features", "Screenshots", "Specs", "Reviews", "Download", "FAQ"].map((item, index) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 relative">
          <div className="container px-4 md:px-6 mx-auto relative">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6">
                {/* Static Badges */}
                <div className="flex items-center justify-center gap-3 mb-8 animate-slide-in-up">
                  {[
                    { icon: CheckCircle, text: "เสถียร", color: "from-green-400 to-emerald-400" },
                    { icon: Rocket, text: "Next Gen", color: "from-blue-400 to-cyan-400" },
                    { icon: Award, text: "#1 Choice", color: "from-yellow-400 to-orange-400" },
                  ].map((badge, index) => (
                    <div
                      key={index}
                      className="group relative transform hover:scale-110 transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${badge.color} rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000`}
                      ></div>
                      <Badge
                        className={`relative bg-gradient-to-r ${badge.color}/20 text-white border border-white/20 backdrop-blur-sm px-4 py-2 shadow-lg`}
                      >
                        <badge.icon className="w-3 h-3 mr-2 animate-pulse" />
                        {badge.text}
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* Main Title with 3D Effect */}
                <div className="relative animate-slide-in-up delay-300">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight animate-text-glow">
                    <span className="bg-gradient-to-b from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                      KPLauncher
                    </span>
                  </h1>
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-cyan-400/20 blur-3xl -z-10 transform scale-110 animate-pulse"></div>
                </div>

                <div className="space-y-4 max-w-4xl animate-slide-in-up delay-500">
                  <p className="text-xl md:text-2xl lg:text-3xl font-medium bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent">
                    เชื่อมต่อกับทุกเซิฟเวอร์และม็อดของ SAMP ได้อย่างง่ายดายในโปรแกรมเดียว
                  </p>
                  <p className="text-lg md:text-xl text-gray-400 font-light">
                    The ultimate SAMP launcher with advanced features, modern UI, and seamless server connectivity
                  </p>
                </div>

                {/* Static Stats */}
                <div className="flex flex-wrap justify-center gap-8 mt-12 animate-slide-in-up delay-700">
                  {[
                    { icon: Users, value: "15,000+", label: "Active Users", color: "from-blue-400 to-cyan-400" },
                    { icon: Server, value: "800+", label: "Servers", color: "from-green-400 to-emerald-400" },
                    { icon: Star, value: "4.9/5", label: "Rating", color: "from-yellow-400 to-orange-400" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="group relative transform hover:scale-110 transition-all duration-500 hover:-translate-y-3 animate-scale-in"
                      style={{ animationDelay: `${800 + index * 200}ms` }}
                    >
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}
                      ></div>
                      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg animate-pulse`}
                          >
                            <stat.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-bold text-lg">{stat.value}</div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3D Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mt-16 animate-slide-in-up delay-1000">
                {[
                  { icon: Download, text: "Download Free", primary: true },
                  { icon: Play, text: "Watch Demo", primary: false },
                  { icon: Github, text: "GitHub", primary: false },
                ].map((btn, index) => (
                  <div
                    key={index}
                    className="group relative transform hover:scale-105 transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${1200 + index * 100}ms` }}
                  >
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${btn.primary ? "from-blue-400 to-cyan-400" : "from-white/20 to-white/10"} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}
                    ></div>
                    <Button
                      size="lg"
                      className={`relative ${
                        btn.primary
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 animate-glow"
                          : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                      } backdrop-blur-xl px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300`}
                    >
                      <btn.icon className="mr-3 h-5 w-5 animate-pulse" />
                      {btn.text}
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-2 text-sm text-gray-400 animate-fade-in delay-1500">
                <p className="flex items-center justify-center gap-4 flex-wrap">
                  {["ฟรี 100%", "ไม่มีโฆษณา", "Open Source", "รองรับ Windows 10/11"].map((text, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 animate-slide-in-up"
                      style={{ animationDelay: `${1600 + index * 100}ms` }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 animate-pulse" /> {text}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32 relative">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-20 animate-slide-in-up">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <Badge className="relative bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-400/30 backdrop-blur-sm px-6 py-3">
                  <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                  Premium Features
                </Badge>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent animate-text-glow">
                ทำไมต้องเลือก KPLauncher?
              </h2>
              <p className="max-w-3xl text-xl text-gray-300 leading-relaxed">
                ประสบการณ์การเล่น SAMP ที่ดีที่สุดด้วยฟีเจอร์ที่ทันสมัยและใช้งานง่าย
              </p>
            </div>

            <div className="grid gap-8 lg:gap-12 lg:grid-cols-3 md:grid-cols-2 max-w-7xl mx-auto">
              {[
                {
                  icon: Server,
                  title: "เชื่อมต่อทุกเซิฟเวอร์",
                  description:
                    "รองรับการเชื่อมต่อกับเซิฟเวอร์ SAMP ทุกประเภท ไม่ว่าจะเป็นม็อดไหนก็ตาม พร้อมระบบ Auto-detect server mods",
                  color: "from-blue-400 to-cyan-400",
                  badges: ["RP Servers", "DM Servers", "Stunt Servers"],
                },
                {
                  icon: Zap,
                  title: "เร็วและเสถียร",
                  description: "ประสิทธิภาพสูง เปิดเกมเร็วใน 3 วินาที และเชื่อมต่อเซิฟเวอร์ได้อย่างเสถียร พร้อม Auto-reconnect",
                  color: "from-green-400 to-emerald-400",
                  progress: 95,
                },
                {
                  icon: Shield,
                  title: "ปลอดภัย 100%",
                  description: "ระบบรักษาความปลอดภัยขั้นสูง ป้องกันไวรัสและมัลแวร์ พร้อม Digital Signature และ Code Signing",
                  color: "from-purple-400 to-pink-400",
                  verified: true,
                },
                {
                  icon: Settings,
                  title: "ปรับแต่งได้ทุกอย่าง",
                  description: "ตั้งค่าได้ตามใจ เปลี่ยนธีม สี เสียง และ UI ได้อย่างอิสระ พร้อม Plugin System",
                  color: "from-orange-400 to-red-400",
                },
                {
                  icon: Database,
                  title: "จัดการม็อดอัตโนมัติ",
                  description: "ดาวน์โหลดและติดตั้งม็อดอัตโนมัติ พร้อมระบบ Version Control และ Backup",
                  color: "from-yellow-400 to-orange-400",
                },
                {
                  icon: Heart,
                  title: "Community Features",
                  description: "เชื่อมต่อกับเพื่อน แชท Voice Chat และแชร์ประสบการณ์การเล่นกับชุมชน",
                  color: "from-pink-400 to-purple-400",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative transform hover:scale-105 transition-all duration-500 hover:-translate-y-4 animate-slide-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Glow Effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}
                  ></div>

                  {/* Card */}
                  <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden h-full">
                    <CardContent className="p-8 space-y-6">
                      {/* Icon */}
                      <div className="relative">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                        >
                          <feature.icon className="w-8 h-8 text-white animate-pulse" />
                        </div>
                        <div
                          className={`absolute -inset-2 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}
                        ></div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                      </div>

                      {/* Additional Elements */}
                      {feature.badges && (
                        <div className="flex flex-wrap gap-2">
                          {feature.badges.map((badge, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-white/10 text-white border-white/20 backdrop-blur-sm animate-pulse"
                              style={{ animationDelay: `${i * 200}ms` }}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {feature.progress && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Launch Speed</span>
                            <span className="text-green-400 font-semibold animate-pulse">{feature.progress}%</span>
                          </div>
                          <div className="relative">
                            <Progress value={feature.progress} className="h-3 bg-white/10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur opacity-50 animate-pulse"></div>
                          </div>
                        </div>
                      )}

                      {feature.verified && (
                        <div className="flex items-center gap-2 animate-fade-in">
                          <CheckCircle className="w-5 h-5 text-green-400 animate-pulse" />
                          <span className="text-sm text-gray-300">Verified by Microsoft</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interface Preview Section - Redesigned */}
        <section id="screenshots" className="w-full py-20 md:py-32 relative">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-20 animate-slide-in-up">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <Badge className="relative bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-400/30 backdrop-blur-sm px-6 py-3">
                  <Eye className="w-4 h-4 mr-2 animate-pulse" />
                  Interface Preview
                </Badge>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-white via-purple-100 to-pink-200 bg-clip-text text-transparent animate-text-glow">
                ดีไซน์ที่ทันสมัย
              </h2>
              <p className="max-w-3xl text-xl text-gray-300 leading-relaxed">
                อินเทอร์เฟซที่สวยงาม ใช้งานง่าย และตอบสนองได้เร็ว
              </p>
            </div>

            {/* New Interface Preview Layout */}
            <div className="max-w-7xl mx-auto space-y-16">
              {/* Main Interface Showcase */}
              <div className="animate-slide-in-up delay-300">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                    <Monitor className="w-8 h-8 text-blue-400" />
                    หน้าหลัก - Main Dashboard
                  </h3>
                  <p className="text-gray-400 text-lg">ศูนย์รวมการควบคุมทั้งหมดในที่เดียว</p>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-1000"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                    <Image
                      src="/placeholder.svg?height=700&width=1200"
                      width="1200"
                      height="700"
                      alt="KPLauncher Main Interface"
                      className="w-full rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-sm rounded-xl px-4 py-2">
                      <span className="text-white text-sm font-medium">Live Preview</span>
                    </div>
                  </div>
                </div>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  {[
                    {
                      icon: Layers,
                      title: "Multi-Tab Interface",
                      description: "จัดการหลายเซิฟเวอร์พร้อมกัน",
                      color: "from-blue-400 to-cyan-400",
                    },
                    {
                      icon: Palette,
                      title: "Customizable Themes",
                      description: "เปลี่ยนธีมตามความชอบ",
                      color: "from-purple-400 to-pink-400",
                    },
                    {
                      icon: Maximize2,
                      title: "Responsive Design",
                      description: "ปรับขนาดได้ทุกหน้าจอ",
                      color: "from-green-400 to-emerald-400",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="group relative animate-scale-in"
                      style={{ animationDelay: `${600 + index * 200}ms` }}
                    >
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}
                      ></div>
                      <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                        >
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interface Components Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-slide-in-up delay-500">
                {[
                  {
                    title: "Server Browser",
                    description: "ค้นหาและเชื่อมต่อเซิฟเวอร์ได้อย่างรวดเร็ว",
                    color: "from-green-400 to-emerald-400",
                    features: ["Real-time Server Status", "Advanced Filters", "Favorite System", "Ping Display"],
                  },
                  {
                    title: "Mod Manager",
                    description: "จัดการม็อดและปลั๊กอินอย่างง่ายดาย",
                    color: "from-purple-400 to-pink-400",
                    features: ["Auto Installation", "Version Control", "Backup System", "Compatibility Check"],
                  },
                  {
                    title: "Settings Panel",
                    description: "ปรับแต่งการทำงานได้ทุกรายละเอียด",
                    color: "from-orange-400 to-red-400",
                    features: [
                      "Graphics Settings",
                      "Audio Configuration",
                      "Keybind Customization",
                      "Performance Tuning",
                    ],
                  },
                  {
                    title: "Community Hub",
                    description: "เชื่อมต่อกับเพื่อนและชุมชน SAMP",
                    color: "from-blue-400 to-cyan-400",
                    features: ["Friend System", "Voice Chat", "Screenshot Sharing", "Event Calendar"],
                  },
                ].map((component, index) => (
                  <div
                    key={index}
                    className="group relative animate-slide-in-up"
                    style={{ animationDelay: `${700 + index * 200}ms` }}
                  >
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${component.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}
                    ></div>
                    <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden h-full">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=500"
                          width="500"
                          height="300"
                          alt={component.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${component.color}/20 to-transparent`}></div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-10 h-10 bg-gradient-to-r ${component.color} rounded-xl flex items-center justify-center`}
                          >
                            <Settings className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{component.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-6">{component.description}</p>
                        <div className="space-y-2">
                          {component.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span className="text-gray-400 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Interface Stats */}
              <div className="text-center animate-slide-in-up delay-1000">
                <h3 className="text-2xl font-bold text-white mb-8">Interface Performance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "Load Time", value: "< 2s", color: "from-green-400 to-emerald-400" },
                    { label: "Memory Usage", value: "< 50MB", color: "from-blue-400 to-cyan-400" },
                    { label: "Response Time", value: "< 100ms", color: "from-purple-400 to-pink-400" },
                    { label: "Uptime", value: "99.9%", color: "from-yellow-400 to-orange-400" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="group relative animate-scale-in"
                      style={{ animationDelay: `${1200 + index * 100}ms` }}
                    >
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}
                      ></div>
                      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section id="specs" className="w-full py-20 md:py-32 relative">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-20 animate-slide-in-up">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <Badge className="relative bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-400/30 backdrop-blur-sm px-6 py-3">
                  <Cpu className="w-4 h-4 mr-2 animate-spin" />
                  System Requirements
                </Badge>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-white via-green-100 to-emerald-200 bg-clip-text text-transparent animate-text-glow">
                ความต้องการของระบบ
              </h2>
              <p className="max-w-3xl text-xl text-gray-300 leading-relaxed">
                KPLauncher ออกแบบมาให้ทำงานได้ดีบนคอมพิวเตอร์ทุกสเปค
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
              {[
                {
                  title: "ความต้องการขั้นต่ำ",
                  icon: CheckCircle,
                  color: "from-green-400 to-emerald-400",
                  specs: [
                    { icon: Monitor, label: "OS", value: "Windows 10 (64-bit)" },
                    { icon: Cpu, label: "Processor", value: "Intel Core i3 / AMD Ryzen 3" },
                    { icon: Database, label: "Memory", value: "4 GB RAM" },
                    { icon: HardDrive, label: "Storage", value: "100 MB available space" },
                    { icon: Wifi, label: "Network", value: "Broadband Internet connection" },
                  ],
                },
                {
                  title: "แนะนำ (เพื่อประสิทธิภาพสูงสุด)",
                  icon: Star,
                  color: "from-blue-400 to-cyan-400",
                  specs: [
                    { icon: Monitor, label: "OS", value: "Windows 11 (64-bit)" },
                    { icon: Cpu, label: "Processor", value: "Intel Core i5 / AMD Ryzen 5" },
                    { icon: Database, label: "Memory", value: "8 GB RAM" },
                    { icon: HardDrive, label: "Storage", value: "500 MB available space (SSD)" },
                    { icon: Wifi, label: "Network", value: "High-speed Internet connection" },
                  ],
                },
              ].map((req, index) => (
                <div
                  key={index}
                  className="group relative transform hover:scale-105 transition-all duration-500 hover:-translate-y-4 animate-slide-in-up"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${req.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}
                  ></div>
                  <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                    <CardHeader className="pb-6">
                      <CardTitle className="flex items-center gap-3 text-2xl">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${req.color} rounded-xl flex items-center justify-center shadow-lg animate-pulse`}
                        >
                          <req.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                          {req.title}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {req.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 group/item animate-slide-in-left"
                          style={{ animationDelay: `${index * 300 + i * 100}ms` }}
                        >
                          <div
                            className={`w-10 h-10 bg-gradient-to-r ${req.color}/20 rounded-xl flex items-center justify-center border border-white/10 group-hover/item:scale-110 transition-all duration-300`}
                          >
                            <spec.icon className="w-5 h-5 text-blue-400 animate-pulse" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-semibold">{spec.label}</p>
                            <p className="text-gray-400">{spec.value}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-20 animate-slide-in-up">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-6 animate-text-glow">
                ตัวเลขที่พูดแทนเรา
              </h2>
              <p className="text-xl text-gray-300">ความไว้วางใจจากชุมชน SAMP ทั่วโลก</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 max-w-6xl mx-auto">
              {[
                {
                  icon: Users,
                  value: "15,000+",
                  label: "ผู้ใช้งานทั่วโลก",
                  sublabel: "เพิ่มขึ้น 25% ในเดือนที่ผ่านมา",
                  color: "from-blue-400 to-cyan-400",
                },
                {
                  icon: Server,
                  value: "800+",
                  label: "เซิฟเวอร์ที่รองรับ",
                  sublabel: "ครอบคลุมทุกภูมิภาค",
                  color: "from-green-400 to-emerald-400",
                },
                {
                  icon: Clock,
                  value: "99.9%",
                  label: "เวลาทำงาน",
                  sublabel: "เสถียรตลอด 24/7",
                  color: "from-yellow-400 to-orange-400",
                },
                {
                  icon: TrendingUp,
                  value: "4.9/5",
                  label: "คะแนนรีวิว",
                  sublabel: "จาก 2,500+ รีวิว",
                  color: "from-purple-400 to-pink-400",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative transform hover:scale-110 transition-all duration-500 hover:-translate-y-6 animate-scale-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}
                  ></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-2xl">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-all duration-300 animate-pulse`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-white mb-2 animate-text-glow">{stat.value}</div>
                    <div className="text-gray-200 font-semibold mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-400">{stat.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="w-full py-20 md:py-32 relative">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <Badge className="relative bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-400/30 backdrop-blur-sm px-6 py-3 animate-slide-in-up">
                  <Download className="w-4 h-4 mr-2 animate-bounce" />
                  Ready to Download
                </Badge>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-white via-green-100 to-emerald-200 bg-clip-text text-transparent animate-slide-in-up delay-200 animate-text-glow">
                เริ่มต้นใช้งานวันนี้
              </h2>

              <p className="max-w-2xl text-xl text-gray-300 leading-relaxed animate-slide-in-up delay-400">
                ดาวน์โหลด KPLauncher ฟรี และเริ่มเล่น SAMP ได้ทันที
              </p>

              <div className="grid gap-8 lg:grid-cols-3 w-full max-w-5xl mt-16">
                {[
                  {
                    icon: Monitor,
                    title: "Windows",
                    subtitle: "รองรับ Windows 10/11",
                    buttonText: "Download (25MB)",
                    color: "from-blue-400 to-cyan-400",
                    primary: true,
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile",
                    subtitle: "Coming Soon",
                    buttonText: "In Development",
                    color: "from-gray-400 to-slate-400",
                    disabled: true,
                  },
                  {
                    icon: Code,
                    title: "Source Code",
                    subtitle: "Open Source",
                    buttonText: "View on GitHub",
                    color: "from-green-400 to-emerald-400",
                    outline: true,
                  },
                ].map((download, index) => (
                  <div
                    key={index}
                    className="group relative transform hover:scale-105 transition-all duration-500 hover:-translate-y-4 animate-scale-in"
                    style={{ animationDelay: `${600 + index * 200}ms` }}
                  >
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${download.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}
                    ></div>
                    <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden h-full">
                      <CardContent className="p-8 text-center space-y-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${download.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:scale-110 transition-all duration-300 animate-pulse`}
                        >
                          <download.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{download.title}</h3>
                          <p className="text-gray-300">{download.subtitle}</p>
                        </div>
                        <div className="relative">
                          <div
                            className={`absolute -inset-1 bg-gradient-to-r ${download.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}
                          ></div>
                          <Button
                            className={`relative w-full ${
                              download.primary
                                ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white animate-glow"
                                : download.outline
                                  ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                                  : "bg-gray-600 text-gray-400"
                            } backdrop-blur-xl rounded-2xl py-3 font-semibold transition-all duration-300`}
                            disabled={download.disabled}
                          >
                            {download.primary && <Download className="mr-2 h-4 w-4 animate-bounce" />}
                            {download.disabled && <Clock className="mr-2 h-4 w-4 animate-spin" />}
                            {download.outline && <Github className="mr-2 h-4 w-4 animate-pulse" />}
                            {download.buttonText}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-3 text-gray-400 animate-slide-in-up delay-1000">
                <div className="flex items-center justify-center gap-6 flex-wrap text-sm">
                  {["ฟรี 100%", "ไม่มีโฆษณา", "ไม่มี Malware", "Auto Update"].map((text, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 animate-fade-in"
                      style={{ animationDelay: `${1200 + index * 100}ms` }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 animate-pulse" /> {text}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-6 flex-wrap text-sm animate-fade-in delay-1600">
                  <span>📊 ขนาดไฟล์: 25MB</span>
                  <span>🔒 Digital Signed</span>
                  <span>🛡️ Virus Scanned</span>
                </div>
                <div className="flex items-center justify-center gap-6 flex-wrap text-sm animate-fade-in delay-1800">
                  <span>⚡ ติดตั้งใน 30 วินาที</span>
                  <span>🚀 เปิดใช้งานได้ทันที</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 bg-black/30 backdrop-blur-xl border-t border-white/5 relative z-10 animate-slide-in-up">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
            <div className="space-y-6 animate-slide-in-left">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 animate-glow">
                    <Gamepad2 className="w-6 h-6 text-white animate-pulse" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-30"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent animate-text-glow">
                  KPLauncher
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The ultimate SAMP launcher for modern gamers. Free, secure, and feature-rich.
              </p>
              <div className="flex gap-4">
                {[Github, Twitter, MessageSquare].map((Icon, index) => (
                  <div
                    key={index}
                    className="group relative animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-1000"></div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="relative text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl backdrop-blur-sm transform hover:scale-110 transition-all duration-300"
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Download", "System Requirements", "Changelog"],
              },
              {
                title: "Support",
                links: ["FAQ", "Documentation", "Contact Support", "Bug Report"],
              },
              {
                title: "Legal",
                links: ["Privacy Policy", "Terms of Service", "License", "Open Source"],
              },
            ].map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="space-y-6 animate-slide-in-up"
                style={{ animationDelay: `${(sectionIndex + 1) * 200}ms` }}
              >
                <h4 className="text-white font-semibold text-lg">{section.title}</h4>
                <nav className="flex flex-col space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href="#"
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 animate-fade-in"
                      style={{ animationDelay: `${(sectionIndex + 1) * 200 + linkIndex * 50}ms` }}
                    >
                      {link}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center pt-12 mt-12 border-t border-white/10 animate-fade-in delay-1000">
            <p className="text-gray-400">© 2024 KongProject. All rights reserved.</p>
            <p className="text-gray-400 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> for SAMP Community
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
