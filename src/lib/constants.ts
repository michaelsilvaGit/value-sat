// Design system constants with new tech theme

export const COLORS = {
  primary: '#00DCFF',
  secondary: '#3D0099',
  accent: '#FF3366',
  background: '#121212',
  backgroundSecondary: '#1E1E2F',
  white: '#FFFFFF',
  lightGray: '#CCCCCC',
  black: '#121212',
  border: 'rgba(0, 255, 204, 0.3)',
};

export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #00DCFF 0%, #3D0099 100%)',
  secondary: 'linear-gradient(135deg, #3D0099 0%, #FF3366 100%)',
  background: 'linear-gradient(180deg, #121212 0%, #1E1E2F 100%)',
};

export const EFFECTS = {
  neonGlow: '0 0 15px rgba(0, 255, 204, 0.7)',
  hoverTransform: 'translateY(-2px)',
  transitionSpeed: '0.3s',
};

export const TYPOGRAPHY = {
  fontFamily: {
    heading: 'Montserrat, sans-serif',
    body: 'Roboto, sans-serif',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
};

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Produtos', path: '#/produtos' },
  { name: 'Sobre', path: '#/sobre' },
  { name: 'Contato', path: '#/contato' },
];

export const COMPANY_INFO = {
  name: 'RastreAuto',
  slogan: 'Rastreamento veicular moderno e eficiente',
  description: 'Soluções inteligentes em rastreamento com tecnologia de ponta, segurança e total confiabilidade.',
  phone: '(62) 9 9110-9602',
  email: 'contato@rastreauto.com.br',
  address: 'Av. Ipanema, nº 1855 - Quadra 92 Lote 12',
  socialMedia: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    twitter: 'https://twitter.com/',
  },
  copyright: `© ${new Date().getFullYear()} Value Sat. Todos os direitos reservados.`,
  whatsapp: {
    fone: '5562991109602',
    message: 'Olá! Gostaria de mais informações sobre o ratreador.'
  }
};

export const DEVELOPED = {
  developed: 'Michael Silva'
}
