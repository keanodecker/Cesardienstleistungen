/**
 * Media-Castle-Signatur „visualized by media castle" — gestapelte Variante:
 * Wappen links, Label über Wortmarke. Navy-Version (dunkler Text, transparentes
 * Wappen) für hellen/weißen Hintergrund. Verlinkt auf media-castle.com.
 */
export default function MediaCastleSignature() {
  return (
    // visualized by media castle — gestapelte Signatur
    <a
      href="https://www.media-castle.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="visualized by media castle – zur Media Castle Webseite"
      className="inline-flex items-center gap-3 no-underline transition-opacity duration-300 hover:opacity-85"
      style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
    >
      <img
        src="/media-castle-logo.png"
        alt="Media Castle"
        width={34}
        height={34}
        className="flex-shrink-0"
      />
      <span className="flex flex-col" style={{ lineHeight: 1.02 }}>
        <span
          className="font-medium uppercase"
          style={{ fontSize: '9px', letterSpacing: '2.5px', color: 'rgba(4,24,51,.55)' }}
        >
          visualized by
        </span>
        <span
          className="font-semibold"
          style={{ fontSize: '22px', letterSpacing: '-0.3px', color: '#041833' }}
        >
          media castle
        </span>
      </span>
    </a>
  );
}
