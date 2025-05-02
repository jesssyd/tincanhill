import client from "../contentful";

export interface TimelineContent {
  title: string;
  year: string;
  description: string;
}

export async function getTimeline(): Promise<TimelineContent[]> {
  const response = await client.getEntries({
    content_type: "timeline",
    order: "fields.sortOrder" as any,
    include: 1,
  });

  return response.items.map((item: any) => ({
    title: item.fields.timelineTitle ?? "",
    year: item.fields.timelineYear ?? "",
    description: item.fields.timelineDescription ?? "",
  }));
}
