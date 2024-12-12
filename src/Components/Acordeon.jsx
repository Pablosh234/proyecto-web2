import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

export default function Acordeon({title, parrafo}) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1"><strong>{title}</strong></AccordionHeader>
          <AccordionBody accordionId="1">
            <p>
                {parrafo}
            </p>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

