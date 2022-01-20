export interface IYouTubeResultItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  }
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
        width: number;
        height: number;
      }
    }
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  }
}

export interface IYouTubeResults {
  data: {
    items: IYouTubeResultItem[];
  }
}
