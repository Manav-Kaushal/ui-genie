import { Spinner } from "@/components/ui/spinner";
import { MoodBoardImage } from "@/hooks/use-styles";
import { AlertCircleIcon, CheckCircleIcon, XIcon } from "lucide-react";
import Image from "next/image";

type ImagesBoardProps = {
  image: MoodBoardImage;
  removeImage: (imageId: string) => void;
  rotation: number;
  xOffset: number;
  yOffset: number;
  zIndex: number;
  marginLeft: string;
  marginTop: string;
};

const UploadStatus = (image: {
  uploading: boolean;
  uploaded: boolean;
  error?: string;
}) => {
  if (image.uploading) {
    return (
      <div className="absolute inset-9 bg-foreground/50 flex items-center justify-center rounded-2xl">
        <Spinner className="size-6 text-background" />
      </div>
    );
  }

  if (image.uploaded) {
    return (
      <div className="absolute top-2 right-2">
        <CheckCircleIcon className="size-5 text-emerald-400" />
      </div>
    );
  }

  if (image.error) {
    return (
      <div className="absolute top-2 right-2">
        <AlertCircleIcon className="size-5 text-rose-400" />
      </div>
    );
  }

  return null;
};

const ImagesBoard = ({
  image,
  removeImage,
  rotation,
  xOffset,
  yOffset,
  zIndex,
  marginLeft,
  marginTop,
}: ImagesBoardProps) => {
  return (
    <div
      key={`board-${image.id}`}
      className="absolute group"
      style={{
        transform: `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg)`,
        zIndex,
        left: "50%",
        top: "50%",
        marginLeft,
        marginTop,
      }}
    >
      <div className="relative w-40 h-48 rounded-2xl overflow-hidden bg-background shadow-xl border border-border/20 hover:scale-105 transition-all duration-200">
        <Image
          src={image.preview}
          alt="Mood board image"
          className="objec  t-cover"
          fill
        />

        <UploadStatus
          uploading={image.uploading}
          uploaded={image.uploaded}
          error={image.error}
        />

        <button
          onClick={() => removeImage(image.id)}
          className="absolute top-2 right-2 size-6 bg-foreground/50 hover:bg-background/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <XIcon className="size-4 text-background" />
        </button>
      </div>
    </div>
  );
};

export default ImagesBoard;
