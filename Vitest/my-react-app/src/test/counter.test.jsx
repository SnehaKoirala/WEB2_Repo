
// Counter.test.js
import { it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "./counter"
import React from 'react' // 👈 this line fixes the error

it("increments and decrements count", () => {
    render(<Counter />)

    const incrementButton = screen.getByText("Increment")
    const decrementButton = screen.getByText("Decrement")
    const count = screen.getByRole("heading")

    fireEvent.click(incrementButton)
    expect(count).toHaveTextContent("Count: 1")

    fireEvent.click(decrementButton)
    expect(count).toHaveTextContent("Count: 0")
})