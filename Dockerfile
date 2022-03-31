# build stage
FROM node:alpine as build-stage
ENV HOST 0.0.0.0
ENV PORT 80 3000
# ARG USER_ID DOMAIN WEBSITE_ID
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# ENV WEBSITE_ID=secretanimals031
# ENV MODE=production
# RUN VITE_USER_ID=$USER_ID VITE_DOMAIN=$DOMAIN VITE_WEBSITE_ID=$WEBSITE_ID npm run build
# RUN WEBSITE_ID=$WEBSITE_ID MODE=$MODE npm run build
ARG VITE_WEBSITE_ID
ENV VITE_WEBSITE_ID $VITE_WEBSITE_ID
RUN npm run build

# production stage
FROM caddy:alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist .
EXPOSE 80 3000
CMD ["caddy", "file-server", "--listen", "0.0.0.0:3000", "--root", "."]
