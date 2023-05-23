import type { PropFunction } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

interface ImageIconProps {
  src: string;
  styles: string;
  altImage: string;
  toggleMenu?: PropFunction;
}

export default component$(
  ({ src, styles = "", altImage = "", toggleMenu }: ImageIconProps) => (
    <img src={src} class={styles} alt={altImage} onClick$={toggleMenu} />
  )
);
