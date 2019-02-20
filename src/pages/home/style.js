import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;

export const HomeLeft = styled.div`
    padding-top:30px;
    width:625px;
    margin-left:15px;
    float:left;
    .banner-img{
        width:100%;
        height:270px;
    }
`;
export const HomeRight = styled.div`
    width:240px;
    float:right;
    border:1px solid blue;
`;

export const TopicWrapper=styled.div`
    margin-left:-18px;
    overflow:hidden;
    padding:20px 0 10px 0;
`;

export const TopicItem = styled.div`
    float:left;
    background:#f7f7f7;
    line-height:32px;
    margin-bottom:18px;
    padding-right:10px;
    height:32px;
    margin-left:18px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    .topic-pic{
    display:block;
    float:left;
    margin-right:10px;
        height:32px;
        width:32px;
    }
`;




