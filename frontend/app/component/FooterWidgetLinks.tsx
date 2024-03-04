import Link from 'next/link'
import React from 'react'
import WidgetTitle from './WidgetTitle'

interface FooterWidgetLinks {
    navTitle: string,
    navLinks: [
        {
            linkName: string,
            href: string
        }
    ]
}

interface FooterWidgetLinksProps {
    footerWidget: FooterWidgetLinks,
    key: any
}
const FooterWidgetLinks: React.FC<FooterWidgetLinksProps> = ({ footerWidget, key }) => {
    const linksFooter = footerWidget.navLinks && footerWidget.navLinks.map((list: any, index: any) => (
        <>
            <li key={Math.random()}>
                <Link
                    className='relative                     
                        after:absolute
                        after:right-0
                        after:-bottom-[2px]
                        after:w-0
                        after:transition-[width]
                        after:duration-[.3s]
                        after:border-b-2
                        after:border-gray-500
                        hover:after:left-0
                        hover:after:w-full                    
                    '
                    href={list.href}>{list.linkName}</Link>
            </li>
        </>
    ))
    return (
        <>
            <div className='w-full' key={key}>
                <WidgetTitle
                    title={footerWidget.navTitle}
                />
                <ul className='w-full list-none m-0 p-0 space-y-2'>
                    {linksFooter}
                </ul>
            </div>
        </>
    )
}

export default FooterWidgetLinks
