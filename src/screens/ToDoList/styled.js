/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { Picker } from "@react-native-picker/picker";
import Entypo from "react-native-vector-icons/Entypo";

export const Container = styled.View`
    flex: 1;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
    position: relative;
    background-color: #F3F5F8;
`;

export const Header = styled.View`
    height: 100;
    background-color: #4462FF;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    justify-content: flex-end;
    align-items: flex-start;
`;

export const HeaderBottom = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 3px;
`;

export const PickerCustom = styled(Picker)`
    flex: 5;
    color: #fff;
`;

export const Body = styled.View`
    flex: 1;
    margin-top: 10px;
`;

export const CategoryTitle = styled.Text`
    font-size: 24px;
    color: #4462FF;
    margin-bottom: 4px;
    margin-top: 10px;
`;

export const ListIcon = styled(Entypo)`
    flex: 1;
    color: #fff;
    font-size: 25;
    text-align: center;
`;

export const AddToListIcon = styled(Entypo)`
    flex: 1;
    color: #fff;
    font-size: 25px;
    text-align: center;
    margin-right: 8px;
`;