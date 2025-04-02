import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "../../App";

describe("App", () => {
    it("metni tersine çevirir", () => { 
        const {getByPlaceholderText, getByText} = render(<App/>);
        const input = getByPlaceholderText("Kriterlere uygun bir metin giriniz");
        const button = getByText("Metni Ters Çevir");
        fireEvent.changeText(input,"merhaba");
        fireEvent.press(button);
        expect(getByText("abahrem")).toBeTruthy();
    });
    it("boş metin girtildiğinde boş cevap dönsün", () => { 
        const {getByText} = render(<App/>);
        const button = getByText("Metni Ters Çevir");
        fireEvent.press(button);
        expect(getByText("")).toBeTruthy();

    });
    it("özel karakterler doğru ters çevrilsin", () => {
        const input = getByPlaceholderText("bir metin giriniz"); 
        const {getByText} = render(<App/>);
        const button = getByText("Metni Ters Çevir");
        fireEvent.changeText(input,"12345!*&");
        expect(getByText("&*!54321")).toBeTruthy();
        
    });
});
