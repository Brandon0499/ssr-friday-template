import getClientData from "../../helpers/getWebsiteData";

export async function onBeforeRender(pageContext) {
  const websiteId = import.meta.env.VITE_WEBSITE_ID;
  const userId = import.meta.env.VITE_USER_ID;
  const viteDomain = import.meta.env.VITE_DOMAIN;
  let res;
  if (import.meta.env.PROD) res = await getClientData({ websiteId });
  else res = { data: { data: undefined } };

  return {
    pageContext: {
      pageProps: {
        data: res.data.data,
      },
    },
  };
}

export const passToClient = ["pageProps"];
