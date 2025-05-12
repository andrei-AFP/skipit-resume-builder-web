'use client';

import React, { useRef, useEffect, PropsWithChildren, useCallback } from 'react';

export default function DraggableScroll({ children }: PropsWithChildren) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;

    isDragging.current = true;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
    container.classList.add('cursor-grabbing');
  }, []);

  const stopDragging = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    isDragging.current = false;
    container.classList.remove('cursor-grabbing');
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = scrollRef.current;
    if (!isDragging.current || !container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 2; // Adjust scroll sensitivity here
    container.scrollLeft = scrollLeft.current - walk;
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', stopDragging);
    container.addEventListener('mouseup', stopDragging);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', stopDragging);
      container.removeEventListener('mouseup', stopDragging);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseDown, stopDragging, handleMouseMove]);

  return (
    <div ref={scrollRef} className="overflow-x-auto no-scrollbar cursor-grab select-none">
      <div className="flex min-w-max">{children}</div>
    </div>
  );
}
