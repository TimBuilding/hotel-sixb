import { Button } from '@/components/ui/button'
import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="px-6 py-10 md:px-28 md:py-16">
        <div
          className="relative rounded-3xl px-7 py-5 shadow-md md:px-36 md:py-11"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(204, 154, 4, 0.2)', // Lightened the shade of #6F5300 to 40% opacity
            backgroundBlendMode: 'multiply', // Ensuring the image blends with the background color
          }}
        >
          <div
            className="absolute inset-0 -z-10 rounded-3xl"
            style={{
              backgroundImage: `url(${slice.primary.backgroundimage.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'screen', // Changed blend mode to 'screen' to lighten the background
              opacity: '0.2', // Set opacity to 20%
            }}
          />
          <div className="mb-4 flex flex-col items-center justify-start md:mb-12 md:justify-center">
            <h2 className="text-center text-lg font-semibold md:text-3xl">
              {slice.primary.title}
            </h2>
          </div>
          <PrismicRichText field={slice.primary.content} />
          <div className="flex flex-col items-center justify-center">
            <Button className="mt-4 rounded-full bg-[#947901] px-4 py-1 text-base font-medium text-white md:mt-10">
              <PrismicNextLink field={slice.primary.buttonurl}>
                {slice.primary.buttontext}
              </PrismicNextLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
