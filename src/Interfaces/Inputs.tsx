export interface GenericInputs {
    type: string; ///// VIDEO_UPLOAD, IMAGE_UPLOAD, TEXT_INPUT,
    // SHAPE_INPUT, FLOWCODE_INPUT, ANIMATION_SELECT, ICON_SELECT

}

export interface TextInput extends GenericInputs{
    textType: string;
    name: string;
    placeholder?: string;
    label?: string;
    maxLength?: number;
    textIcon?: string;
}

export interface ColorSelect extends GenericInputs{
    rgb: string;
    name: string;
    label: string;
}

export interface AnimationSelect extends GenericInputs{
    animation_id: string;
    name: string;
    icon?: string;
}

export interface VideoUpload extends GenericInputs{
    icon: string;
    h3: string;
    p?: string;
    width?: number;
    height?: number;
}

export interface ImageUpload extends GenericInputs {
    icon: string;
    placeholder: string;
    bottomText?: string;
    width?: number;
    height?: number;
}


export type Inputs = GenericInputs | VideoUpload | ImageUpload | TextInput  | ColorSelect | AnimationSelect