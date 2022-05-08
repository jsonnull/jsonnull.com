import Image from 'next/image'
import { Spacer } from './Spacer.tsx'
import { profileDataURI } from '../lib/profileDataURI'
import clsx from 'clsx'

export const OpenGraph = ({ title }) => {
  return (
    <div
      className={clsx(
        'flex w-[1200px] h-[632px] p-8 text-white relative overflow-hidden pattern-fg-white pattern-bg-black pattern-lines-[16px]'
      )}
    >
      <div className="p-12 bg-black grid grid-cols-1 grid-rows-2 flex-1 flex-col bg-gradient-to-br">
        <div />
        <div className="flex flex-col">
          <h1 className="text-7xl mt-[-0.5em] font-semibold tracking-tight">{title}</h1>
          <Spacer small />
          <div className="flex mt-auto">
            <div className="mt-auto flex flex-1 items-center">
              <p className="text-4xl font-normal mr-auto">Jason Nall</p>
              <Image
                src={profileDataURI}
                alt="Picture of the author"
                width="60"
                height="60"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
