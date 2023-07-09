import { ButtonAbout, ButtonContact, ButtonFacebook, ButtonTwitter } from "../../ATOMS/Buttons/Buttons"
import "./footer-mobile.css"
import "./footer-laptop.css"

export default function Footer() {
  return (
    <footer className="footer">
      <ButtonAbout/>
      <ButtonContact/>
      <ButtonTwitter/>
      <ButtonFacebook/>
    </footer>
  )
}