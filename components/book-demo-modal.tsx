'use client'

import React, { useState } from 'react'

import {
  IconBuilding as BuildingIcon,
  IconCalendar as CalendarIcon,
  IconCheck as CheckIcon,
  IconClock as ClockIcon,
  IconMail as MailIcon,
  IconMessage as MessageIcon,
  IconUser as UserIcon} from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle} from '@/components/ui/dialog'

interface BookDemoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookDemoModal({ open, onOpenChange }: BookDemoModalProps) {
  const [step, setStep] = useState(1) // 1: Form, 2: Schedule, 3: Success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: ''
  })
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setStep(2)
    }
  }

  const handleScheduleSubmit = () => {
    if (selectedDate && selectedTime) {
      setStep(3)
    }
  }

  const resetModal = () => {
    setStep(1)
    setFormData({ name: '', email: '', company: '', useCase: '' })
    setSelectedDate(null)
    setSelectedTime(null)
    onOpenChange(false)
  }

  // Generate a mock list of next 7 days for scheduling
  const getNextDays = () => {
    const days = []
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' }
    for (let i = 1; i <= 7; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      // Skip weekends
      if (date.getDay() === 0 || date.getDay() === 6) continue
      days.push({
        formatted: date.toLocaleDateString('en-US', options),
        value: date.toISOString().split('T')[0]
      })
    }
    return days.slice(0, 5) // Return 5 business days
  }

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM'
  ]

  const nextDays = getNextDays()

  return (
    <Dialog open={open} onOpenChange={(val) => {
      if (!val) resetModal()
      else onOpenChange(val)
    }}>
      <DialogContent className="sm:max-w-[480px] bg-neutral-950 border-neutral-800 text-white rounded-2xl shadow-2xl p-6 overflow-hidden">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white via-neutral-200 to-neutral-400">
            {step === 1 && 'Book a VortexLogic Demo'}
            {step === 2 && 'Select Date & Time'}
            {step === 3 && 'Demo Confirmed!'}
          </DialogTitle>
          <DialogDescription className="text-xs text-neutral-400 mt-1">
            {step === 1 && 'Experience the future of cinematic AI video & image generation.'}
            {step === 2 && 'Choose a convenient slot for a 30-minute interactive session.'}
            {step === 3 && 'Your calendar invitation and details are on the way.'}
          </DialogDescription>
        </DialogHeader>

        {/* STEP 1: Details Form */}
        {step === 1 && (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="space-y-3">
              <div className="relative">
                <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-850 bg-neutral-900/60 text-xs text-white placeholder-neutral-505 focus:outline-hidden focus:border-rose-500/50 transition-colors"
                />
              </div>

              <div className="relative">
                <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Work Email"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-850 bg-neutral-900/60 text-xs text-white placeholder-neutral-505 focus:outline-hidden focus:border-rose-500/50 transition-colors"
                />
              </div>

              <div className="relative">
                <BuildingIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-850 bg-neutral-900/60 text-xs text-white placeholder-neutral-505 focus:outline-hidden focus:border-rose-500/50 transition-colors"
                />
              </div>

              <div className="relative">
                <MessageIcon className="absolute left-3.5 top-3 w-4 h-4 text-neutral-500" />
                <textarea
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleInputChange}
                  placeholder="Describe your primary AI generation use cases..."
                  rows={3}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-850 bg-neutral-900/60 text-xs text-white placeholder-neutral-505 focus:outline-hidden focus:border-rose-500/50 transition-colors resize-none"
                />
              </div>
            </div>

            <DialogFooter className="pt-2">
              <Button
                type="submit"
                className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-semibold py-2.5 transition-colors cursor-pointer"
              >
                Continue to Scheduler
              </Button>
            </DialogFooter>
          </form>
        )}

        {/* STEP 2: Scheduler */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-rose-500" />
                Select Date
              </label>
              <div className="grid grid-cols-5 gap-1.5">
                {nextDays.map((day) => (
                  <button
                    key={day.value}
                    onClick={() => setSelectedDate(day.value)}
                    className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all ${
                      selectedDate === day.value
                        ? 'border-rose-500 bg-rose-500/10 text-white'
                        : 'border-neutral-850 bg-neutral-900/30 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900/70'
                    }`}
                  >
                    <span className="text-[9px] font-medium opacity-60">
                      {day.formatted.split(',')[0]}
                    </span>
                    <span className="text-xs font-bold mt-0.5">
                      {day.formatted.split(',')[1]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div className="space-y-2 animate-in fade-in duration-200">
                <label className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ClockIcon className="w-3.5 h-3.5 text-rose-500" />
                  Select Time (EST)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-1 rounded-xl border text-[11px] font-semibold transition-all ${
                        selectedTime === time
                          ? 'border-rose-500 bg-rose-500/10 text-white'
                          : 'border-neutral-850 bg-neutral-900/30 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900/70'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="w-1/3 border-neutral-800 text-neutral-400 hover:bg-neutral-900 rounded-xl text-xs py-2.5 transition-colors cursor-pointer"
              >
                Back
              </Button>
              <Button
                onClick={handleScheduleSubmit}
                disabled={!selectedDate || !selectedTime}
                className="w-2/3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-semibold py-2.5 transition-colors disabled:opacity-50 cursor-pointer"
              >
                Confirm Booking
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: Success Confirmation */}
        {step === 3 && (
          <div className="flex flex-col items-center text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckIcon className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-semibold text-white">
                Interactive Session Scheduled!
              </h3>
              <p className="text-xs text-neutral-400 max-w-sm">
                We have registered a demo for <span className="text-neutral-200 font-semibold">{formData.name}</span> ({formData.email}) on{' '}
                <span className="text-rose-400 font-semibold">
                  {nextDays.find((d) => d.value === selectedDate)?.formatted}
                </span>{' '}
                at <span className="text-rose-400 font-semibold">{selectedTime}</span>.
              </p>
            </div>

            <div className="w-full bg-neutral-900/50 rounded-xl border border-neutral-850 p-3 text-left text-[11px] text-neutral-400 space-y-1">
              <div className="flex justify-between">
                <span>Presenter:</span>
                <span className="text-neutral-200 font-medium">VortexLogic Core Team</span>
              </div>
              <div className="flex justify-between">
                <span>Format:</span>
                <span className="text-neutral-200 font-medium">Google Meet / Interactive Sandbox</span>
              </div>
            </div>

            <Button
              onClick={resetModal}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-semibold py-2.5 transition-colors cursor-pointer"
            >
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
