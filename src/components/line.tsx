import { component$ } from "@builder.io/qwik";

interface LineProps {
  styles?: string;
}
export default component$<LineProps>(({ styles = "" }) => (
  <div class={`h-px ${styles} bg-gray`}></div>
));
