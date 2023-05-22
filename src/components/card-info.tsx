import { component$ } from "@builder.io/qwik";

interface CardProps {
  title: string;
  value?: string;
}

export default component$(({ title, value }: CardProps) => {
  console.log("title", title);
  console.log("value", value);
  return (
    <div class="flex items-center justify-between px-6 py-[11px] w-3/4 text-left border-2 border-gray md:flex-col md:items-start md:px-4 md:py-[18px] lg:p-5">
      <p class="font-spartan font-bold text-8 text-gray-light tracking-0.73 leading-16 md:mb-[6px] lg:text-11 lg:leading-25 lg:tracking-1 lg:mb-1">
        {title}
      </p>
      <p class="font-antonio font-medium text-20 uppercase leading-normal tracking-0.75 md:text-24 md:tracking-0.9 lg:text-40 lg:tracking-1.5">
        {value}
      </p>
    </div>
  );
});
