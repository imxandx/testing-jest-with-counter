import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./Counter"

describe("Counter Component", () => {
    it("should init with counter zero", () => {
        render(<Counter initialCount={0} />)

        const value = screen.getByTestId("countNumber").textContent
        
        expect(value).toEqual("Count: 0")

        screen.debug() // console.log()
    })

    it("should increment 1 when click at increment button", () => {
        render(<Counter initialCount={0} />)

        const buttonIncrement = screen.getByRole("button", {name: "Increment"})

        expect(buttonIncrement).toBeEnabled()

        fireEvent.click(buttonIncrement)

        expect(screen.getByTestId("countNumber").textContent).toEqual("Count: 1")
    })

    it("should decrement -1 when click at decrement button", () => {
        render(<Counter initialCount={0} />)

        const buttonDecrement = screen.getByRole("button", {name: "Decrement"})

        expect(buttonDecrement).toBeEnabled()

        fireEvent.click(buttonDecrement)

        expect(screen.getByTestId("countNumber").textContent).toEqual("Count: -1")
    })
})