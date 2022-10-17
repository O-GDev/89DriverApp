import styled from "styled-components";

export const OTPInputContainer = styled.View`
 justify-content: center;
 alignSelf: center;

`;

export const TextInputHidden = styled.TextInput`
 width: 300px;
 border-color: #e5e5e5;
 border-width: 1px;
 border-radius: 5px;
 padding: 15px;
 position: absolute;
 opacity: 0;
`;

export const SplitOTPBoxesContainer = styled.Pressable`
 width: 200px;
 flex-direction: row;
 justify-content: space-between;
`;
export const SplitBoxes = styled.View`
/* border-color: #e5e5e5;
 border-width: 2px; */
 border-radius: 15px;
 padding: 10px;
 height:43px;
 width:43px;
 backgroundColor:#D9D9D999;
 alignSelf:center;
`;

export const SplitBoxText = styled.Text`
 font-size: 20px;
 alignSelf: center;
 color: #000000;
`;

export const SplitBoxesFocused = styled(SplitBoxes)`
 border-color: #ecdbba;
 background-color: grey;

`;

export const ButtonContainer = styled.TouchableOpacity`
 background-color: #d8e9a8;
 padding: 50px;
 justify-content: center;
 align-items: center;
 width: 200px;
 margin-top: 30px;
`;

export const ButtonText = styled.Text`
 color: black;
 font-size: 20px;
`;