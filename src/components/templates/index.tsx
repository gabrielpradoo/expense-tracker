import tw from "tailwind-styled-components";

export const TemplateContainer = tw.div`
  flex justify-center w-screen h-screen bg-gray-100
`;

export const TemplateContent = tw.section`
  grid w-full h-full max-w-screen-xl grid-cols-2 gap-x-9
`;

export const TemplateMainHeroSection = tw.main`
  flex flex-col items-center justify-center h-full gap-16
`;
