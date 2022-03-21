import getClientData from "../../helpers/getWebsiteData";

export async function onBeforeRender(pageContext) {
  const res = await getClientData({
    websiteId: "secretanimals003",
  });

  return {
    pageContext: {
      pageProps: {
        data: res.data.data,
      },
    },
  };
}

export const passToClient = ["pageProps"];
