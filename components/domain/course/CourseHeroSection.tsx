import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { School, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function CourseHeroSection() {
  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden border border-border/50 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-10 items-center">
            {/* Hero Visual */}
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 aspect-video flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <School className="text-6xl text-primary/40" size={96} />
                <div className="bg-background/80 dark:bg-background/80 backdrop-blur px-4 py-2 rounded-lg text-sm font-semibold shadow-xl border border-border/20">
                  <span className="mr-2">🇯🇵</span>
                  Learn Anytime, Anywhere
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
                  Our Comprehensive Japanese Courses
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                  From beginner basics to advanced mastery. Explore our structured curriculum designed by expert linguists and native speakers.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="font-bold shadow-lg shadow-primary/20 flex items-center gap-2"
                >
                  Start Learning
                  <ArrowRight size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-bold border-border bg-background hover:bg-muted"
                >
                  View Roadmap
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
