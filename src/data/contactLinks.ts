import type { ContactLink } from "$lib/types/contactLink";

const contactLinks: readonly ContactLink[] = [
    {
        url: "mailto:billythomasdev@gmail.com",
        dataTest: "email",
        text: "billythomasdev@gmail.com"
    },
    {
        url: "https://www.linkedin.com/in/billy-thomas-60330012b/",
        dataTest: "linkedinprofile",
        text: "LinkedIn"
    },
    {
        url: "https://github.com/b42thomas",
        dataTest: "github",
        text: "Github"
    },
    {
        url: "https://billythomasdev.com",
        dataTest: "personalsite",
        text: "Personal Site"
    }
]

export default contactLinks;