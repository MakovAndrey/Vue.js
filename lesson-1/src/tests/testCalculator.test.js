import { mount } from "@vue/test-utils";
import Calc from "../components/HelloWorld.vue";
import { expect } from "@jest/globals";

describe("Test Calculator", () => {
    it("test number1", () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find("input[name=number1]");
        operand1.setValue("1");

        expect(wrapper.vm.number1).toBe(1);
    });

    it("test number2", () => {
        const wrapper = mount(Calc);

        const operand2 = wrapper.find("input[name=number2]");
        operand2.element.value = "1";
        operand2.trigger("input");

        expect(wrapper.vm.number2).toBe(1);
    });

    it("test sum", () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find("input[name=number1]");
        const operand2 = wrapper.find("input[name=number2]");
        operand1.setValue("1");
        operand2.setValue("2");

        const btn = wrapper.find('button[title="+"]');
        btn.trigger("click");

        expect(wrapper.vm.result).toBe(3);
    });

    it("test sub", () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find("input[name=number1]");
        const operand2 = wrapper.find("input[name=number2]");
        operand1.setValue("1");
        operand2.setValue("2");

        const btn = wrapper.find('button[title="-"]');
        btn.trigger("click");

        expect(wrapper.vm.result).toBe(-1);
    });

    it("test exponentation", () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find("input[name=number1]");
        const operand2 = wrapper.find("input[name=number2]");
        operand1.setValue("2");
        operand2.setValue("2");

        const btn = wrapper.find('button[title="exp"]');
        btn.trigger("click");

        expect(wrapper.vm.result).toBe(4);
    });

    it("test division", () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find("input[name=number1]");
        const operand2 = wrapper.find("input[name=number2]");
        operand1.setValue("2");
        operand2.setValue("2");

        const btn = wrapper.find('button[title="/"]');
        btn.trigger("click");

        expect(wrapper.vm.result).toBe(1);
    });

    // it("test divisionWithRem", () => {
    //     const wrapper = mount(Calc);
    //     const operand1 = wrapper.find("input[name=number1]");
    //     const operand2 = wrapper.find("input[name=number2]");
    //     operand1.setValue("4");
    //     operand2.setValue("3");

    //     const btn = wrapper.find('button[title="i/r"]');
    //     btn.trigger("click");

    //     expect(wrapper.vm.result).toBe("1", "1");
    // });

    it("test multiply", () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find("input[name=number1]");
        const operand2 = wrapper.find("input[name=number2]");
        operand1.setValue("3");
        operand2.setValue("3");

        const btn = wrapper.find('button[title="*"]');
        btn.trigger("click");

        expect(wrapper.vm.result).toBe(9);
    });

    it("test keyboardCheckboxBtn", () => {
        const wrapper = mount(Calc);
        const keyboardCheckboxBtn = wrapper.find("input[type=checkbox]");
        keyboardCheckboxBtn.trigger("click");
        expect(keyboardCheckboxBtn.element.checked).toBe(true);
    });

    it("test add operand with keyboard buttons", () => {
        const wrapper = mount(Calc);
        const firstRadioBtn = wrapper.find("input[id=firstInputToggle]");
        firstRadioBtn.setChecked();
        const btns = wrapper.findAll("button[type=screenKeyboard]");
        btns.wrappers.forEach((wrapper) => {
            wrapper.trigger("click");
        });
        expect(wrapper.vm.number1).toBe('0123456789');
    });

    it("test 'delete' button of keyboard", () => {
        const wrapper = mount(Calc);
        const firstRadioBtn = wrapper.find("input[id=firstInputToggle]");
        firstRadioBtn.setChecked();
        const btns = wrapper.findAll("button[type=screenKeyboard]");
        btns.wrappers.forEach((wrapper) => {
            wrapper.trigger("click");
        });
        const removeBtn = wrapper.find("button[name=removeBtn]");
        removeBtn.trigger("click");
        expect(wrapper.vm.number1).toBe('012345678');
    });

    it("test second radio button", () => {
        const wrapper = mount(Calc);
        const secondRadioBtn = wrapper.find("input[id=secondInputToggle]");
        secondRadioBtn.setChecked();
        const btns = wrapper.findAll("button[type=screenKeyboard]");
        btns.wrappers.forEach((wrapper) => {
            wrapper.trigger("click");
        });
        expect(wrapper.vm.number2).toBe('0123456789');
    });

    it("test first radio button", () => {
        const wrapper = mount(Calc);
        
        const firstRadioBtn = wrapper.find("input[id=firstInputToggle]");
        firstRadioBtn.setChecked();
        const btns = wrapper.findAll("button[type=screenKeyboard]");
        btns.wrappers.forEach((wrapper) => {
            wrapper.trigger("click");
        });
        expect(wrapper.vm.number1).toBe('0123456789');
    });
});