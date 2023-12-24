import { OpenCvProvider as CvProvider, useOpenCv as useCv } from 'opencv-react';
import { Cv } from './defs/opencv';
import React from 'react';

export const OpenCvProvider: React.JSX.ElementType = CvProvider;
export function useOpenCv(): Cv | undefined {
    const { cv } = useCv();
    return cv;
}