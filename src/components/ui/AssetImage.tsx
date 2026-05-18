import Image, { type ImageProps } from "next/image";
import { withBasePath } from "@/lib/basePath";

type AssetImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

/** next/image with GitHub Pages basePath prefix for /assets and other local paths */
export function AssetImage({ src, ...props }: AssetImageProps) {
  return <Image src={withBasePath(src)} {...props} />;
}
