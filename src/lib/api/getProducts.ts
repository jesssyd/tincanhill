import client from "../contentful";

export interface Product {
  imageURL: string;
  price: number;
  description: string;
  title: string;
}

export async function getProducts(): Promise<Product[]> {
  const response = await client.getEntries({
    content_type: "product",
    order: "fields.sortOrder" as any,
    include: 1,
  });

  return response.items
    .map((item: any) => {
      const imageFile = item.fields.productImage?.fields?.file?.url;
      const price = item.fields.productPrice ?? "";
      const description = item.fields.productDescription ?? "";
      const title = item.fields.productTitle ?? "";

      return {
        imageURL: imageFile ? `https:${imageFile}` : "",
        price,
        description,
        title,
      };
    })
    .filter((image) => image.imageURL); 
}
