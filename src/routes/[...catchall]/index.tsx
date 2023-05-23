import { Slot, component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async (requestEvent) => {
  throw requestEvent.redirect(302, "/planet/jupiter");
};

export default component$(() => {
  return <Slot />;
});
