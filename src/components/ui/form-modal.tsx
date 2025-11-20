"use client";

import useCoreCommerceStore from "@/store/core-commerce-store";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { ReactNode, RefObject } from "react";

interface FormModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title?: string;
  form: ReactNode;
  formRef: RefObject<HTMLFormElement | null>;
  backdrop?: "transparent" | "blur" | "opaque" | undefined;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
}

export default function FormModal({
  isOpen,
  onOpenChange,
  title,
  form,
  formRef,
  backdrop,
  size,
}: FormModalProps) {
  const { formSubmitted } = useCoreCommerceStore();

  const handleSave = () => {
    if (formRef?.current) {
      const submitEvent = new Event("submit", {
        bubbles: true,
        cancelable: true,
        composed: true,
      });
      formRef.current.dispatchEvent(submitEvent);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop={backdrop}
      size={size}
    >
      <ModalContent>
        <ModalHeader className="flex justify-center">
          <h1 className="font-bold">{title || "Formulario"}</h1>
        </ModalHeader>
        <ModalBody>{form}</ModalBody>
        <ModalFooter>
          <Button onPress={handleClose} isDisabled={formSubmitted}>
            Cancelar
          </Button>
          <Button
            onPress={handleSave}
            isLoading={formSubmitted}
            color="primary"
          >
            Guardar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
