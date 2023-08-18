"use client";

import React from 'react'
import { cn } from '@/lib/utils';
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { FreeCounter } from "@/components/free-counter";

interface SidebarProps {
    apiLimitCount: number;
    isPro: boolean;
}

const routes = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
        color: 'text-sky-500'
    },
    {
      label: 'Conversation',
      icon: MessageSquare,
      href: '/conversation',
      color: "text-violet-600",
    },
    {
      label: 'Image Generation',
      icon: ImageIcon,
      color: "text-pink-700",
      href: '/image',
    },
    {
      label: 'Video Generation',
      icon: VideoIcon,
      color: "text-orange-700",
      href: '/video',
    },
    {
      label: 'Music Generation',
      icon: Music,
      color: "text-emerald-500",
      href: '/music',
    },
    {
      label: 'Code Generation',
      icon: Code,
      color: "text-green-700",
      href: '/code',
    },
    {
      label: 'Settings',
      icon: Settings,
      href: '/settings',
    },
  ];

const Sidebar = ({
    apiLimitCount = 0,
    isPro = false
}: SidebarProps) => {
    const pathname = usePathname();
    return (
        <div className='space-y-4 py-4 flex flex-col h-full bg-[#040548] text-white'>
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className='flex items-center pl-3 mb-14'>
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            alt='Logo'
                            src='/logo.png'
                            width={300}
                            height={300}
                        />
                    </div>
                    <h1 className='text-xl font-semibold'><span className='text-[#FDB128]'>1</span>Stop <span className='text-[#EB1260]'>AI</span></h1>
                </Link>

                <div className="space-y-1">
                    {
                        routes.map((route) => (
                            <Link
                                href={route.href}
                                key={route.href}
                                className={cn(
                                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                    pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
                                )}
                            >
                                <div className="flex items-center flex-1">
                                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                    {route.label}
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <FreeCounter
                apiLimitCount={apiLimitCount}
                isPro={isPro}
            />
        </div>
    )
}

export default Sidebar;