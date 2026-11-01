"use client";
import Image, { type ImageProps } from "next/image";
import { useMessages } from "@/components/site/useMessages";

export default function LocalizedImage({ alt, title, ...props }: ImageProps) {
  const translateCopy = useMessages();
  return <Image {...props} alt={translateCopy(alt)} title={title ? translateCopy(title) : undefined} />;
}
