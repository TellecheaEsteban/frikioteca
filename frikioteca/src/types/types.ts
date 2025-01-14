export type Game = {
  id?: string;
  name: string;
  description: string;
  people: string;
  image: {
    url: string;
  };
  alt: string;
  documentId?: string;
};

export type GameInfo = {
  id: number;
  name: string;
  documentId: number;
  description: string;
  image: string;
  people: string;
  alt: string;
};

export type GlobalInfo = {
  data: {
    id: number;
    documentId: string;
    siteName: string;
    siteDescription: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  meta: Record<string, unknown>;
};
