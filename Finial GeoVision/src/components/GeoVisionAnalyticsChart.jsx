import React from 'react';
import { TrendingUp, BarChart2, PieChart, GitCommit, Layers, Compass } from 'lucide-react';

/**
 * GeoVision AI Dynamic Analytics Chart Component
 * Renders query-driven chart archetypes:
 * - Line chart (trends / yearly data)
 * - Horizontal Bar chart (rankings / superlatives / top items)
 * - Grouped Bar chart (cross-area / cross-category comparisons)
 * - Donut / Pie chart (composition / percentage shares / land-use)
 * - Scatter chart (relationship between two numeric metrics)
 * - Spatial Histogram (spatial proximity / buffer catchment distribution)
 */
export default function GeoVisionAnalyticsChart({ analytics, lang = 'en', theme = 'light' }) {
  if (!analytics) return null;

  const isDark = theme === 'dark';
  const chartType = analytics.chartType || (analytics.type === 'cross_area_comparison' || analytics.type === 'dataset_comparison' ? 'grouped_bar' : 'horizontal_bar');
  const title = analytics.title || (lang === 'ar' ? 'التحليلات المكانية' : 'Spatial Analytics');
  const subtitle = analytics.subtitle;
  const totalCount = analytics.totalCount;

  return (
    <div className={`geovision-analytics-chart-container ${isDark ? 'chart-dark' : 'chart-light'}`} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Chart Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 75, 135, 0.08)',
        paddingBottom: '6px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {chartType === 'line' && <TrendingUp size={15} color={isDark ? '#38BDF8' : '#004B87'} />}
          {chartType === 'horizontal_bar' && <BarChart2 size={15} color={isDark ? '#38BDF8' : '#004B87'} />}
          {chartType === 'grouped_bar' && <BarChart2 size={15} color={isDark ? '#38BDF8' : '#004B87'} />}
          {chartType === 'donut' && <PieChart size={15} color={isDark ? '#38BDF8' : '#004B87'} />}
          {chartType === 'scatter' && <GitCommit size={15} color={isDark ? '#38BDF8' : '#004B87'} />}
          {chartType === 'spatial_histogram' && <Compass size={15} color={isDark ? '#38BDF8' : '#004B87'} />}
          <span style={{ fontSize: '12px', fontWeight: 700, color: isDark ? '#F8FAFC' : '#002B5B' }}>{title}</span>
        </div>
        {totalCount !== undefined && totalCount !== null && (
          <span style={{
            fontSize: '11px',
            fontWeight: 600,
            color: isDark ? '#38BDF8' : '#004B87',
            background: isDark ? 'rgba(30, 41, 59, 0.85)' : 'rgba(240, 247, 255, 0.95)',
            padding: '2px 7px',
            borderRadius: '6px',
            border: isDark ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(29, 104, 242, 0.15)'
          }}>
            {totalCount} {analytics.unit || (lang === 'ar' ? 'موقعاً' : 'total')}
          </span>
        )}
      </div>

      {subtitle && (
        <div style={{ fontSize: '11px', color: isDark ? '#94A3B8' : '#64748B', marginTop: '-4px' }}>
          {subtitle}
        </div>
      )}

      {/* 1. LINE CHART (Trend / Yearly Data) */}
      {chartType === 'line' && (
        <LineChartView data={analytics.data || []} xAxis={analytics.xAxis} yAxis={analytics.yAxis} unit={analytics.unit} lang={lang} isDark={isDark} />
      )}

      {/* 2. HORIZONTAL RANKING BAR CHART (Top / Most / Superlatives) */}
      {chartType === 'horizontal_bar' && (
        <HorizontalBarView data={analytics.data || []} lang={lang} isDark={isDark} />
      )}

      {/* 3. GROUPED BAR CHART (Multi-Area / Multi-Category Comparison) */}
      {chartType === 'grouped_bar' && (
        <GroupedBarView comparison={analytics.comparison} groups={analytics.groups} lang={lang} isDark={isDark} />
      )}

      {/* 4. DONUT / PIE CHART (Composition / Percentage / Land-Use) */}
      {chartType === 'donut' && (
        <DonutChartView data={analytics.data || []} totalCount={totalCount} lang={lang} isDark={isDark} />
      )}

      {/* 5. SCATTER CHART (Relationship Between 2 Numeric Values) */}
      {chartType === 'scatter' && (
        <ScatterChartView points={analytics.points || []} xLabel={analytics.xLabel} yLabel={analytics.yLabel} xUnit={analytics.xUnit} yUnit={analytics.yUnit} correlation={analytics.correlation} lang={lang} isDark={isDark} />
      )}

      {/* 6. SPATIAL HISTOGRAM (Proximity & Buffer Distribution) */}
      {chartType === 'spatial_histogram' && (
        <SpatialHistogramView data={analytics.data || []} lang={lang} isDark={isDark} />
      )}
    </div>
  );
}

/**
 * 1. Line Chart View (SVG Smooth Polyline + Gradient Fill)
 */
function LineChartView({ data = [], xAxis = 'Year', yAxis = 'Value', unit = '', lang = 'en', isDark = false }) {
  if (!data || data.length === 0) return null;

  const width = 280;
  const height = 130;
  const padding = { top: 15, right: 15, bottom: 25, left: 35 };

  const values = data.map(d => d.value !== undefined ? d.value : d.count);
  const minVal = Math.min(...values) * 0.95;
  const maxVal = Math.max(...values) * 1.05;
  const valRange = maxVal - minVal || 1;

  const points = data.map((d, i) => {
    const x = padding.left + (i / (data.length - 1 || 1)) * (width - padding.left - padding.right);
    const val = d.value !== undefined ? d.value : d.count;
    const y = height - padding.bottom - ((val - minVal) / valRange) * (height - padding.top - padding.bottom);
    return { x, y, label: d.label || d.year, value: val };
  });

  const pathD = points.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`, '');
  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padding.bottom} L ${points[0].x} ${height - padding.bottom} Z`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
        <defs>
          <linearGradient id="geoLineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1D68F2" stopOpacity={isDark ? "0.45" : "0.28"} />
            <stop offset="100%" stopColor="#1D68F2" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Grid Lines */}
        {[0, 0.5, 1].map((ratio, idx) => {
          const y = padding.top + ratio * (height - padding.top - padding.bottom);
          const val = Math.round(maxVal - ratio * valRange);
          return (
            <g key={idx}>
              <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke={isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 75, 135, 0.08)"} strokeDasharray="3 3" />
              <text x={padding.left - 4} y={y + 3} textAnchor="end" fontSize="8" fill={isDark ? "#94A3B8" : "#64748B"} fontWeight="500">
                {val >= 1000000 ? `${(val / 1000000).toFixed(1)}M` : val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val}
              </text>
            </g>
          );
        })}

        {/* Area Fill */}
        <path d={areaD} fill="url(#geoLineGrad)" />

        {/* Line Stroke */}
        <path d={pathD} fill="none" stroke={isDark ? "#38BDF8" : "#1D68F2"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Data Points */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4" fill={isDark ? "#0F172A" : "#FFFFFF"} stroke={isDark ? "#38BDF8" : "#004B87"} strokeWidth="2" />
            <circle cx={p.x} cy={p.y} r="2" fill={isDark ? "#38BDF8" : "#1D68F2"} />
            {/* Value Tag on top */}
            <text x={p.x} y={p.y - 7} textAnchor="middle" fontSize="8" fontWeight="700" fill={isDark ? "#F8FAFC" : "#002B5B"}>
              {p.value >= 1000000 ? `${(p.value / 1000000).toFixed(2)}M` : p.value >= 1000 ? `${(p.value / 1000).toFixed(1)}k` : p.value}
            </text>
            {/* X-axis Label */}
            <text x={p.x} y={height - 8} textAnchor="middle" fontSize="8.5" fill={isDark ? "#CBD5E1" : "#475569"} fontWeight="600">
              {p.label}
            </text>
          </g>
        ))}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: isDark ? '#94A3B8' : '#64748B', padding: '0 4px' }}>
        <span>{xAxis ? `${lang === 'ar' ? 'المحور الأفقي' : 'Timeline'}: ${xAxis}` : ''}</span>
        <span>{unit ? `${unit}` : ''}</span>
      </div>
    </div>
  );
}

/**
 * 2. Horizontal Bar Chart View (Rankings / Top N / Superlatives)
 */
function HorizontalBarView({ data = [], lang = 'en', isDark = false }) {
  if (!data || data.length === 0) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', maxHeight: '170px', overflowY: 'auto', paddingRight: '2px' }}>
      {data.map((d, idx) => {
        const defaultColor = idx === 0 ? (isDark ? '#38BDF8' : '#004B87') : idx === 1 ? '#1D68F2' : (isDark ? '#60A5FA' : '#3B82F6');
        const color = d.color || defaultColor;
        const percentage = d.percentage !== undefined ? d.percentage : Math.round((d.count / (data[0].count || 1)) * 100);

        return (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 500, color: isDark ? '#F1F5F9' : '#002B5B' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{
                  fontSize: '9px',
                  fontWeight: 700,
                  color: idx === 0 ? '#FFFFFF' : (isDark ? '#38BDF8' : '#004B87'),
                  background: idx === 0 ? (isDark ? '#1D68F2' : '#004B87') : (isDark ? 'rgba(56, 189, 248, 0.15)' : 'rgba(0, 75, 135, 0.1)'),
                  borderRadius: '4px',
                  padding: '1px 4px',
                  minWidth: '16px',
                  textAlign: 'center'
                }}>
                  #{idx + 1}
                </span>
                <span>{d.label}</span>
              </div>
              <span style={{ fontWeight: 600, color: isDark ? '#E2E8F0' : 'inherit' }}>{d.count} {d.unit ? d.unit : d.percentage ? `(${d.percentage}%)` : ''}</span>
            </div>
            <div style={{ height: '5px', borderRadius: '3px', background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 75, 135, 0.08)', overflow: 'hidden' }}>
              <div style={{ width: `${Math.max(percentage, 4)}%`, height: '100%', background: color, borderRadius: '3px', transition: 'width 0.3s ease' }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * 3. Grouped Bar Chart View (Comparisons)
 */
function GroupedBarView({ comparison = null, groups = null, lang = 'en', isDark = false }) {
  if (groups && groups.length > 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {groups.map((g, gIdx) => (
          <div key={gIdx} style={{ display: 'flex', flexDirection: 'column', gap: '3px', padding: '4px 0', borderBottom: gIdx < groups.length - 1 ? (isDark ? '1px dashed rgba(255, 255, 255, 0.12)' : '1px dashed rgba(0, 75, 135, 0.08)') : 'none' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: isDark ? '#F8FAFC' : '#002B5B' }}>{g.name}</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              {g.series.map((s, sIdx) => (
                <div key={sIdx} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: isDark ? '#94A3B8' : '#475569' }}>
                    <span>{s.label}</span>
                    <span style={{ fontWeight: 600, color: isDark ? '#F1F5F9' : '#002B5B' }}>{s.value}</span>
                  </div>
                  <div style={{ height: '5px', borderRadius: '3px', background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 75, 135, 0.08)', overflow: 'hidden' }}>
                    <div style={{ width: `${Math.max(s.percentage || 10, 4)}%`, height: '100%', background: s.color || (sIdx === 0 ? (isDark ? '#38BDF8' : '#004B87') : '#10B981'), borderRadius: '3px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (comparison && comparison.length > 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {comparison.map((c, cIdx) => (
          <div key={cIdx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 600, color: isDark ? '#F8FAFC' : '#002B5B' }}>
              <span>{c.label}</span>
              <span style={{ color: isDark ? '#E2E8F0' : 'inherit' }}>{c.count} ({c.percentage}%)</span>
            </div>
            <div style={{ height: '6px', borderRadius: '3px', background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 75, 135, 0.08)', overflow: 'hidden' }}>
              <div style={{ width: `${Math.max(c.percentage, 4)}%`, height: '100%', background: c.color, borderRadius: '3px', transition: 'width 0.4s ease' }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

/**
 * 4. Donut Chart View (Composition / Percentages / Land-Use)
 */
function DonutChartView({ data = [], totalCount = 0, lang = 'en', isDark = false }) {
  if (!data || data.length === 0) return null;

  const total = totalCount || data.reduce((acc, d) => acc + (d.count || 0), 0);
  const size = 110;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulativeOffset = 0;
  const defaultColors = isDark
    ? ['#38BDF8', '#1D68F2', '#34D399', '#FBBF24', '#A78BFA', '#F472B6', '#22D3EE']
    : ['#004B87', '#1D68F2', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#06B6D4'];

  const segments = data.map((d, i) => {
    const pct = d.percentage !== undefined ? d.percentage : (total > 0 ? (d.count / total) * 100 : 0);
    const strokeDasharray = `${(pct / 100) * circumference} ${circumference}`;
    const strokeDashoffset = -cumulativeOffset;
    cumulativeOffset += (pct / 100) * circumference;
    const color = d.color || defaultColors[i % defaultColors.length];
    return { ...d, pct: Math.round(pct), strokeDasharray, strokeDashoffset, color };
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      {/* SVG Donut */}
      <div style={{ position: 'relative', width: `${size}px`, height: `${size}px`, flexShrink: 0 }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 75, 135, 0.08)"} strokeWidth={strokeWidth} />
          {segments.map((s, idx) => (
            <circle
              key={idx}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={s.color}
              strokeWidth={strokeWidth}
              strokeDasharray={s.strokeDasharray}
              strokeDashoffset={s.strokeDashoffset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dasharray 0.4s ease' }}
            />
          ))}
        </svg>
        {/* Center Total Count */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none'
        }}>
          <span style={{ fontSize: '13px', fontWeight: 800, color: isDark ? '#F8FAFC' : '#002B5B' }}>{total}</span>
          <span style={{ fontSize: '8.5px', color: isDark ? '#94A3B8' : '#64748B', fontWeight: 600 }}>{lang === 'ar' ? 'إجمالي' : 'Total'}</span>
        </div>
      </div>

      {/* Legend & Percentages */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, maxHeight: '110px', overflowY: 'auto' }}>
        {segments.map((s, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '10.5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.color, flexShrink: 0 }} />
              <span style={{ color: isDark ? '#F1F5F9' : '#002B5B', fontWeight: 500 }}>{s.label}</span>
            </div>
            <span style={{ fontWeight: 700, color: s.color }}>{s.count} ({s.pct}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 5. Scatter Chart View (Relationship Between 2 Numeric Fields)
 */
function ScatterChartView({ points = [], xLabel = 'X Axis', yLabel = 'Y Axis', xUnit = '', yUnit = '', correlation = '', lang = 'en', isDark = false }) {
  if (!points || points.length === 0) return null;

  const width = 280;
  const height = 130;
  const padding = { top: 15, right: 15, bottom: 25, left: 35 };

  const xVals = points.map(p => p.x);
  const yVals = points.map(p => p.y);
  const minX = Math.min(...xVals);
  const maxX = Math.max(...xVals) || 1;
  const minY = Math.min(...yVals);
  const maxY = Math.max(...yVals) || 1;

  const xRange = maxX - minX || 1;
  const yRange = maxY - minY || 1;

  const scaledPoints = points.map(p => {
    const cx = padding.left + ((p.x - minX) / xRange) * (width - padding.left - padding.right);
    const cy = height - padding.bottom - ((p.y - minY) / yRange) * (height - padding.top - padding.bottom);
    return { ...p, cx, cy };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
        {/* Axes */}
        <line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} stroke={isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 75, 135, 0.2)"} strokeWidth="1" />
        <line x1={padding.left} y1={padding.top} x2={padding.left} y2={height - padding.bottom} stroke={isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 75, 135, 0.2)"} strokeWidth="1" />

        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map((r, idx) => {
          const y = padding.top + r * (height - padding.top - padding.bottom);
          return <line key={idx} x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke={isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 75, 135, 0.05)"} strokeDasharray="2 2" />;
        })}

        {/* Points */}
        {scaledPoints.map((p, i) => (
          <g key={i}>
            <circle cx={p.cx} cy={p.cy} r="4" fill={isDark ? "#38BDF8" : "#1D68F2"} stroke={isDark ? "#0F172A" : "#FFFFFF"} strokeWidth="1.5" opacity="0.9" />
            <text x={p.cx} y={p.cy - 5} textAnchor="middle" fontSize="7" fontWeight="600" fill={isDark ? "#F8FAFC" : "#002B5B"}>
              {p.label ? p.label.slice(0, 10) : ''}
            </text>
          </g>
        ))}

        {/* Axis Labels */}
        <text x={width / 2} y={height - 6} textAnchor="middle" fontSize="8" fill={isDark ? "#94A3B8" : "#64748B"} fontWeight="600">
          {xLabel} {xUnit ? `(${xUnit})` : ''}
        </text>
        <text x={padding.left + 5} y={padding.top - 4} textAnchor="start" fontSize="8" fill={isDark ? "#94A3B8" : "#64748B"} fontWeight="600">
          {yLabel} {yUnit ? `(${yUnit})` : ''}
        </text>
      </svg>

      {correlation && (
        <div style={{
          fontSize: '10px',
          color: isDark ? '#38BDF8' : '#004B87',
          background: isDark ? 'rgba(30, 41, 59, 0.85)' : 'rgba(240, 247, 255, 0.9)',
          padding: '3px 8px',
          borderRadius: '5px',
          border: isDark ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(29, 104, 242, 0.15)'
        }}>
          <strong>{lang === 'ar' ? 'الارتباط الإحصائي' : 'Pattern / Correlation'}:</strong> {correlation}
        </div>
      )}
    </div>
  );
}

/**
 * 6. Spatial Histogram View (Proximity & Buffer Distance Distribution)
 */
function SpatialHistogramView({ data = [], lang = 'en', isDark = false }) {
  if (!data || data.length === 0) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <div style={{ fontSize: '10.5px', color: isDark ? '#94A3B8' : '#64748B', fontWeight: 600 }}>
        {lang === 'ar' ? 'التوزيع المكاني حسب مسافة النطاق العازل' : 'Spatial Catchment Buffer Distribution'}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '65px', padding: '6px 0', borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 75, 135, 0.1)' }}>
        {data.map((b, idx) => {
          const max = Math.max(...data.map(d => d.count), 1);
          const heightPct = Math.max((b.count / max) * 100, 10);
          return (
            <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', height: '100%', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, color: isDark ? '#38BDF8' : '#004B87' }}>{b.count}</span>
              <div style={{ width: '100%', height: `${heightPct}%`, background: isDark ? '#38BDF8' : '#1D68F2', borderRadius: '3px 3px 0 0', opacity: 0.85 }} />
              <span style={{ fontSize: '8px', color: isDark ? '#94A3B8' : '#64748B', fontWeight: 500, whiteSpace: 'nowrap' }}>{b.range || b.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
