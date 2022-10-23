import { promises } from 'fs'
import path from 'path'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'

const openSansRegular = path.resolve(
  __dirname,
  '../../../static/fonts/OpenSans-Regular.ttf'
)
const openSansSemiBold = path.resolve(
  __dirname,
  '../../../static/fonts/OpenSans-SemiBold.ttf'
)

const openSansRegularBuffer = promises.readFile(openSansRegular)
const openSansSemiBoldBuffer = promises.readFile(openSansSemiBold)

const PROFILE_URL = 'http://localhost/profile.jpg'
const profileImage = promises.readFile(
  path.resolve(__dirname, '../../../static/img/photo.jpg')
)

const OUTER_PADDING = 20

export const OpenGraph = ({ title }: { title?: string }) => {
  return (
    <div
      style={{
        fontFamily: '"Open Sans", sans-serif',
        display: 'flex',
        padding: `${OUTER_PADDING}px`,
        width: 1200,
        height: 632,
        backgroundColor: 'black',
      }}
    >
      <div
        style={{
          padding: '0 72px 72px',
          backgroundColor: 'black',
          border: '4px solid white',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontWeight: 600,
            color: 'white',
            fontSize: '48px',
            lineHeight: '48px',
            marginTop: `${632 / 2 - OUTER_PADDING * 2 - 48 / 2}px`,
            letterSpacing: '-0.025em',
          }}
        >
          {title}
          {!title && (
            <>
              Crafting
              <span style={{ color: 'transparent' }}>.</span>
              <span
                style={{
                  backgroundImage: 'linear-gradient(90deg, #707EC4, #6D7599)',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                experiences
              </span>
              <span style={{ color: 'transparent' }}>.</span>
              with
              <span style={{ color: 'transparent' }}>.</span>
              code.
            </>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            width: '100%',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: '36px',
                letterSpacing: '-0.025em',
            }}
          >
            Jason Nall
          </div>
          <img
            src={'data:profile'}
            style={{
              borderRadius: '50%',
              marginLeft: 'auto',
            }}
            width={48}
            height={48}
          />
        </div>
      </div>
    </div>
  )
}

export async function generateOpenGraphImage({
  title,
  slug,
}: {
  title?: string
  slug: string
}) {
  let svg = await satori(<OpenGraph title={title} />, {
    width: 1200,
    height: 632,
    fonts: [
      {
        name: 'Open Sans',
        data: await openSansRegularBuffer,
        weight: 400,
        style: 'normal',
      },
      {
        name: 'Open Sans',
        data: await openSansSemiBoldBuffer,
        weight: 600,
        style: 'normal',
      },
    ],
  })

  svg = svg.replace('data:profile', PROFILE_URL)

  const opts = {
    background: 'white',
    fitTo: {
      mode: 'width' as const,
      value: 1200,
    },
    font: {
      fontFiles: [openSansRegular, openSansSemiBold],
      loadSystemFonts: false,
      defaultFontFamily: 'Open Sans',
    },
  }

  const resvg = new Resvg(svg, opts)
  resvg.resolveImage(PROFILE_URL, await profileImage)
  const pngData = resvg.render()
  const pngBuffer = pngData.asPng()

  await promises.writeFile(
    path.resolve(__dirname, `../../../public/og-images/${slug}.png`),
    pngBuffer
  )

  return `/og-images/${slug}.png`
}
