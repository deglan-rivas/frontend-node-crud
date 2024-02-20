# necessary stage for install devDependencies like vite for vite build
# folder dist with minified code
FROM node:18-alpine as DEV_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build 

# folder node_modules with production dependencies
# in this case, this step is unnecesary, because we dont need node_modules thank by nginx which serves html and vite which bundle html, css and js -> but it's still a good idea for backend if there's webpack or vite-node
# FROM node:18-alpine as BUILD_IMAGE
# ENV NODE_ENV=production
# WORKDIR /app
# # COPY package*.json ./
# COPY package.json .
# COPY package-lock.json .
# RUN npm ci --production
# COPY . .
# RUN npm run build 

FROM nginx:alpine as PRODUCTION_STAGE
COPY --from=DEV_IMAGE /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]