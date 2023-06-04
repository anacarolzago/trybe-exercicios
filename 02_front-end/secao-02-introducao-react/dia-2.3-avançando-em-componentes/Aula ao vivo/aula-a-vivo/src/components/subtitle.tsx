type SubtitleProps = {
  subTitle: string
};

function Subtitle({ subTitle }: SubtitleProps) {
  return (
    <p>{subTitle}</p>
  );
}

export default Subtitle;
