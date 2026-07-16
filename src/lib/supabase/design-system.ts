export const designSystem = {
  radius: {
    card: "rounded-3xl",
    button: "rounded-2xl",
    input: "rounded-2xl",
  },

  spacing: {
    grid: 8,
  },

  animation: {
    fast: 0.2,
    normal: 0.35,
    slow: 0.5,
  },

  sidebar: {
    width: 280,
  },

  navbar: {
    height: 64,
  },

  glass: {
    card: `
      border border-white/10
      bg-white/5
      backdrop-blur-2xl
      shadow-2xl
    `,
  },
} as const;