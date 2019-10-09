import { Component, ComponentType, CSSProperties } from 'react';
import { CustomPickerProps } from '../../..';

export interface HuePickerDefaultStyle {
    picker?: CSSProperties;
    hue?: CSSProperties;
}

export interface HuePickerStyle {
    default?: HuePickerDefaultStyle;
}

export interface HuePickerProps extends CustomPickerProps {
    height?: string;
    width?: string;
    direction?: 'vertical' | 'horizontal';
    pointer?: ComponentType;
    styles?: HuePickerStyle;
    className?: string;
}

export default class HuePicker extends Component<HuePickerProps> {}
