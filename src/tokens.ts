export const colors = {
  surface: {
    background: '#fefef9',
    base: '#f8f5ee',
    base3: '#e8dccb',
    border: '#d6c8b4',
    borderSubtle: 'rgba(214,200,180,0.45)',
  },
  text: {
    primary: '#2b2b2b',
    secondary: '#6b6257',
  },
  accent: {
    default: '#3a4a6a',
    secondary: '#383d43',
    neutral: '#4a2c24',
  },
  ai: { default: '#88adbb' },
  severity: {
    negative: '#dc0032',
    negativeHover: '#892c1b',
    warning: '#c1a063',
    warningHover: '#c36a4a',
    positive: '#afc3a2',
    positiveHover: '#524b31',
  },
} as const

export const spacing = {
  xxxsmall: '4px',
  xxsmall: '8px',
  xsmall: '12px',
  small: '16px',
  medium: '24px',
  large: '32px',
  xlarge: '40px',
  xxlarge: '64px',
  xxxlarge: '128px',
} as const

export const borderRadius = {
  box: '16px',
  card: '24px',
  page: '32px',
} as const
