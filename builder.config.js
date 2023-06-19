import { Builder } from '@builder.io/react'

Builder.registerComponent(
  dynamic(() => import('./src/components/Hero')),
  {
    name: 'Hero',
    // inputs: [{ name: 'title', type: 'text' }],
    // image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png'
  }
)