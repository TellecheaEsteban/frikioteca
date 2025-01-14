import { Game, GameInfo, GlobalInfo } from "@/types/types";
import { query } from "./strapi";

export function getGlobalInfo() {
  return query("/global").then((res: GlobalInfo) => {
    return res.data;
  });
}

export function getGamesInfo({ page }: { page: number }) {
  const pageSize = 8;
  const pagetest = page;
  return query(
    `/game-categories?populate[image][fields]=url&pagination[page]=${pagetest}&pagination[pageSize]=${pageSize}`
  ).then((res: any) => {
    console.log("res2", res);
    return res.data.map((category: Game) => {
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
      return { id, name, documentId, description, image, people, alt };
    });
  });
}

export async function getGameInfo(id: string): Promise<GameInfo> {
  try {
    const res = await query(
      `/game-categories/${id}?populate[image][fields]=url`
    );

    if (!res?.data) {
      throw new Error("No data found in the response.");
    }

    const category = res.data;

    const {
      id: categoryId,
      documentId,
      name,
      description,
      people,
      alt,
      image: rawImage,
    } = category;

    const image = rawImage ? `http://localhost:1337${rawImage.url}` : null;

    return {
      id: parseInt(categoryId, 10),
      name,
      documentId,
      description,
      image: image ?? "",
      people,
      alt,
    };
  } catch (error) {
    console.error("Error fetching game info:", error);
    throw error;
  }
}
