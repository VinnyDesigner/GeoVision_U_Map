import React, { useState } from 'react';

export default function FloatingFeedbackButton({
  onClick,
  lang = 'en',
  theme = 'light',
  isFeedbackOpen = false
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isRtl = lang === 'ar';
  const isDark = theme === 'dark';

  if (isFeedbackOpen) return null;

  const sidePos = isRtl ? { right: 0, left: 'auto' } : { left: 0, right: 'auto' };

  return (
    <>
      <style>{`
        @keyframes feedbackFloatGentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes kaomojiCuteBlink {
          0%, 88%, 94%, 100% {
            transform: scaleY(1);
          }
          91% {
            transform: scaleY(0.12) scaleX(1.1);
          }
        }

        @keyframes feedbackPulseBlueLight {
          0%, 100% {
            box-shadow: 0 4px 12px rgba(2, 132, 199, 0.18), 0 0 0 0 rgba(56, 189, 248, 0);
          }
          50% {
            box-shadow: 0 6px 18px rgba(2, 132, 199, 0.26), 0 0 10px 2px rgba(56, 189, 248, 0.35);
          }
        }

        @keyframes feedbackPulseDark {
          0%, 100% {
            box-shadow: 0 8px 24px rgba(0, 8, 24, 0.55), 0 0 16px rgba(56, 189, 248, 0.20), inset 0 1px 1px rgba(255, 255, 255, 0.30);
          }
          50% {
            box-shadow: 0 10px 28px rgba(0, 8, 24, 0.65), 0 0 24px 3px rgba(56, 189, 248, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.40);
          }
        }

        .floating-feedback-btn-tab {
          animation: feedbackFloatGentle 3.6s ease-in-out infinite, ${isDark ? 'feedbackPulseDark' : 'feedbackPulseBlueLight'} 3.6s ease-in-out infinite;
        }

        .floating-feedback-btn-tab:hover {
          animation-play-state: paused;
        }

        .kaomoji-eyes-anim {
          display: inline-block;
          transform-origin: center;
          animation: kaomojiCuteBlink 4.2s ease-in-out infinite;
        }
      `}</style>

      <div
        className="floating-feedback-tab-container"
        style={{
          position: 'fixed',
          top: '112px',
          ...sidePos,
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          pointerEvents: 'auto'
        }}
      >
        <button
          type="button"
          className="floating-feedback-btn-tab"
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          title={lang === 'ar' ? 'شاركنا ملاحظاتك' : 'Share Feedback'}
          aria-label={lang === 'ar' ? 'شاركنا ملاحظاتك' : 'Share Feedback'}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isDark
              ? 'linear-gradient(180deg, rgba(14, 38, 77, 0.65) 0%, rgba(6, 20, 48, 0.75) 100%), linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(56, 189, 248, 0.10) 30%, rgba(15, 35, 70, 0.45) 100%)'
              : 'linear-gradient(135deg, rgba(224, 242, 254, 0.88) 0%, rgba(186, 230, 253, 0.72) 100%)',
            backgroundColor: isDark ? 'rgba(8, 25, 55, 0.60)' : 'transparent',
            backdropFilter: isDark ? 'blur(28px) saturate(190%)' : 'blur(16px)',
            WebkitBackdropFilter: isDark ? 'blur(28px) saturate(190%)' : 'blur(16px)',
            border: isDark
              ? '1px solid rgba(255, 255, 255, 0.25)'
              : '1px solid rgba(147, 197, 253, 0.85)',
            [isRtl ? 'borderRight' : 'borderLeft']: 'none',
            borderRadius: isRtl ? '20px 0 0 20px' : '0 20px 20px 0',
            padding: isRtl ? '7px 7px 7px 12px' : '7px 12px 7px 7px',
            cursor: 'pointer',
            outline: 'none',
            boxShadow: isDark
              ? '0 10px 28px rgba(0, 8, 24, 0.55), 0 0 20px rgba(56, 189, 248, 0.20), inset 0 1px 1px rgba(255, 255, 255, 0.30)'
              : '0 4px 12px rgba(2, 132, 199, 0.18), 0 0 10px rgba(56, 189, 248, 0.25)',
            transform: isHovered
              ? (isRtl ? 'translateX(-3px) scale(1.05)' : 'translateX(3px) scale(1.05)')
              : 'translateX(0px)',
            transition: 'transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s ease'
          }}
        >
          <div
            className="floating-feedback-icon-box"
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '6px',
              background: isDark
                ? 'linear-gradient(135deg, #1D68F2 0%, #1D68F2 100%)'
                : 'linear-gradient(180deg, #004B87 0%, #002B5B 100%)',
              border: isDark
                ? '1px solid rgba(255, 255, 255, 0.30)'
                : '1px solid rgba(0, 75, 135, 0.35)',
              boxShadow: isDark
                ? '0 2px 10px rgba(29, 104, 242, 0.50)'
                : '0 1.5px 5px rgba(0, 43, 91, 0.20)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              userSelect: 'none',
              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <span
              className="kaomoji-eyes-anim"
              style={{
                fontSize: '7.5px',
                fontWeight: 850,
                letterSpacing: '1.2px',
                lineHeight: '1',
                color: '#FFFFFF',
                WebkitTextFillColor: '#FFFFFF',
                marginLeft: '1.2px',
                fontFamily: "'Segoe UI', Roboto, 'Inter', -apple-system, sans-serif"
              }}
            >
              ^ ^
            </span>
            <span
              style={{
                fontSize: '7.5px',
                fontWeight: 850,
                lineHeight: '0.6',
                marginTop: '-1px',
                color: '#FFFFFF',
                WebkitTextFillColor: '#FFFFFF',
                fontFamily: "'Segoe UI', Roboto, 'Inter', -apple-system, sans-serif"
              }}
            >
              _
            </span>
          </div>
        </button>
      </div>
    </>
  );
}
