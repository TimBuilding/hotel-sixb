import * as React from "react"
import { SVGProps } from "react"
const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={40}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#947901"
        d="M21 0C9.402 0 0 9.402 0 21c0 9.848 6.78 18.112 15.927 20.382V27.418h-4.33V21h4.33v-2.765c0-7.148 3.235-10.46 10.252-10.46 1.331 0 3.627.26 4.566.52v5.818c-.496-.052-1.357-.078-2.426-.078-3.443 0-4.774 1.304-4.774 4.695V21h6.86l-1.179 6.418h-5.68v14.428C33.943 40.591 42 31.736 42 21 42 9.402 32.598 0 21 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h42v42H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default FacebookIcon
