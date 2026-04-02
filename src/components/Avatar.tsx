interface AvatarProps {
  image: string;
}

export function Avatar({ image }: AvatarProps) {
  return <img src={image} className="h-6 w-6 rounded-full object-cover" />;
}
