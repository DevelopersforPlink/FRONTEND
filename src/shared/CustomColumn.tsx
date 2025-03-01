"use client";

import styled from '@emotion/styled';

interface CustomColumnProps {
	$width?: string;
	$height?: string;
	$gap?: string;
	$alignitems?: string;
	$justifycontent?: string;
	$marginTop?: string;
  $margin?: string;
	$padding?: string;
}

const CustomColumn = styled.div<CustomColumnProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  gap: ${(props) => props.$gap || '1.875rem'};
  align-items: ${(props) => props.$alignitems || 'center'};
  justify-content: ${(props) => props.$justifycontent || 'center'};
  margin-top: ${(props) => props.$marginTop || '0'};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
`;

export default CustomColumn;