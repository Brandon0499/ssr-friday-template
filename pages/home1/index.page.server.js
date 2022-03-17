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

// Call payload here,
// need maper function
// need to create a function in between and transform
