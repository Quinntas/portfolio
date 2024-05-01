import {PageBox} from '@/app/_components/page-box';
import {ModeToggle} from '@/components/mode-toggle';
import {Button} from '@/components/ui/button';
import {Book, Computer, DoorOpen, Instagram, Link, Linkedin, Mail, Pen, X} from 'lucide-react';
import Image from 'next/image';
import {Footer} from 'react-day-picker';

export default function Home() {
    return (
        <>
            <PageBox className={'flex flex-col sm:gap-[50px]'}>
                <div className={'flex justify-between'}>
                    <div className={'flex gap-[25px] items-center'}>
                        <Image
                            src={'https://i.imgur.com/WxNkK7J_d.webp?maxwidth=450&fidelity=grand'}
                            alt={'pfp'}
                            height={75}
                            width={75}
                            quality={100}
                            className={'border shadow rounded-lg'}
                        />
                        <div className={'flex flex-col gap-1'}>
                            <span className={'text-3xl font-extrabold'}>Caio Quintas</span>
                            <span className={'text-lg text-muted-foreground font-semibold'}>
                                Backend senior developer
                            </span>
                        </div>
                    </div>

                    <div className={'flex gap-[10px]'}>
                        <Button variant={'ghost'} size={'icon'} className={'opacity-65'}>
                            <Linkedin />
                        </Button>
                        <Button variant={'ghost'} size={'icon'} className={'opacity-65'}>
                            <X />
                        </Button>
                        <Button variant={'ghost'} size={'icon'} className={'opacity-65'}>
                            <Instagram />
                        </Button>
                        <Button variant={'ghost'} size={'icon'} className={'opacity-65'}>
                            <Mail />
                        </Button>

                        <ModeToggle />
                    </div>
                </div>

                <h2 className={'font-semibold'}>
                    Im a multi-disciplinary entrepreneurial mindset Product Designer, passionately designing & building
                    software from concept to launch, for over 10 years.
                </h2>

                <div className="flex flex-col gap-[20px]">
                    <span className={'font-semibold text-muted-foreground'}>Quick Intro</span>

                    <div className="flex flex-col gap-[10px]">
                        <div className={'flex gap-[10px]'}>
                            <Book />
                            <span>Currently on personal sabbatical for 6 mons.</span>
                        </div>

                        <div className={'flex gap-[10px]'}>
                            <Pen />
                            <span>Currently on personal sabbatical for 6 mons.</span>
                        </div>

                        <div className={'flex gap-[10px]'}>
                            <Computer />
                            <span>Currently on personal sabbatical for 6 mons.</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[20px]">
                    <span className={'font-semibold text-muted-foreground'}>Projects</span>

                    <div className="flex flex-col gap-[10px] w-full">
                        <div className={'w-full flex gap-[50px]'}>
                            <Image
                                src={'https://i.imgur.com/WxNkK7J_d.webp?maxwidth=450&fidelity=grand'}
                                alt={'pfp'}
                                height={300}
                                width={300}
                                quality={75}
                                className={'border shadow rounded-lg'}
                            />
                            <div className="flex flex-col gap-[10px]">
                                <h1 className={'font-bold text-2xl'}>Analytics onboarding project</h1>

                                <span className={'text-muted-foreground mb-[10px]'}>
                                    Designing a better A/B testing product to help companies conduct successful A/B
                                    tests across a customers lifecycle.
                                </span>

                                <div className="flex flex-col gap-[1px] mb-[10px]">
                                    <span className={'text-muted-foreground'}>— Jun 21 - Jan 22</span>
                                    <span className={'text-muted-foreground'}>— Jun 21 - Jan 22</span>
                                </div>

                                <div className="flex items-center">
                                    <Button className="flex gap-[10px]">
                                        Github
                                        <Link />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageBox>
        </>
    );
}
