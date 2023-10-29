
import { screen,render } from "@testing-library/react"
import ContactUs from "../Components/Contact"

describe("Contact Us Test Cases",() => {

    // beforeAll(() => {
    //     console.log('Before All')
    // })
    // beforeEach(() => {
    //     console.log('Before Each')
    // })
    // afterAll(() => {
    //     console.log('After All')
    // })

    // afterEach(() => {
    //     console.log('After Each')
    // })

    it("Should load contact us component",() => {
        render(<ContactUs />)
        const heading = screen.getByRole("heading", { name: "Contact Us" })
        expect(heading).toBeInTheDocument();
    })
    test("Should load contact us component",() => {
        render(<ContactUs />)
        const heading = screen.getByRole("heading", { name: "Contact Us" })
        expect(heading).toBeInTheDocument();
    })
    test("Should load contact us component",() => {
        render(<ContactUs />) 
        const heading = screen.getByRole("button")
        expect(heading).toBeInTheDocument()
    })
    test("Should Load Contact Us Component",() => {
        render(<ContactUs />)
        const heading = screen.getByPlaceholderText('Message')
        expect(heading).toBeInTheDocument()
    })
    test("Should Load all components with input",() => {
        render(<ContactUs />)
        const inputs = screen.getAllByRole('textbox')
        expect(inputs.length).toBeTruthy()
    })
})

