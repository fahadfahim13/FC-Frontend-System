import { Inputs } from "./Inputs";
import { Component } from "./Components";


export interface TemplateComponent{
    component: Component
    animations: [];
    startX?: number;
    startY?: number;
    start_time: number;
    end_time: number;
    component_inputs: Inputs[] | [];
}

export interface Template {
    template_id: number;
    template_name: string;
    template_preview_url: string; //// Image/Video preview url path
    components: TemplateComponent[] | [];
    created_at: Date;
    updated_at: Date;
}

export interface UserTemplate {
    user_id: number;
    version_id: number;    //// Primary key
    template_id: number;
    template_name: string;
    template_preview_url: string; //// Image/Video preview url path
    components: TemplateComponent[] | [];
    created_at: Date;
    updated_at: Date;
}

/////////////////////////////////////////////////       Example    ////////////////////////////////////////////////////////////////

const videoInput: Inputs = {
    type: 'VIDEO_UPLOAD',
    icon: '',
    h3: '',
    p: '',
    width: 30,
    height: 40,
}


const comp_video: TemplateComponent = {
    component: {
        component_id: 1,
        type: 'VIDEO_COMPONENT',
        name: 'Video',
        topIcon: '',
        key_list: []
    },
    animations: [],
    start_time: 0,
    end_time: 120,
    component_inputs: [
        videoInput
    ],
}

const comp_image: TemplateComponent = {
    component: {
        component_id: 2,
        type: 'IMAGE_COMPONENT',
        name: 'Side Rail',
        topIcon: '',
        key_list: []
    },
    animations: [],
    start_time: 0,
    end_time: 120,
    component_inputs: [],
}

const comp_flowcode: TemplateComponent = {
    component: {
        component_id: 3,
        type: 'FLOWCODE_COMPONENT',
        name: 'Flowcode',
        topIcon: '',
        key_list: []
    },
    animations: [],
    start_time: 0,
    end_time: 120,
    component_inputs: [],
}


const temp1: Template = {
    template_id: 1,
    template_name: "Squeezback Template",
    template_preview_url: '', //// Image/Video preview url path
    components: [
        comp_video,
        comp_image,
        comp_flowcode
    ],
    created_at: new Date(),
    updated_at: new Date(),
}