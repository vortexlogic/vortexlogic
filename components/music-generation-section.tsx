'use client'

import { useEffect,useRef, useState } from 'react'

import {
  IconCheck as Check,
  IconCopy as Copy,
  IconDownload as Download,
  IconMusic as MusicIcon,
  IconPlayerPause as PauseIcon,
  IconPlayerPlay as PlayIcon,
  IconSparkles as Sparkles,
  IconVolume as VolumeIcon,
  IconVolume3 as MuteIcon
} from '@tabler/icons-react'
import { toast } from 'sonner'

import { cn } from '@/lib/utils'

interface MusicGenerationSectionProps {
  tool: {
    state:
      | 'input-streaming'
      | 'input-available'
      | 'output-available'
      | 'output-error'
    input: {
      prompt: string
      duration?: number
      tempo?: 'slow' | 'medium' | 'fast'
    }
    output?: {
      url: string
      title: string
      genre: string
      cover?: string
      prompt: string
      duration: number
      tempo: 'slow' | 'medium' | 'fast'
      provider: string
    }
    errorText?: string
  }
}

export function MusicGenerationSection({ tool }: MusicGenerationSectionProps) {
  const { state, input, output, errorText } = tool
  const [copied, setCopied] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const isGenerating =
    state === 'input-streaming' ||
    state === 'input-available' ||
    (!output && state !== 'output-error')
  const promptText = output?.prompt || input.prompt
  const audioUrl = output?.url

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch(e => console.error(e))
      setIsPlaying(true)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleAudioEnded = () => {
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = val
      setCurrentTime(val)
    }
  }

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(promptText)
    setCopied(true)
    toast.success('Prompt copied to clipboard')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = async () => {
    if (!audioUrl) return
    try {
      toast.info('Downloading audio...')
      const response = await fetch(audioUrl)
      const blob = await response.blob()
      const blobUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = `vortexlogic-music-${Date.now()}.mp3`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(blobUrl)
      toast.success('Download complete')
    } catch (e) {
      console.error(e)
      window.open(audioUrl, '_blank')
    }
  }

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60)
    const secs = Math.floor(time % 60)
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  if (state === 'output-error' && !output) {
    return (
      <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
        <h4 className="font-semibold mb-1">Music Generation Failed</h4>
        <p className="text-xs opacity-90">
          {errorText || 'An error occurred during music generation.'}
        </p>
      </div>
    )
  }

  return (
    <div className="w-full my-4 animate-in fade-in-50 duration-300">
      <div className="relative overflow-hidden rounded-2xl border bg-card/60 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-xl">
        {/* Shimmer / Loader State */}
        {isGenerating ? (
          <div className="flex flex-col items-center justify-center p-8 min-h-64 space-y-4 text-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-cyan-500/30 bg-cyan-500/5 animate-spin duration-[3000ms]">
                <Sparkles className="w-8 h-8 text-cyan-500 animate-pulse" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground animate-pulse">
                Composing high-fidelity audio tracks...
              </p>
              <p className="text-xs text-muted-foreground max-w-sm">
                &ldquo;{input.prompt}&rdquo;
              </p>
            </div>
            <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-500 rounded-full animate-progress-bar"
                style={{ width: '40%' }}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row">
            {/* Visual Display: Vinyl Player & Controls */}
            <div className="relative flex-1 bg-gradient-to-br from-slate-900 to-black p-6 flex flex-col items-center justify-center min-h-64">
              {audioUrl && (
                <audio
                  ref={audioRef}
                  src={audioUrl}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={handleAudioEnded}
                />
              )}

              {/* Vinyl cover container */}
              <div className="relative flex flex-col items-center">
                <div className="relative w-36 h-36 md:w-40 md:h-40">
                  {/* Outer spinning ring */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-full border-4 border-slate-800 bg-black shadow-2xl transition-transform duration-[4000ms] linear",
                      isPlaying ? "animate-spin" : ""
                    )}
                    style={{
                      backgroundImage: `radial-gradient(circle, #2a2a2a 20%, #111 60%, #000 100%)`
                    }}
                  >
                    {/* Inner grooves */}
                    <div className="absolute inset-2 rounded-full border border-slate-700/30" />
                    <div className="absolute inset-4 rounded-full border border-slate-700/30" />
                    <div className="absolute inset-6 rounded-full border border-slate-700/30" />
                    <div className="absolute inset-8 rounded-full border border-slate-700/30" />

                    {/* Album Art Image center */}
                    <div className="absolute inset-10 rounded-full overflow-hidden border-2 border-slate-900 bg-slate-800">
                      {output?.cover ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={output.cover}
                          alt="Album Art"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <MusicIcon className="w-8 h-8 text-cyan-500/50" />
                        </div>
                      )}
                    </div>
                    {/* Center spindle hole */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-slate-700" />
                  </div>
                </div>

                {/* Title & Genre details */}
                <div className="mt-4 text-center space-y-1">
                  <h3 className="text-sm font-semibold text-white truncate max-w-64">
                    {output?.title || 'Generated Track'}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium">
                    {output?.genre || 'AI Music'}
                  </p>
                </div>
              </div>

              {/* Custom audio controls */}
              <div className="w-full mt-6 space-y-3 px-2">
                {/* Seekbar progress */}
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <span>{formatTime(currentTime)}</span>
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="flex-1 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 focus:outline-none"
                  />
                  <span>{formatTime(duration)}</span>
                </div>

                {/* Controls row */}
                <div className="flex items-center justify-between">
                  {/* Volume Control */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {isMuted ? (
                        <MuteIcon className="w-4 h-4" />
                      ) : (
                        <VolumeIcon className="w-4 h-4" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={volume}
                      onChange={e => {
                        setVolume(parseFloat(e.target.value))
                        setIsMuted(false)
                      }}
                      className="w-16 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 focus:outline-none"
                    />
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={togglePlay}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-black shadow-lg transition-transform active:scale-95"
                  >
                    {isPlaying ? (
                      <PauseIcon className="w-5 h-5 fill-current" />
                    ) : (
                      <PlayIcon className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </button>

                  <div className="w-20" /> {/* Spacer */}
                </div>
              </div>
            </div>

            {/* Info panel */}
            <div className="w-full md:w-80 p-4 border-t md:border-t-0 md:border-l flex flex-col justify-between bg-muted/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Generated Audio
                  </span>
                  {output?.provider && (
                    <span className="text-[10px] font-medium uppercase px-2 py-0.5 rounded-full border bg-background text-muted-foreground">
                      {output.provider}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-medium text-muted-foreground">
                    Prompt
                  </span>
                  <p className="text-xs text-foreground leading-relaxed line-clamp-6 bg-muted/40 p-2.5 rounded-lg border border-border/50">
                    {promptText}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-muted/40 p-2 rounded-lg border border-border/50">
                    <div className="text-[10px] text-muted-foreground">
                      Tempo
                    </div>
                    <div className="font-semibold capitalize">
                      {output?.tempo || input.tempo || 'medium'}
                    </div>
                  </div>
                  <div className="bg-muted/40 p-2 rounded-lg border border-border/50">
                    <div className="text-[10px] text-muted-foreground">
                      Duration
                    </div>
                    <div className="font-semibold">
                      {output?.duration || input.duration || 30}s
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-border/40">
                <button
                  onClick={handleCopyPrompt}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border bg-background hover:bg-muted text-foreground transition-colors"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  Copy Prompt
                </button>
                <button
                  onClick={handleDownload}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-cyan-500 hover:bg-cyan-600 text-black shadow-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
