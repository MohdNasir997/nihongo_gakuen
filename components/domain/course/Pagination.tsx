import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1);

  return (
    <div className="mt-16 flex justify-center">
      <nav className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="w-10 h-10 border-border bg-background text-muted-foreground hover:text-primary hover:border-primary transition-all"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={20} />
        </Button>

        {pages.map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? 'default' : 'outline'}
            size="icon"
            className={`w-10 h-10 font-bold transition-all ${
              currentPage === page
                ? 'shadow-lg shadow-primary/20'
                : 'border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground'
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ))}

        {totalPages > 3 && (
          <span className="px-2 text-muted-foreground">...</span>
        )}

        <Button
          variant="outline"
          size="icon"
          className="w-10 h-10 border-border bg-background text-muted-foreground hover:text-primary hover:border-primary transition-all"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight size={20} />
        </Button>
      </nav>
    </div>
  );
}
