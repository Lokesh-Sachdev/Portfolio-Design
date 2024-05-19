import { gridItems } from "@/data";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BnetoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              className={className}
              description={description}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
