import React from 'react'
import FooterWidgetLinks from '../FooterWidgetLinks'
import NewsLetter from './NewsLetter'

const MidFooter = () => {
    const NavLinks = [
        {
            navTitle: "Get to Know Us",
            navLinks: [
                { linkName: "About Us", href: "/about" },
                { linkName: "News & Blog", href: "/news_blogs" },
                { linkName: "Careers", href: "/career" },
                { linkName: "Investors", href: "/investors" },
                { linkName: "Contact Us", href: "/contact_us" },
            ]
        },
        {
            navTitle: "Customer Service ",
            navLinks: [
                { linkName: "Help Center", href: "/help_center" },
                { linkName: "FAQ’s", href: "/faq" },
                { linkName: "Accessibility", href: "/accessbility" },
                { linkName: "Feedback", href: "/size_guide" },
                { linkName: "Payment Method", href: "/payment_method" },
            ]
        },
        {
            navTitle: "Orders & Returns",
            navLinks: [
                { linkName: "Track Order", href: "track_order" },
                { linkName: "Shipping Delivery", href: "shipping_delivery" },
                { linkName: "Return Exchange", href: "return_exchange" },
                { linkName: "Feedback", href: "size_guide" },
                { linkName: "Price Match Guarantee", href: "price_match_guarantee" },
            ]
        },
        {
            navTitle: "Legal",
            navLinks: [
                { linkName: "Privacy Policy", href: "privacy_policy" },
                { linkName: "Terms of Use", href: "terms_of_use" },
                { linkName: "Legal", href: "legal" },
                { linkName: "Site Map", href: "site_map" }
            ]
        }
    ]
    return (
        <>
            <div className='w-full block md:flex gap-4 border-[#ecf0f4] border-t my-5 py-4 '>
                <div className='container block md:flex md:gap-4 space-y-4 md:space-y-0'>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-4 space-y-4 md:space-y-0'>
                        {NavLinks.map((list: any) => (
                            <>
                                <FooterWidgetLinks
                                    footerWidget={list}
                                    key={Math.random()}
                                />
                            </>
                        ))}
                    </div>
                    <div className='w-full md:w-1/4'>
                        <NewsLetter />
                    </div>
                </div>

            </div>
        </>
    )
}

export default MidFooter
