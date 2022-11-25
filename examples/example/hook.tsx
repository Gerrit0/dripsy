import { useDripsyTheme } from 'dripsy'

const useItemStyle = () => {
  const { theme } = useDripsyTheme()

  return {
    // @ts-expect-error gives errors on unknown properties
    color: theme.colors.coolzie,
    shadow: theme.shadows.md,
  }
}
