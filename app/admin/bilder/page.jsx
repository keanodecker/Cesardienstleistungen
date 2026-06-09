'use client';

import { useState } from 'react';
import { leistungenData } from '@/data/leistungenData';

function shortId(url) {
  if (!url) return '(kein Bild)';
  if (url.startsWith('/')) return 'LOKAL: ' + url;
  return url.replace('https://images.unsplash.com/photo-', '').split('?')[0];
}

export default function BilderPreview() {
  const [failed, setFailed] = useState({});

  const markFailed = (key, label) => {
    setFailed((prev) => (prev[key] ? prev : { ...prev, [key]: label }));
  };

  const items = [];
  for (const cat of leistungenData) {
    for (const sub of cat.subcategories) {
      items.push({
        slug: sub.slug,
        name: sub.name,
        hero: sub.image,
        extras: sub.extraImages || [],
      });
    }
  }

  const failedList = Object.values(failed);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Bilder-Übersicht & Lade-Test</h1>
      <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
        Diese Seite lädt jedes Bild im Browser. Bilder mit <strong style={{ color: 'red' }}>rotem Rahmen</strong> laden
        nicht. Die Liste unten kannst du kopieren und mir schicken.
      </p>

      {/* Summary of failures */}
      <div
        style={{
          background: failedList.length ? '#fee2e2' : '#dcfce7',
          border: `1px solid ${failedList.length ? '#ef4444' : '#22c55e'}`,
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '2rem',
        }}
      >
        <strong style={{ color: failedList.length ? '#b91c1c' : '#15803d' }}>
          {failedList.length
            ? `❌ ${failedList.length} Bild(er) laden nicht:`
            : '✅ Alle Bilder geladen (oder Test läuft noch – kurz warten/scrollen).'}
        </strong>
        {failedList.length > 0 && (
          <ul style={{ margin: '0.75rem 0 0', paddingLeft: '1.25rem', fontSize: '0.85rem', color: '#7f1d1d' }}>
            {failedList.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        )}
      </div>

      {items.map((item) => (
        <div
          key={item.slug}
          style={{
            marginBottom: '2.5rem',
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
          }}
        >
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#1e3a5f' }}>
            {item.name}
            <span style={{ fontWeight: 400, color: '#888', marginLeft: '0.5rem', fontSize: '0.8rem' }}>/{item.slug}</span>
          </h2>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {[{ url: item.hero, tag: 'HERO' }, ...item.extras.map((u, i) => ({ url: u, tag: `GALERIE ${i + 1}` }))].map(
              (img, idx) => {
                const key = `${item.slug}-${idx}`;
                const label = `${item.slug} – ${img.tag} (${shortId(img.url)})`;
                const isFailed = !!failed[key];
                return (
                  <div key={key} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: '#666', marginBottom: '4px' }}>{img.tag}</div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.url}
                      alt={img.tag}
                      onError={() => markFailed(key, label)}
                      style={{
                        width: 170,
                        height: 110,
                        objectFit: 'cover',
                        borderRadius: '4px',
                        border: isFailed ? '3px solid red' : '2px solid #e5e7eb',
                        display: 'block',
                        background: '#f1f5f9',
                      }}
                    />
                    <div
                      style={{
                        fontSize: '0.6rem',
                        color: isFailed ? '#dc2626' : '#999',
                        marginTop: '2px',
                        maxWidth: 170,
                        wordBreak: 'break-all',
                        fontWeight: isFailed ? 700 : 400,
                      }}
                    >
                      {isFailed ? '❌ LÄDT NICHT' : shortId(img.url)}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
