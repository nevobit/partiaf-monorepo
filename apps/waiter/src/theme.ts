import {colors} from './layout/theme/colors';

export const theme = {
  roundButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.dark.primary,
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
    borderRadius: 50,
    marginHorizontal: 10,
  },
  screenPrimary: {
    paddingHorizontal: 25,
    backgroundColor: colors.dark.background,
    height: '100%',
  },
  title: {
    fontSize: 25,
    color: colors.dark.primary,
  },
  subtitle: {
    fontSize: 20,
    color: colors.dark.primary,
  },
  gradientPrimary: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
  },
};
