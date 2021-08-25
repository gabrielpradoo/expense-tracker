import { Button } from "../../atoms/Button";
import { InputText } from "../../molecules/InputText";
import { Link } from "../../molecules/Link";
import {
  TemplateContainer,
  TemplateContent,
  TemplateMainHeroSection,
} from "../../templates";
import { SidebarHero } from "../SidebarHero";

export const DashboardAdd = () => {
  return (
    <TemplateContainer>
      <TemplateContent>
        <SidebarHero />
        <TemplateMainHeroSection>
          <h1 className="text-3xl font-bold">Adicionar nova despesa</h1>
          <form className="flex flex-col w-full max-w-sm gap-8">
            <InputText label="Despesa" type="text" />
            <InputText label="Categoria" type="text" />
            <InputText label="Valor" type="number" />
            <Button>Adicionar</Button>
          </form>
          <Link className="text-blue-500 hover:text-blue-400" href="/dashboard">
            Voltar
          </Link>
        </TemplateMainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  );
};
