import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source) => {
  return (
    imageBuilder?.image(source).auto("format").fit("max")
    // imageBuilder?.image(source),
    // source?._ref,
    // source?.asset?._ref
  );
};
