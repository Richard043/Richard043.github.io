import React from 'react'

// NextJs
import Link from 'next/link'

// Lib
import ImageHolder from '@/lib/ImageHolder'
import { Tooltip } from '@mui/material'


export default function Footer() {
    const portfolioImg = 'https://i.ibb.co/L0pf86z/portfolio.png'
    const themealdbImg = 'https://themealdb.com/images/meal-icon.png'

    return (
        <footer className='bg-black text-white container-fluid'>
            <div className='container py-2 d-flex flex-row flex-wrap justify-content-center algin-items-center gap-3'>
                <Tooltip title='API' arrow>
                    <Link style={{width: '30px', height: '30px', backgroundColor: "#2d2013"}} className='pt-1 d-flex justify-content-center algin-items-center overflow-hidden rounded-1' href='https://themealdb.com' target='_blank'>
                        <ImageHolder img={themealdbImg} title={'themealdb.com'} network />
                    </Link>
                </Tooltip>
            </div>
        </footer>
    )
}
