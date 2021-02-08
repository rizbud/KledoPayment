import { scaleWidth, scaleHeight } from 'osmicsx';

export default {
  // width & height
  "hw-13": { height: scaleWidth(13) },

  // padding
  "px-2": { paddingHorizontal: scaleWidth(2) },
  "px-5": { paddingHorizontal: scaleWidth(5) },
  "py-1.2": { paddingVertical: scaleHeight(1.2) },
  "py-1.5": { paddingVertical: scaleHeight(1.5) },
  "py-2": { paddingVertical: scaleHeight(2) },

  // margin
  "mx-5": { marginHorizontal: scaleWidth(5) },
  "ml-5": { marginLeft: scaleWidth(5) },
  "mt-1": { marginTop: scaleHeight(1) },
  "mt-2": { marginTop: scaleHeight(2) },
  "mb-2": { marginBottom: scaleHeight(2) },

  // font size
  "text-title": { fontSize: scaleWidth(5.3) },
  "text-normal": { fontSize: scaleWidth(4) },

  // position
  "bottom-5": { bottom: scaleWidth(5) },
  "right-5": { right: scaleWidth(5) },
}