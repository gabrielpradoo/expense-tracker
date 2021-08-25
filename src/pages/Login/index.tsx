import { Button } from "../../components/atoms/Button";
import { InputText } from "../../components/molecules/InputText";
import { Link } from "../../components/molecules/Link";
import { SidebarHero } from "../../components/organism/SidebarHero";
import {
  TemplateContainer,
  TemplateContent,
  TemplateMainHeroSection,
} from "../../components/templates";

export const Login = () => {
  return (
    <TemplateContainer>
      <TemplateContent>
        <SidebarHero />
        <TemplateMainHeroSection>
          <h1 className="text-3xl font-bold">Controle seus gastos</h1>
          <form className="flex flex-col w-full max-w-sm gap-8">
            <InputText label="Email" type="email" />
            <InputText label="Senha" type="password" />

            <Button>Log In</Button>
          </form>
          <Link className="text-blue-500 hover:text-blue-400" href="/register">
            Criar Conta
          </Link>
        </TemplateMainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  );
};
