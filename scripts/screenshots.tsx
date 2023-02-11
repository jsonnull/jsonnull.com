import { generateOpenGraphImage } from "../src/lib/openGraph/generateOpenGraphImage";

//

(async function generateOpenGraphImages() {
    await generateOpenGraphImage({
        slug: "index",
    });
})();
