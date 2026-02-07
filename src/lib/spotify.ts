export interface SpotifyTrack {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

export const getNowPlaying = async (): Promise<SpotifyTrack> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    isPlaying: true,
    title: "Slayr",
    artist: "Slayr, Holding",
    album: "Half Blood",
    albumImageUrl: "https://i.scdn.co/image/ab67616d00001e0255a9a5494579add8dd303e2e",
    songUrl: "https://open.spotify.com/album/4M1Gzy271EuRkCAcW5HAFa",
  };
};
