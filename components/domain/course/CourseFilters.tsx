import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { JLPTLevel } from '@/lib/types/course';
import { ListFilter } from 'lucide-react';

interface CourseFiltersProps {
  selectedLevel: JLPTLevel | 'All Levels';
  onLevelChange: (level: JLPTLevel | 'All Levels') => void;
  selectedKanjiFocus: string;
  onKanjiFocusChange: (focus: string) => void;
}

const levels: (JLPTLevel | 'All Levels')[] = [
  'All Levels',
  'N5',
  'N4',
  'N3',
  'N2',
  'N1',
];

const kanjiFocusOptions = [
  'All Topics',
  'Radicals Only',
  'Common Use (Joyo)',
  'Business Kanji',
];

export function CourseFilters({
  selectedLevel,
  onLevelChange,
  selectedKanjiFocus,
  onKanjiFocusChange,
}: CourseFiltersProps) {
  return (
    <section className="mb-10 space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* JLPT Level Filters */}
        <div className="space-y-4">
          <Label className="text-foreground font-bold flex items-center gap-2">
            <ListFilter className="text-primary" size={20} />
            JLPT Proficiency Level
          </Label>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? 'default' : 'outline'}
                className={`px-5 h-10 text-sm font-semibold transition-all ${
                  selectedLevel === level
                    ? 'shadow-lg shadow-primary/20'
                    : 'bg-background border-border hover:border-primary hover:text-foreground'
                }`}
                onClick={() => onLevelChange(level)}
              >
                {level}
              </Button>
            ))}
          </div>
        </div>

        {/* Kanji Focus Dropdown */}
        <div className="flex flex-wrap items-end gap-4">
          <div className="space-y-2">
            <Label className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
              Kanji Focus
            </Label>
            <Select
              value={selectedKanjiFocus}
              onValueChange={onKanjiFocusChange}
            >
              <SelectTrigger className="w-[200px] h-10 bg-background border-border text-foreground">
                <SelectValue placeholder="All Topics" />
              </SelectTrigger>
              <SelectContent>
                {kanjiFocusOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}
