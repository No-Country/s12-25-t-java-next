"use client";
import { useSideBarStore } from "@/store/sidebar";
import React from "react";

interface Props {
  title: string;
}

const BreadCrumbs = ({ title }: Props) => {
  const { setSidebarOpen, sidebarOpen } = useSideBarStore();
  return (
    <div className="flex justify-between items-end lg:hidden">
      {/* <!-- Hamburger Toggle BTN --> */}
      <button
        type="button"
        aria-controls="sidebar"
        onClick={(e) => {
          e.stopPropagation();
          setSidebarOpen(!sidebarOpen);
        }}
        className="z-99999 block  border border-none bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
      >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
              <title>menu</title>
            </svg>
         
      
      </button>
      {/* <!-- Hamburger Toggle BTN --> */}

      {/* Tittle page */}
      <h2 className="text-[1.375rem] font-semibold">{title}</h2>
    </div>
  );
};

export default BreadCrumbs;
