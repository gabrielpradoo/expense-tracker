import styled from "styled-components";
import tw from "tailwind-styled-components";

export const TemplateContainer = tw.div`
  flex flex-col items-center w-screen h-screen bg-gray-100 relative
`;

export const TemplateContent = tw.section`
  grid w-full h-full max-w-screen-xl grid-cols-2 gap-x-9
`;

export const TemplateMainHeroSection = tw.main`
  flex flex-col items-center justify-center h-full gap-16
`;

export const TemplateExpenseMain = styled.main`
  display: grid;
  align-content: flex-start;
  width: 100%;
  max-width: 1280px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  padding: 1rem;
  overflow-y: auto;
  --tw-bg-opacity: 1;
  background-color: rgba(236, 253, 245, var(--tw-bg-opacity));
  height: 83.333333%;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: rgba(16, 185, 129);
    border-radius: 10px;
  }
`;
