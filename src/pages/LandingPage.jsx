import { Category } from "../components/Category"
import { Discover } from "../components/Discover"
import {LandingPageImg} from "../components/LandingPageImg"
import {Gallery} from "../components/Gallery";
import {Navbar} from "../components/Navbar"; 

export function LandingPage () {
    return (
        <>
            <Navbar/>
            <LandingPageImg/>
            <Discover/>
            <Gallery/>
            <Category/>
        </>
    )
}