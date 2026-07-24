import Image from 'next/image';

/**
 * Media-Castle-Signatur „visualized by media castle" — horizontal gestapelte
 * Variante: Wappen links, darüber/darunter das Label und die Wortmarke.
 * Für dunkle Hintergründe (weißes Wappen). Verlinkt auf media-castle.de.
 */
export default function MediaCastleSignature() {
  return (
    <a
      href="https://media-castle.de"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="visualized by media castle"
      className="inline-flex items-center gap-3 text-white no-underline transition-opacity hover:opacity-85"
      style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
    >
      <Image
        src="/logos/mediacastle-crest-white.png"
        alt="Media Castle"
        width={46}
        height={46}
        className="h-[46px] w-[46px]"
      />
      <span className="flex flex-col" style={{ lineHeight: 1.02 }}>
        <span
          className="uppercase"
          style={{
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '2.8px',
            color: 'rgba(255,255,255,.6)',
          }}
        >
          visualized by
        </span>
        <span style={{ fontSize: '22px', fontWeight: 600 }}>media castle</span>
      </span>
    </a>
  );
}
