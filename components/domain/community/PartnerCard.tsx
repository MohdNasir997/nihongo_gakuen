/**
 * PartnerCard Component
 * Display language exchange partner
 */

'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin,  User } from 'lucide-react'
import { Partner } from '@/lib/types/community'

interface PartnerCardProps {
  partner: Partner
  variant?: 'dark' | 'light'
}

export function PartnerCard({ partner, variant = 'dark' }: PartnerCardProps) {
  const isDark = variant === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col overflow-hidden rounded-xl border hover:shadow-md transition-shadow group ${
        isDark
          ? 'bg-muted border-border'
          : 'bg-card border-border'
      }`}
    >
      {isDark ? (
        <div className="relative h-32 bg-gradient-to-r from-blue-400 to-indigo-500">
          <div className="absolute -bottom-10 left-6 ring-4 ring-background dark:ring-muted rounded-full size-20 overflow-hidden">
            <Image
             priority
              src={partner.avatar}
              alt={partner.name}
              width={80}
              height={80}
              onError={(e) => {
                e.currentTarget.src = '/assets/student_1.png'
              }}
              className="rounded-full object-cover"
            />
          </div>
          <div className="absolute bottom-1 right-1 size-4 bg-green-500 rounded-full border-2 border-background dark:border-muted"></div>
        </div>
      ) : (
        <div className="relative h-32 bg-gradient-to-r from-orange-400 to-red-500">
          <div className="absolute -bottom-10 left-6 ring-4 ring-background dark:ring-muted rounded-full size-20 overflow-hidden">
            <Image
              priority
              src={partner.avatar}
              alt={partner.name}
              width={80}
              height={80}
               onError={(e) => {
                e.currentTarget.src = '/assets/student_1.png'
              }}
              className="rounded-full object-cover"
            />
          </div>
          <div className="absolute bottom-1 right-1 size-4 bg-slate-400 rounded-full border-2 border-background dark:border-muted"></div>
        </div>
      )}

      <div className="pt-12 pb-6 px-6 flex flex-col gap-4">
        <div>
          <h3 className="text-foreground text-xl font-bold">{partner.name}</h3>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {partner.location}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="px-2 py-1 text-xs font-bold">
            Native: {partner.nativeLanguage}
          </Badge>
          {partner.learningLanguages.map((lang) => (
            <Badge
              key={lang}
              variant="outline"
              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold"
            >
              Learn: {lang}
            </Badge>
          ))}
          {partner.jlptLevel && (
            <Badge
              variant="outline"
              className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold"
            >
              {partner.jlptLevel}
            </Badge>
          )}
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2">{partner.bio}</p>

        <div className="flex gap-2 pt-2">
          <Button className="flex-1 h-10 bg-primary dark:bg-blue-400 text-white font-bold rounded-lg text-sm">
            Message 
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10  border-border rounded-lg text-foreground"
          >
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

