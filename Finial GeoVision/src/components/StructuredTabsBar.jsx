import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function StructuredTabsBar({
  tabs,
  activeTabId,
  onTabSelect,
  lang = 'en',
  t = {}
}) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    const overflow = maxScroll > 3;
    setHasOverflow(overflow);

    if (!overflow) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    if (lang === 'ar') {
      const absScroll = Math.abs(scrollLeft);
      setCanScrollRight(absScroll > 3);
      setCanScrollLeft(absScroll < maxScroll - 3);
    } else {
      setCanScrollLeft(scrollLeft > 3);
      setCanScrollRight(scrollLeft < maxScroll - 3);
    }
  }, [lang]);

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleResize = () => checkScroll();
    const observer = new ResizeObserver(() => checkScroll());
    observer.observe(el);

    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [checkScroll, tabs]);

  const handleScroll = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = 140;
    const delta = direction === 'left' ? -scrollAmount : scrollAmount;
    el.scrollBy({ left: lang === 'ar' ? -delta : delta, behavior: 'smooth' });
  };

  if (!tabs || tabs.length <= 1) return null;

  return (
    <div className="structured-tabs-nav-wrapper" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Left Arrow Button */}
      <button
        type="button"
        className="structured-tabs-nav-btn structured-tabs-prev-btn"
        onClick={() => handleScroll('left')}
        disabled={!canScrollLeft}
        aria-label={lang === 'ar' ? 'السابق' : 'Previous categories'}
        title={lang === 'ar' ? 'السابق' : 'Previous categories'}
      >
        {lang === 'ar' ? <ChevronRight size={14} strokeWidth={2.4} /> : <ChevronLeft size={14} strokeWidth={2.4} />}
      </button>

      {/* Scrollable Tabs Bar */}
      <div className="structured-tabs-bar" ref={scrollContainerRef}>
        {tabs.map((tab) => {
          const isActive = (!activeTabId && tab.id === 'all') || activeTabId === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              className={`structured-tab-btn ${isActive ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onTabSelect(tab.id === 'all' ? '' : tab.id);
                e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
              }}
            >
              {lang === 'ar' ? (t.getSubcatName ? t.getSubcatName(tab.name) : tab.name) : tab.name}
            </button>
          );
        })}
      </div>

      {/* Right Arrow Button */}
      <button
        type="button"
        className="structured-tabs-nav-btn structured-tabs-next-btn"
        onClick={() => handleScroll('right')}
        disabled={!canScrollRight}
        aria-label={lang === 'ar' ? 'التالي' : 'Next categories'}
        title={lang === 'ar' ? 'التالي' : 'Next categories'}
      >
        {lang === 'ar' ? <ChevronLeft size={14} strokeWidth={2.4} /> : <ChevronRight size={14} strokeWidth={2.4} />}
      </button>
    </div>
  );
}
