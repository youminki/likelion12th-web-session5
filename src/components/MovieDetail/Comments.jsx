import React from 'react';
import styled from 'styled-components';


const Comments = ({ comments }) => (
    <MainContainer4>
        <ComentHeader>
            <h2> 코멘트</h2>
            <span>4500+</span>
            <ComentContent1>더보기</ComentContent1>
        </ComentHeader>
        <CommentMainbox>
            {comments.map((comment, index) => (
                <CommentSubbox key={index}>
                    <BoxC>
                        <BoxC1>
                            <div>{comment.author}</div>
                            <div className='starBox'>
                                <img alt="star" height="16px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM0QTRBNEEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE3Ljk4bC02LjAxNSA0LjM5MmMtLjUwOC4zNzItMS4xOTQtLjEyNi0uOTk4LS43MjVsMi4zMTctNy4wODEtNi4wMzUtNC4zNjdjLS41MS0uMzY5LS4yNDctMS4xNzUuMzgyLTEuMTc0bDcuNDQ3LjAxNiAyLjI4Ni03LjA5MWMuMTkyLS42IDEuMDQtLjYgMS4yMzMgMGwyLjI4NiA3LjA5IDcuNDQ3LS4wMTVjLjYyOS0uMDAxLjg5LjgwNS4zOCAxLjE3NGwtNi4wMzMgNC4zNjcgMi4zMTYgNy4wOGMuMTk2LjYtLjQ5IDEuMDk4LS45OTkuNzI2TDEyIDE3Ljk4eiIvPgo8L3N2Zz4K" width="16px" />4.5
                            </div>
                        </BoxC1>
                        <BoxC2>{comment.text}</BoxC2>
                        <BoxC3>
                            <Ddabong />
                            <div className='num'>255</div>
                            <Chat />
                            <div className='num'>23</div>
                        </BoxC3>
                        <BoxC4>좋아요</BoxC4>
                    </BoxC>
                </CommentSubbox>
            ))}
        </CommentMainbox>
    </MainContainer4>
);

export default Comments;

const MainContainer4 = styled.div`
    padding-left: 50px;
`;

const ComentHeader = styled.header`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;

    & > span {
        color: rgb(255, 47, 110);
        font-size: 24px;
        line-height: 28px;
        margin: 0px 0px 0px 8px;
    }
`;

const ComentContent1 = styled.div`
    padding-right: 50px;
    color: rgb(255, 47, 110);
    font-size: 24px;
    line-height: 158px;
    float: right;
    position: absolute;
    right: 0;
`;

const CommentMainbox = styled.ul`
    overflow-x: auto;
    white-space: nowrap;
    grid-template-columns: repeat(4, minmax(350px, 1fr));
    display: grid;
    gap: 8px;
    list-style: none;
    padding: 0px;
    margin: 0px;
`;

const CommentSubbox = styled.li`
    box-sizing: border-box;
    display: block;
    padding: 0px;
`;

const BoxC = styled.div`
    display: flex;
    flex-direction: column;
    color: rgb(0, 0, 0);
    text-decoration: none;
    width: 350px;
    height: 300px;
    background-color: rgb(242, 242, 242);
    border-radius: 6px;
    overflow: hidden;
`;

const BoxC1 = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    color: rgb(0, 0, 0);
    text-decoration: none;
    color: rgb(31, 31, 31);
    font-size: 22px;
    font-weight: 400;
    letter-spacing: -0.7px;
    line-height: 22px;
    margin-bottom: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(229, 229, 229);
    line-height: 19px;
    height: 44px;
`;

const BoxC2 = styled.div`
    position: relative;
    height: 300px;
    margin: 12px 0px 15px;
    padding: 2px 8px;
    overflow-y: auto;
`;

const BoxC3 = styled.div`
    position: relative;
    padding: 2px 8px;
    display: flex;
    align-items: center;
    color: rgb(120, 120, 120);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 19px;
    height: 44px;
    border-top: 1px solid rgb(229, 229, 229);
    border-bottom: 1px solid rgb(229, 229, 229);
    overflow: hidden;
`;

const Ddabong = styled.div`
    display: inline-block;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzc4Nzg3OCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02Ljc1IDkuNDg1aC0zYTEgMSAwIDAgMC0xIDF2MTBhMSAxIDAgMCAwIDEgMWgzYTEgMSAwIDAgMCAxLTF2LTEwYTEgMSAwIDAgMC0xLTFNMjAuNjU3IDguNTY2YTIuMzYzIDIuMzYzIDAgMCAwLTEuNzc5LS44MTNIMTYuNjJsLjE2NC0uNjI3Yy4xMzctLjUyOC4yMDEtMS4xMi4yMDEtMS44NjMgMC0xLjkxOS0xLjM3NS0yLjc3OC0yLjczOC0yLjc3OC0uNDQ0IDAtLjc2Ni4xMjMtLjk4Ni4zNzYtLjIuMjI3LS4yODIuNTMtLjI0My45MzVsLjAzIDEuMjMtMi45MDMgMi45NGMtLjU5My42LS44OTQgMS4yMy0uODk0IDEuODcydjkuNjQ3YS41LjUgMCAwIDAgLjUuNWg3LjY4N2EyLjM4OCAyLjM4OCAwIDAgMCAyLjM0OC0yLjA3bDEuNDQ1LTcuNDUyYTIuNDQgMi40NCAwIDAgMC0uNTc0LTEuODk3Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K) center center / contain no-repeat;
    width: 18px;
    height: 18px;
    margin: 0px 3px;
`;

const BoxC4 = styled.div`
    position: relative;
    background: none;
    border: none;
    margin: 0px;
    cursor: pointer;
    color: rgb(255, 47, 110);
    font-size: 22px;
    font-weight: 400;
    letter-spacing: -0.7px;
    line-height: 22px;
    padding: 12px 18px;
`;

const Chat = styled.div`
    display: inline-block;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuODU3IDE3Ljc4Nkw2IDIxdi00LjkxYy0xLjg0MS0xLjM3My0zLTMuMzY5LTMtNS41OUMzIDYuMzU4IDcuMDMgMyAxMiAzczkgMy4zNTggOSA3LjVjMCA0LjE0Mi00LjAzIDcuNS05IDcuNS0uNzM5IDAtMS40NTYtLjA3NC0yLjE0My0uMjE0eiIvPgo8L3N2Zz4K) center center / contain no-repeat;
    width: 18px;
    height: 18px;
    margin: 0px 3px 0px 13px;
`;
