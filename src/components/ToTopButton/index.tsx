"use client";
import { mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";
import { useLayoutEffect, useState } from "react";

function ToTopButton() {
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  if (visible) {
    return (
      <a
        href="#"
        className="tooltip shadow-md bg-green-600 fixed bottom-2 right-2 p-2 rounded-md text-white"
        data-tip="Ke Atas"
      >
        <Icon path={mdiChevronUp} size={1} />
      </a>
    );
  }
  return <></>;
}

export default ToTopButton;
