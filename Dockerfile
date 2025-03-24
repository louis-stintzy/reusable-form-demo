FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine AS production
LABEL app="Reusable Form Demo Frontend"
RUN npm install -g serve
RUN addgroup -g 1598 rfdgroup && adduser -D -u 1599 -G rfdgroup rfduser
USER rfduser
WORKDIR /app
COPY --from=build /app/dist ./dist
EXPOSE 3301
CMD ["serve", "-s", "dist", "-l", "3301"]