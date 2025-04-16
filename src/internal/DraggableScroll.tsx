'use client';

import React, { useRef, useEffect, PropsWithChildren } from 'react';

export default function DraggableScroll({ children }: PropsWithChildren) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.classList.add('cursor-grabbing');
    };

    const onMouseLeave = () => {
      isDown = false;
      container.classList.remove('cursor-grabbing');
    };

    const onMouseUp = () => {
      isDown = false;
      container.classList.remove('cursor-grabbing');
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mouseleave', onMouseLeave);
    container.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      container.removeEventListener('mouseleave', onMouseLeave);
      container.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div ref={scrollRef} className="overflow-x-auto no-scrollbar cursor-grab select-none">
      <div className="flex min-w-max">{children}</div>
    </div>
  );
}
