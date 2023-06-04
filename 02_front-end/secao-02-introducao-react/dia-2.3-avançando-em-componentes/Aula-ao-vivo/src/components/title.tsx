import hello from '../utils/hello';

type TitleProps = {
  name: string
};

function Title({ name }: TitleProps) {
  return (
    <h1>{hello(name)}</h1>

  );
}

export default Title;
