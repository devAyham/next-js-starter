const customTypographyColors = ["secondary", "primary"] as const;

export type customTypographyColorsType =
  (typeof customTypographyColors)[number];

export const isCustomTypoColor = (
  color: any
): color is customTypographyColorsType =>
  customTypographyColors.includes(color);
