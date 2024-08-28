import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Router } from "../components/Router";
import { getCurrentPath } from "../utils/getCurrentPath";
import { Route } from "../components/Route";

vi.mock('./utils/getCurrentPath.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })
    it('should render without problems', () => {
        render(<Router routes={[]} />)
        expect(true).toBeTruthy()
    })

    it('should render 404 if no routes match', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
        expect(screen.getByText('404')).toBeTruthy()
    })
    // it('should navigate using Link', async() => {
    //     getCurrentPath.mockReturnValueOnce('/')
    //     render(
    //         <Router>
    //             <Route
    //             path='/' component={() => {
    //                 return(
    //                     <>
    //                     <h1>home</h1>
    //                     <Link to='/about'>About</Link>
    //                     </>
    //                 )
    //             }}
    //             />
    //             <Route path='/about' component={() => <h1>About</h1>} />
    //         </Router>
    //     )
    //     const anchor = screen.getByText('About')
    //     fireEvent.click(anchor)

    //     const aboutTitle = await screen.findByText('About')
    //     expect(aboutTitle).toBeTruthy()
    // })
    // it('should render the component of the first route that matches', () => {
    //     getCurrentPath.mockReturnValue('/about')

    //     const routes = [
    //         {
    //             path: '/',
    //             Component: () => <h1>Home</h1>
    //         },
    //         {
    //             path: '/about',
    //             Component: () => <h1>About</h1>
    //         }
    //     ]

    //     render(<Router routes={routes} />)
    //     expect(screen.getByText('About')).toBeTruthy()
    // })


})