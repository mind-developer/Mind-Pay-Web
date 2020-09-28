import styled from "styled-components";

export const Status = styled.span`
    width: 10px;
    height: 10px;
    background: ${props => props.status ? "#0aff0a" : "red"};
    display: block;
    border-radius: 100%;
`

export const ProfilePic = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    object-fit: cover;
`