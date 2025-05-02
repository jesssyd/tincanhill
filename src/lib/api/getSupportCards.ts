import client from "../contentful";

export interface SupportCard {
  heading: string;
  description: string;
  cta: string;
  buttonLink: string;
}

export async function getSupportCards(): Promise<SupportCard[]> {
  const response = await client.getEntries({
    content_type: "supportCard",
    include: 1,
  });

  return response.items.map((item: any) => ({
    heading: item.fields.heading ?? "",
    description: item.fields.description ?? "",
    cta: item.fields.cta ?? "",
    buttonLink: item.fields.buttonLink ?? "",
  }));
}
