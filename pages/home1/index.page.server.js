export async function onBeforeRender(pageContext) {
  const movie = "This is the movie";

  return {
    pageContext: {
      pageProps: {
        movie,
      },
    },
  };
}

export const passToClient = ["pageProps"];
