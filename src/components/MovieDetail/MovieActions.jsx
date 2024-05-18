import React from 'react';
import styled from 'styled-components';
import containmentIcon from '../../assets/icon/icon1.png';
import experienceRecordIcon from '../../assets/icon/icon2.png';
import commonTasteIcon from '../../assets/icon/icon3.png';
import moreDetailsIcon from '../../assets/icon/icon4.png';

const Box3 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    cursor: pointer;

    & > *:not(:last-child) {
        margin-right: 80px;
    }
`;

const Icon = styled.img`
    position: relative;
    justify-content: center;
    display: flex;
    width: 30px;
    height: 30px;
    color: #8c8c8c;
    text-align: center;
    padding: 14px 10px;
`;

const Content6 = styled.p`
    display: flex;
    align-items: center;
    color: #8c8c8c;
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    text-align: center;
    width: unset;
    height: 30px;
    padding: 0;
`;

const MovieActions = ({ handleIconClick }) => (
    <Box3>
        <Content6><Icon src={containmentIcon} alt="Icon" onClick={() => handleIconClick("내 보관함에 작품을 담으려면 로그인이 필요해요. 회원가입 혹은 로그인해주세요.")} /> 보고싶어요 </Content6>
        <Content6><Icon src={experienceRecordIcon} alt="Icon" onClick={() => handleIconClick("지금 회원가입 혹은 로그인하시고, 경험한 감동을 기록해보세요.")} /> 코멘트</Content6>
        <Content6><Icon src={commonTasteIcon} alt="Icon" onClick={() => handleIconClick("로그인이 필요한 기능이에요. 지금 회원가입 혹은 로그인하고 공통의 취향을 나눠보세요")} /> 보는중</Content6>
        <Content6><Icon src={moreDetailsIcon} alt="Icon" onClick={() => handleIconClick("로그인이 필요한 기능이에요. 지금 회원가입 혹은 로그인하고 공통의 취향을 나눠보세요")} /> 더보기</Content6>
    </Box3>
);

export default MovieActions;
