

interface VideoBackgroundProps {
  src: string;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src, className = "" }) => {
  return (
    <video
      className={`absolute inset-0 w-full h-full object-cover object-center z-0 ${className}`}
      src={src}
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

export default VideoBackground;