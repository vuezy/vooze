<template>
  <PageWrapper background="#f7f7f7">
    <ErrorText
      errorTitle="500"
      errorSubtitle="Oops, something broke, we're working on it!"
    />
    <StyledTextbox
      icon="search"
      iconPosition="left"
      fixedWidth="324px"
      placeholder="Search for something..."
    />
    <CoolButton isGradient lg>Go Back Home</CoolButton>
  </PageWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { CoolButton } from "../../../shared/buttons";
import { Textbox } from "../../../shared/forms";
import { PageWrapper, ErrorText } from "../shared";

const StyledTextbox = styled(Textbox)`
  margin-bottom: 1.5rem;
`;

export default {
  components: {
    PageWrapper,
    CoolButton,
    ErrorText,
    StyledTextbox
  }
};
</script>
