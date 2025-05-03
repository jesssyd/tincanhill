import client from "../contentful";

export interface Banner {
  title: string;
  subheading: string;
  page: string;
}

export async function getBanner(): Promise<Banner[]> {
  const response = await client.getEntries({
    content_type: "banner",
    include: 1,
  });
  return response.items.map((item: any) => ({
    title: item.fields.title ?? "",
    subheading: item.fields.subheading ?? "",
    page: item.fields.page ?? "",
  }));
}
