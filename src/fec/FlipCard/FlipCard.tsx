import { useState } from 'react'

import {
  StyledCard,
  StyledFlipCardBack,
  StyledFlipCardContainer,
  StyledFlipCardFront,
  StyledHeading,
  StyledP,
} from './FlipCard.styled'

const showBcakAnimate = {
  rotateY: 180,
}

const showFrontAnimate = {
  rotateY: 0,
}

const variants = {
  showBack: showBcakAnimate,
  showFront: showFrontAnimate,
}
const flipTransition = {
  x: { type: 'spring', stiffness: 100 },
  default: { duration: 0.5 },
}

export interface FlipCardProps {
  word: string
  definition: string
  usage?: string
}

export const FlipCard: React.VFC<FlipCardProps> = ({
  word,
  definition,
  usage,
}) => {
  const [showBack, setShowBack] = useState(false)

  const onClickHandler = () => {
    setShowBack(!showBack)
  }

  return (
    <StyledCard onClick={onClickHandler}>
      <StyledFlipCardContainer
        animate={showBack ? 'showBack' : 'showFront'}
        variants={variants}
        transition={flipTransition}
      >
        <StyledFlipCardFront>
          <StyledP>{word}</StyledP>
        </StyledFlipCardFront>
        <StyledFlipCardBack>
          <StyledHeading>Definition:</StyledHeading>
          <StyledP>{definition}</StyledP>
          <StyledHeading>Usage:</StyledHeading>
          <StyledP>{usage}</StyledP>
        </StyledFlipCardBack>
      </StyledFlipCardContainer>
    </StyledCard>
  )
}
