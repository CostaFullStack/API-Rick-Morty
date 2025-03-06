import { DivCard, SubtitleCard, TextCard, TitleCard } from "./style";

export const Card = ({ title, subtitle, text }) => {
  return (
    <DivCard>
      <TitleCard>{title}</TitleCard>
      <SubtitleCard>{subtitle}</SubtitleCard>
      <TextCard>{text}</TextCard>
    </DivCard>
  );
};
