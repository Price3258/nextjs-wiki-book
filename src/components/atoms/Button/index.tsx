/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Responsive } from '@/types';
import {
  toPropValue,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  Space,
} from '@/utils/styles';

// 버튼 변형
export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fontSize?: Responsive<FontSize>;
  fontWeight?: Responsive<string>;
  letterSpacing?: Responsive<LetterSpacing>;
  lineHeight?: Responsive<LineHeight>;
  textAlign?: Responsive<string>;
  color?: Responsive<Color>;
  backgroundColor?: Responsive<Color>;
  width?: Responsive<string>;
  height?: Responsive<string>;
  minWidth?: Responsive<string>;
  minHeight?: Responsive<string>;
  display?: Responsive<string>;
  border?: Responsive<string>;
  overflow?: Responsive<string>;
  margin?: Responsive<Space>;
  marginTop?: Responsive<Space>;
  marginRight?: Responsive<Space>;
  marginBottom?: Responsive<Space>;
  marginLeft?: Responsive<Space>;
  padding?: Responsive<Space>;
  paddingTop?: Responsive<Space>;
  paddingRight?: Responsive<Space>;
  paddingBottom?: Responsive<Space>;
  paddingLeft?: Responsive<Space>;
  pseudoClass?: {
    hover?: {
      backgroundColor?: Responsive<Color>;
    };
    disabled?: {
      backgroundColor?: Responsive<Color>;
    };
  };
  theme?: any; // 🔥 수정 (any 대신 적절한 타입 적용 가능)
};

const variants = {
  primary: {
    color: 'white',
    backgroundColor: 'primary',
    border: 'none',
    pseudoClass: {
      hover: { backgroundColor: 'primaryDark' },
      disabled: { backgroundColor: 'primary' },
    },
  },
  secondary: {
    color: 'white',
    backgroundColor: 'secondary',
    border: 'none',
    pseudoClass: {
      hover: { backgroundColor: 'secondaryDark' },
      disabled: { backgroundColor: 'secondary' },
    },
  },
  danger: {
    color: 'white',
    backgroundColor: 'danger',
    border: 'none',
    pseudoClass: {
      hover: { backgroundColor: 'dangerDark' },
      disabled: { backgroundColor: 'danger' },
    },
  },
};

/**
 * 버튼 컴포넌트
 */
const Button = styled.button<ButtonProps>`
  ${({ variant = 'primary', color, backgroundColor, pseudoClass, theme }) => {
    if (variant && variants[variant]) {
      const styles = [];
      !color &&
        styles.push(toPropValue('color', variants[variant].color, theme));
      !backgroundColor &&
        styles.push(
          toPropValue(
            'background-color',
            variants[variant].backgroundColor,
            theme,
          ),
        );
      !pseudoClass &&
        styles.push(
          `&:hover {
            ${toPropValue(
              'background-color',
              variants[variant].pseudoClass.hover.backgroundColor,
              theme,
            )}
          }`.replaceAll('\n', ''),
        );
      !pseudoClass &&
        styles.push(
          `&:disabled {
            ${toPropValue(
              'background-color',
              variants[variant].pseudoClass.disabled.backgroundColor,
              theme,
            )}
          }`.replaceAll('\n', ''),
        );
      return styles.join('\n');
    }
  }}
  ${(props) =>
    toPropValue('font-size', props.fontSize ?? 'inherit', props.theme)}
  ${(props) => toPropValue('letter-spacing', props.letterSpacing, props.theme)}
  ${(props) =>
    toPropValue('line-height', props.lineHeight ?? 'inherit', props.theme)}
  ${(props) => toPropValue('color', props.color ?? 'white', props.theme)}
  ${(props) =>
    toPropValue('background-color', props.backgroundColor, props.theme)}
  ${(props) => toPropValue('width', props.width, props.theme)}
  ${(props) => toPropValue('height', props.height, props.theme)}
  ${(props) => toPropValue('min-width', props.minWidth, props.theme)}
  ${(props) => toPropValue('min-height', props.minHeight, props.theme)}
  ${(props) =>
    toPropValue('display', props.display ?? 'inline-block', props.theme)}
  ${(props) => toPropValue('border', props.border, props.theme)}
  ${(props) => toPropValue('overflow', props.overflow, props.theme)}
  ${(props) => toPropValue('margin', props.margin, props.theme)}
  ${(props) => toPropValue('margin-top', props.marginTop, props.theme)}
  ${(props) => toPropValue('margin-left', props.marginLeft, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom, props.theme)}
  ${(props) => toPropValue('margin-right', props.marginRight, props.theme)}
  ${(props) => toPropValue('padding', props.padding, props.theme)}
  ${(props) => toPropValue('padding-top', props.paddingTop ?? 1, props.theme)}
  ${(props) => toPropValue('padding-left', props.paddingLeft ?? 2, props.theme)}
  ${(props) =>
    toPropValue('padding-bottom', props.paddingBottom ?? 1, props.theme)}
  ${(props) =>
    toPropValue('padding-right', props.paddingRight ?? 2, props.theme)}

  &:hover {
    ${(props) =>
      props.pseudoClass?.hover?.backgroundColor &&
      toPropValue('background-color', props.pseudoClass.hover.backgroundColor)}
  }
  &:disabled {
    ${(props) =>
      props.pseudoClass?.disabled?.backgroundColor &&
      toPropValue(
        'background-color',
        props.pseudoClass.disabled.backgroundColor,
      )}
  }

  cursor: pointer;
  outline: 0;
  text-decoration: none;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  border-radius: 4px;
  border: none;
`;

export default Button;
