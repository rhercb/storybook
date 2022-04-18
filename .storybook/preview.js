import '../design/main.scss';
import previewScreenSizes from "./custom/previewScreenSizes";
import previevBackgrounds from './custom/previewBackground';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...previewScreenSizes,
    },
  },
  backgrounds: previevBackgrounds
}