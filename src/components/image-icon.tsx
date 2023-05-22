import type { PropFunction } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

interface ImageIconProps {
  src: string;
  styles: string;
  altImage: string;
  eventClick?: PropFunction;
}

export default component$(
  ({ src, styles = "", altImage = "", eventClick }: ImageIconProps) => (
    <img src={src} class={styles} alt={altImage} onClick$={eventClick} />
  )
);
