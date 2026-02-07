
export interface SpotifyTrack {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

export const getNowPlaying = async (): Promise<SpotifyTrack> => {
  // Simulating an API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return mock data
  return {
    isPlaying: true,
    title: "Starboy",
    artist: "The Weeknd, Daft Punk",
    album: "Starboy",
    albumImageUrl: "https://i.scdn.co/image/ab67616d0000b2734718e2d7e4ba25d642b93f11",
    songUrl: "https://open.spotify.com/track/7MXVkk9YMv3KSTEtccvCqs",
  };
};
