import { query } from "./strapi";
const STRAPI_LOCAL_HOST = process.env.STRAPI_LOCAL_HOST;
export function getGlobalInfo() {
  return query("/global").then((res: any) => {
    return res.data;
  });
}

export function getGamesInfo({ page }: any) {
  const pageSize = 8;
  const pagetest = page;
  return query(
    `/game-categories?populate[image][fields]=url&pagination[page]=${pagetest}&pagination[pageSize]=${pageSize}`
  ).then((res: any) => {
    return res.data.map((category: any) => {
      const {
        id,
        name,
        documentId,
        description,
        people,
        alt,
        image: rawimage,
      } = category;
      const image = `http://localhost:1337${rawimage.url}`;
      //TO-DO:
      return { id, name, documentId, description, image, people, alt };
    });
  });
}

export function getGameInfo(id: string) {
  return query(`/game-categories/${id}?populate[image][fields]=url`).then(
    (res: any) => {
      const category = res.data;

      const {
        id,
        documentId,
        name,
        description,
        people,
        alt,
        image: rawimage,
      } = category;

      const image = rawimage ? `http://localhost:1337${rawimage.url}` : null;

      return { id, name, documentId, description, image, people, alt };
    }
  );
}
