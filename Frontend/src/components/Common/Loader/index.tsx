
'use client';
import React, { useState, useEffect } from 'react'
const Loader = () => {
  const [loading, setLoading] = useState<boolean>(true)
	useEffect(() => {
		setTimeout(() => setLoading(false), 1000)
	}, [])
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="h-16 w-16 animate-ping rounded-full border-4 border-solid border-primary-100 border-t-transparent" />
      </div>
    );
  };
  
  export default Loader;
