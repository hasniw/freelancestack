import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'FreelanceStack - Les meilleurs outils pour freelances';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', background: 'linear-gradient(135deg, #0a0a0a 0%, #0d1117 50%, #064e3b 100%)', fontFamily: 'sans-serif' }}>
        <div style={{ fontSize: '72px', fontWeight: 800, color: '#10b981', marginBottom: '24px' }}>FreelanceStack</div>
        <div style={{ fontSize: '32px', color: '#9ca3af', textAlign: 'center', maxWidth: '800px', lineHeight: 1.4 }}>
          Les meilleurs outils pour freelances français
        </div>
        <div style={{ display: 'flex', gap: '24px', marginTop: '40px', fontSize: '20px', color: '#6b7280' }}>
          <span>💼 Comptabilité</span>
          <span>🏦 Banque pro</span>
          <span>📄 Facturation</span>
          <span>🛡️ Assurance</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
