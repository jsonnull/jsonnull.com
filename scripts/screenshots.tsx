import { generateOpenGraphImage } from '../src/lib/openGraph/generateOpenGraphImage'
import { Title } from '../src/pages/index'

;(async function generateOpenGraphImages() {
  await generateOpenGraphImage({
    title: <Title className="sm:text-7xl" />,
    slug: 'index',
  })
})()
