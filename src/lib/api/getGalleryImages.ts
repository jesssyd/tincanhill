import client from "../contentful";

export interface GalleryImage {
    imageURL: string;
    altText: string;
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
    const response = await client.getEntries({ content_type: "galleryImage",
        include: 1,
     });
     return response.items.map((item: any) => {
        const imageFile = item.fields.galleryImage?.fields?.file?.url;
        const altText = item.fields.galleryImageAltText ?? "";
    
        return {
          imageURL: imageFile ? `https:${imageFile}` : "",
          altText,
        };
      }).filter(image => image.imageURL);  
    }
    