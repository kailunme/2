'use client';

import { useRef } from 'react';
import { NavBar } from '@/components/NavBar';
import { VideoButton } from '@/components/VideoButton';
import { MoodWindow } from '@/components/MoodWindow';
import { ButtonWindow } from '@/components/ButtonWindow';
import UpdatesWindow from '@/components/UpdatesWindow';
import GalleryWindow from '@/components/GalleryWindow';
import StatsWindow from '@/components/StatsWindow';
import MainContent from '@/components/MainContent';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      {/* Background Video */}
      <div className="bg-video-container">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="bg-video"
          style={{ pointerEvents: 'none' }}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Three-column layout */}
      <div style={{
        position: 'relative',
        padding: 0,
        marginLeft: 30,
        top: 0,
        left: 0,
        width: '100%',
        height: 'auto',
        minHeight: '100vh',
      }}>

        {/* LEFT COLUMN */}
        <div style={{
          position: 'absolute',
          top: 20,
          minWidth: 220,
          padding: 10,
        }}>
          <NavBar />
          <VideoButton videoRef={videoRef} />
          <MoodWindow />
          <ButtonWindow />
        </div>

        {/* MIDDLE COLUMN */}
        <div style={{
          position: 'absolute',
          top: 20,
          left: 240,
          minWidth: 500,
          padding: 10,
        }}>
          <MainContent />
        </div>

        {/* RIGHT COLUMN */}
        <div style={{
          position: 'absolute',
          top: 20,
          left: 770,
          minWidth: 300,
          padding: 10,
        }}>
          <UpdatesWindow />
          <GalleryWindow />
          <StatsWindow />
        </div>

      </div>
    </>
  );
}
