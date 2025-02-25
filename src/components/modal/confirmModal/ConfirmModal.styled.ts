import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 20px;
  min-height: 92px;
  height: auto;
  gap: 10px;
  justify-content: center;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.headline_semibold_18};
    margin-bottom: 8px;
    color: ${theme.colors.black};
  `}
`;

export const Content = styled.div<{ isTitle?: boolean }>`
  ${({ theme, isTitle }) => css`
    ${theme.fonts.subTitle_regular_16};
    color: ${isTitle ? theme.colors.gray900 : theme.colors.black};
    height: auto;
    min-height: 20px;
    align-content: center;
  `}
`;

export const ModalFooter = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_regular_16};
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    border-top: 1px solid ${theme.colors.gray600};
    height: 56px;

    & > button {
      flex: 1;
      border-right: 1px solid ${theme.colors.gray600};
      text-align: center;
    }

    & > button:last-of-type {
      border-right: none;
    }
  `}
`;

export const confirmButton = (theme: Theme) => css`
  color: ${theme.colors.pink900};
  border-radius: 0px;
  border-bottom-right-radius: 16px;
  height: 55px;
`;

export const cancelButton = (theme: Theme) => css`
  color: ${theme.colors.black};
  border-radius: 0px;
  border-bottom-left-radius: 16px;
  height: 55px;
`;
