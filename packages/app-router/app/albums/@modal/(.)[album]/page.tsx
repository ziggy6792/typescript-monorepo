
type Props = {
  params: {
    artist: string;
  };
};
export default function ArtistPage({ params }: Props) {
  return <div>Artists {params.artist}</div>;
}
