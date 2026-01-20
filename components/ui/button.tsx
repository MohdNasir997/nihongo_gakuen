import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-primary text-white hover:bg-primary/90 shadow-soft",
      secondary: "bg-[#eeeae0] dark:bg-slate-800 text-[#2d333a] dark:text-white hover:bg-[#e4e0d4] dark:hover:bg-slate-700",
      outline: "border border-[#e8e4db] dark:border-slate-700 bg-transparent hover:bg-[#f5f2eb] dark:hover:bg-slate-800",
      ghost: "hover:bg-[#f5f2eb] dark:hover:bg-slate-800"
    }
    
    const sizes = {
      default: "h-10 px-5 text-sm",
      sm: "h-9 px-3 text-xs",
      lg: "h-14 px-8 text-lg"
    }
    
    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
