import React, { useEffect, useRef } from 'react'
import { Cv } from 'use-cv';
import styled from 'styled-components';

const Full = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    `;
const Layout = styled.div`
    display: flex;
    justify-content: center;

`
const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
`;
const Frame = styled.div`
    margin: auto auto;
    width: 370px;
    height: 90vh;
`;

export type Props = {
    cv: Cv
}
export function Component({ cv }: Props) {
    const input = useRef<HTMLImageElement | null>(null);
    const output = useRef<HTMLCanvasElement | null>(null);

    function run() {
        if (input.current && output.current) {
            const img = cv.imread(input.current);
            const { width, height } = img.size();
            const dsize = new cv.Size(img.rows, img.cols);
            const M = cv.getPerspectiveTransform(
                cv.matFromArray(4, 1, cv.CV_32FC2, [0, 0, width, 0, width, height, 0, height]),
                cv.matFromArray(4, 1, cv.CV_32FC2, [-100, 0, width + 100, 0, width, height, 0, height])
            );
            const dst = new cv.Mat();
            cv.warpPerspective(img, dst, M, dsize, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
            cv.imshow(output.current, dst);
        }
    };

    return (
        <Full>
            <button onClick={run}>run</button>
            <Layout>
                <Frame>
                    <Img ref={input} src="/images/cat.jpeg" alt="" />
                </Frame>
                <Frame>
                    <canvas ref={output} />
                </Frame>
            </Layout>
        </Full>
    )
}