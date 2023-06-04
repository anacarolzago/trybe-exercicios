// Como está sendo utilizado TypeScript, é preciso definir o que a prop children receberá. Para isso, tem-se um tipo disponibilizado pela própria biblioteca do React, chamado ReactNode. Esse tipo permitirá valores como string, number, boolean e até mesmo outros elementos React como filho do componente criado

type TitleProps = {
  // text: string;
  children: React.ReactNode
};

function Title({ children }: TitleProps) {
  return <h2>{children}</h2>;
}

export default Title;
