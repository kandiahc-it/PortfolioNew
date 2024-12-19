import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SMButton = styled.div`
  height: 20px;
  padding: 15px 10px;
  font-size: 16px;
  font-weight: 400;
  width: fit-content;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  gap: 5px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background: yellow;
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
  &:hover svg {
    transform: rotate(-45deg) scale(1.1);
    transition: transform 0.3s ease;
  }
`;
export const SeeMoreButton = ({ text,link }) => {
  return (
    <a href={link} target="_blank">
    <SMButton>
      {text}
      <ArrowForwardIcon sx={{fill:"black"}}/>
    </SMButton>
    </a>
  );
};
