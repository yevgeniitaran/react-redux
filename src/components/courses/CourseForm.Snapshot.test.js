import renderer from "react-test-renderer"
import CourseForm from "./CourseForm";
import {courses, authors} from "../../../tools/mockData"
import React from "react"

it("sets submit button label 'Saving' when saving is set true", () => {
    const tree = renderer.create(
        <CourseForm
            onChange={courses[0]}
            authors={authors}
            onSave={jest.fn()}
            course={jest.fn()}
            saving/>
    );

    expect(tree).toMatchSnapshot();
});

it("sets submit button to 'Save' when saving is false", () => {
    const tree = renderer.create(
        <CourseForm
            onChange={courses[0]}
            authors={authors}
            onSave={jest.fn()}
            course={jest.fn()}
            saving={false}/>
    );

    expect(tree).toMatchSnapshot();
});