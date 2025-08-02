import { useEffect, useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

interface FullScreenCarouselModalProps {
  images: string[];
  onClose: () => void;
}

export default function FullScreenCarouselModal({
  images,
  onClose,
}: FullScreenCarouselModalProps) {
  // page = current slide index, direction = 1 (next) or -1 (prev)
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  // Wrap index so it loops over images
  const imageIndex = ((page % images.length) + images.length) % images.length;

  // Variants for horizontal sliding animation
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      y: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: easeInOut },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      y: 0,
      transition: { duration: 0.1, ease: easeInOut },
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-4xl max-h-full w-full mx-4 overflow-hidden rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            dragMomentum={false}
            onDragEnd={(_event, info) => {
              const swipe = swipePower(info.offset.x, info.velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1); // swipe left → next
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1); // swipe right → prev
              }
            }}
            className="w-full max-h-[80vh] object-contain select-none"
            alt={`Slide ${imageIndex + 1}`}
          />
        </AnimatePresence>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 text-3xl font-bold hover:text-red-400"
          aria-label="Close Modal"
        >
          ×
        </button>
      </div>
    </div>
  );
}
