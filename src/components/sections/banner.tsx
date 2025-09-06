'use client';

import {
    Banner,
    BannerAction,
    BannerClose,
    BannerIcon,
    BannerTitle,
} from '@/components/ui/shadcn-io/banner';
import { CircleAlert } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const Funds = () => (
    <Banner className='bg-primary text-black z-[053457353589544749758] mb-1'>
        <BannerIcon icon={CircleAlert} />
        <BannerTitle className='font-serif'>Zypp Protocol Token $ZYPP is Live!</BannerTitle>
        <p className='font-light'>Support the next-gen decentralized delivery system. CA: <span className='font-medium'>EHjgA..pump</span></p>
        <BannerAction variant="link" className='text-black hover:text-black'>
            <Link href="https://pump.fun/coin/EHjgAvQjJEbx2mgD4UShjLea9nbv1193WeuYMJFdpump" target='_blank'>
                Contribute Now
            </Link>
        </BannerAction>
        {/* <BannerClose /> */}
    </Banner>
);

export default Funds;