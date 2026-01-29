'use client'

import { useState, useRef, useCallback } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, Subtitles, Settings, PlayCircle } from 'lucide-react'
import { motion } from 'motion/react'
import type { VideoPlayerState } from '@/lib/types/lesson'

/**
 * Video player component with custom controls
 * Features play/pause, volume, progress, subtitles, fullscreen
 * Uses placeholder image for demo purposes
 */
export function VideoPlayer({ thumbnailUrl }: { thumbnailUrl: string }) {
  const [playerState, setPlayerState] = useState<VideoPlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 600, // 10 minutes in seconds
    volume: 100,
    isMuted: false,
    isFullscreen: false,
    showSubtitles: true,
    playbackSpeed: 1,
  })

  const videoRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  /**
   * Format time in MM:SS format
   */
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  /**
   * Handle play/pause toggle
   */
  const togglePlayPause = useCallback(() => {
    setPlayerState(prev => ({ ...prev, isPlaying: !prev.isPlaying }))
  }, [])

  /**
   * Handle volume change
   */
  const handleVolumeChange = useCallback((newVolume: number) => {
    setPlayerState(prev => ({ ...prev, volume: newVolume, isMuted: newVolume === 0 }))
  }, [])

  /**
   * Toggle mute
   */
  const toggleMute = useCallback(() => {
    setPlayerState(prev => ({
      ...prev,
      isMuted: !prev.isMuted,
      volume: prev.isMuted ? 100 : 0,
    }))
  }, [])

  /**
   * Toggle subtitles
   */
  const toggleSubtitles = useCallback(() => {
    setPlayerState(prev => ({ ...prev, showSubtitles: !prev.showSubtitles }))
  }, [])

  /**
   * Toggle fullscreen
   */
  const toggleFullscreen = useCallback(() => {
    setPlayerState(prev => ({ ...prev, isFullscreen: !prev.isFullscreen }))
  }, [])

  /**
   * Handle progress bar click
   */
  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return

    const rect = progressBarRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    const newTime = (percentage / 100) * playerState.duration

    setPlayerState(prev => ({ ...prev, currentTime: newTime }))
  }, [playerState.duration])

  /**
   * Handle progress bar keyboard navigation
   */
  const handleProgressKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return

    const rect = progressBarRef.current.getBoundingClientRect()
    const seekAmount = playerState.duration * 0.05 // Seek 5% of duration per keypress
    let newTime = playerState.currentTime

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault()
        newTime = Math.min(playerState.duration, playerState.currentTime + seekAmount)
        break
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault()
        newTime = Math.max(0, playerState.currentTime - seekAmount)
        break
      case 'Home':
        e.preventDefault()
        newTime = 0
        break
      case 'End':
        e.preventDefault()
        newTime = playerState.duration
        break
      default:
        return
    }

    setPlayerState(prev => ({ ...prev, currentTime: newTime }))
  }, [playerState.currentTime, playerState.duration])

  const progressPercentage = playerState.duration > 0 
  ? (playerState.currentTime / playerState.duration) * 100 
  : 0

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-xl shadow-lg bg-black group relative"
      ref={videoRef}
    >
      {/* Video Placeholder with Thumbnail */}
      <div
        className="aspect-video relative flex items-center justify-center bg-gray-900 bg-cover bg-center"
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      >
        {/* Play Button Overlay */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlayPause}
          className="flex items-center justify-center rounded-full size-20 bg-primary/90 text-white hover:bg-primary transition-transform shadow-xl"
          aria-label={playerState.isPlaying ? 'Pause video' : 'Play video'}
        >
          {playerState.isPlaying ? (
            <Pause className="!text-4xl fill-1" />
          ) : (
            <Play className="!text-4xl fill-1" />
          )}
        </motion.button>
      </div>

      {/* Custom Controls */}
      <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Progress Bar */}
        <div className="flex items-center gap-4 mb-2">
         <div
            ref={progressBarRef}
            className="h-1.5 flex-1 rounded-full bg-white/30 dark:bg-white/20 relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handleProgressClick}
            onKeyDown={handleProgressKeyDown}
            role="progressbar"
            aria-label="Video playback progress"
            // FIX 2: Ensure these are valid numbers
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progressPercentage)}
            tabIndex={0}
          >
            <motion.div
              className="absolute top-0 left-0 h-full w-1/4 bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.1 }}
            />
            {/* FIX 3: Ensure content inside is also safe */}
            <span className="sr-only">{Math.round(progressPercentage)}%</span>
          </div>
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between text-white text-xs font-semibold">
          {/* Left Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlayPause}
              className="hover:text-primary transition-colors"
              aria-label={playerState.isPlaying ? 'Pause' : 'Play'}
            >
              {playerState.isPlaying ? (
                <Pause className="size-5" />
              ) : (
                <Play className="size-5" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="hover:text-primary transition-colors"
              aria-label={playerState.isMuted ? 'Unmute' : 'Mute'}
            >
              {playerState.isMuted ? (
                <VolumeX className="size-5" />
              ) : (
                <Volume2 className="size-5" />
              )}
            </button>
            <span className="text-xs">
              {formatTime(playerState.currentTime)} / {formatTime(playerState.duration)}
            </span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSubtitles}
              className={`hover:text-primary transition-colors ${
                playerState.showSubtitles ? 'text-primary' : ''
              }`}
              aria-label={playerState.showSubtitles ? 'Hide subtitles' : 'Show subtitles'}
            >
              <Subtitles className="size-5" />
            </button>
            <button
              className="hover:text-primary transition-colors"
              aria-label="Video settings"
            >
              <Settings className="size-5" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="hover:text-primary transition-colors"
              aria-label={playerState.isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              <Maximize className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
