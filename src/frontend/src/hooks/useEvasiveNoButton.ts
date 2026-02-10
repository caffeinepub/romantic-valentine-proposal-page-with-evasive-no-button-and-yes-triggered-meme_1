import { useState, useCallback, RefObject } from 'react';

interface Position {
  x: number;
  y: number;
}

interface UseEvasiveNoButtonProps {
  containerRef: RefObject<HTMLDivElement | null>;
  yesButtonRef: RefObject<HTMLButtonElement | null>;
  noButtonSize: { width: number; height: number };
}

export default function useEvasiveNoButton({
  containerRef,
  yesButtonRef,
  noButtonSize,
}: UseEvasiveNoButtonProps) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const calculateSafePosition = useCallback((): Position => {
    if (!containerRef.current || !yesButtonRef.current) {
      return { x: 0, y: 0 };
    }

    const container = containerRef.current.getBoundingClientRect();
    const yesButton = yesButtonRef.current.getBoundingClientRect();

    // Calculate container dimensions relative to its position
    const containerWidth = container.width;
    const containerHeight = container.height;

    // Button dimensions with padding
    const buttonWidth = noButtonSize.width || 120;
    const buttonHeight = noButtonSize.height || 50;
    const padding = 20;

    // Calculate Yes button center relative to container
    const yesButtonCenterX = yesButton.left - container.left + yesButton.width / 2;
    const yesButtonCenterY = yesButton.top - container.top + yesButton.height / 2;
    const yesButtonRadius = Math.max(yesButton.width, yesButton.height) / 2 + 60; // Extra space

    let newX: number;
    let newY: number;
    let attempts = 0;
    const maxAttempts = 20;

    do {
      // Generate random position within container bounds
      newX = Math.random() * (containerWidth - buttonWidth - 2 * padding) + padding;
      newY = Math.random() * (containerHeight - buttonHeight - 2 * padding) + padding;

      // Calculate distance from Yes button
      const noButtonCenterX = newX + buttonWidth / 2;
      const noButtonCenterY = newY + buttonHeight / 2;
      const distance = Math.sqrt(
        Math.pow(noButtonCenterX - yesButtonCenterX, 2) +
        Math.pow(noButtonCenterY - yesButtonCenterY, 2)
      );

      // If far enough from Yes button, use this position
      if (distance > yesButtonRadius) {
        break;
      }

      attempts++;
    } while (attempts < maxAttempts);

    // If we couldn't find a good position, place it far from Yes button
    if (attempts >= maxAttempts) {
      // Place in opposite quadrant from Yes button
      if (yesButtonCenterX < containerWidth / 2) {
        newX = containerWidth - buttonWidth - padding;
      } else {
        newX = padding;
      }

      if (yesButtonCenterY < containerHeight / 2) {
        newY = containerHeight - buttonHeight - padding;
      } else {
        newY = padding;
      }
    }

    return { x: newX, y: newY };
  }, [containerRef, yesButtonRef, noButtonSize]);

  const handleNoHover = useCallback(() => {
    const newPosition = calculateSafePosition();
    setPosition(newPosition);
  }, [calculateSafePosition]);

  const handleNoPointerDown = useCallback(
    (e: React.PointerEvent | React.TouchEvent) => {
      e.preventDefault();
      const newPosition = calculateSafePosition();
      setPosition(newPosition);
    },
    [calculateSafePosition]
  );

  return {
    position,
    handleNoHover,
    handleNoPointerDown,
  };
}
