// export async function onBeforeRender(pageContext) {
//   const movie = "This is the movie";

//   return {
//     pageContext: {
//       pageProps: {
//         movie,
//       },
//     },
//   };
// }

// export const passToClient = ["pageProps"];

import fetch from "node-fetch";
import { fridayPayloadFormat } from "../../payloadData";

async function onBeforeRender(pageContext) {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let fridayPayload = await response.json();

  const pageProps = { fridayPayload };
  return {
    pageContext: {
      pageProps,
    },
  };
}

// const passToClient = ["fridayPayload"];

export { onBeforeRender };

// Call payload here,
// need maper function
// need to create a function in between and transform
