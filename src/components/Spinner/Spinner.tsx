import type { JSX } from "react";
import { SpinnerWrapper, SpinnerElement, ScreenReaderText } from "./styles";

function LoadingSpinner(): JSX.Element {
  return (
    <SpinnerWrapper
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <SpinnerElement aria-hidden="true" />
      <ScreenReaderText>Loading...</ScreenReaderText>
    </SpinnerWrapper>
  );
}

export default LoadingSpinner;
