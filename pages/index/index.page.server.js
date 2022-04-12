import getClientData from "../../helpers/getWebsiteData";
import { fridayPayloadFormat } from "../../payloadData";

export async function onBeforeRender(pageContext) {
  const websiteId = import.meta.env.VITE_WEBSITE_ID;
  const userId = import.meta.env.VITE_USER_ID;
  const viteDomain = import.meta.env.VITE_DOMAIN;

  let res = await getClientData({ websiteId });

  return {
    pageContext: {
      pageProps: {
        data: res.data.data,
      },
    },
  };
}

export const passToClient = ["pageProps"];

// Uncomment in development

// export async function onBeforeRender(pageContext) {
//   const websiteId = import.meta.env.VITE_WEBSITE_ID;
//   const userId = import.meta.env.VITE_USER_ID;
//   const viteDomain = import.meta.env.VITE_DOMAIN;

//   let res = fridayPayloadFormat;

//   return {
//     pageContext: {
//       pageProps: {
//         data: res,
//       },
//     },
//   };
// }

// export const passToClient = ["pageProps"];
