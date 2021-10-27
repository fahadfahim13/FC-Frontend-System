export interface GenericComponent {
    component_id: number | string;
    type: string;  /// VIDEO_COMPONENT, IMAGE_COMPONENT, TEXT_COMPONENT, ICON_COMPONENT, SHAPE_COMPONENT, BACKGROUND
    name: string;  /// Video, Side Rail, Flowcode, Bottom, CTA, Education Icon
    topIcon: string;
    key_list: [];
    width?: number;
    height?: number;
}

export interface VideoComponent extends GenericComponent{
    content_url: string;
    preview_url: string;
    fps?: string | number;
}

export interface ImageComponent extends GenericComponent{
    content_url: string;
}

export interface IconComponent extends GenericComponent{
    content_url: string;
    iconName: string;
}

export interface TextComponent extends GenericComponent{
    text: string;
    textColor: string;
    font: string;
    fontSize?: number;
    backgroundColor?: string;
}

export interface ShapeComponent extends GenericComponent{  //////////////// ...............
    color?: string;
    url?: string;
}

export type Component = GenericComponent | TextComponent | VideoComponent | ImageComponent | ShapeComponent | IconComponent