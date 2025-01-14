import React from "react";
import Image from "next/image";

function EmptyComponent() {
  return (
    <div>
      <Image
        src="/images/emptyBox.svg"
        alt="Empty state"
        width={500}
        height={500}
      />
    </div>
  );
}

export default EmptyComponent;
