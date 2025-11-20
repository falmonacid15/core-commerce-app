"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { AlertCircle, AlertTriangle, CheckCircle } from "lucide-react";

interface ConfirmModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onConfirm: () => void;
  isLoading: boolean;
  title: string;
  message: string;
  type?: "success" | "danger" | "warning" | "primary" | "default";
}

export default function ConfirmModal({
  isOpen,
  onOpenChange,
  isLoading,
  message,
  onConfirm,
  title,
  type = "default",
}: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader className="flex justify-center">
          <h1 className="font-bold">{title}</h1>
        </ModalHeader>
        <ModalBody className="flex flex-col justify-center items-center gap-4">
          {type === "danger" ? (
            <AlertTriangle className="size-14 text-danger-500" />
          ) : null}
          {type === "warning" ? (
            <AlertCircle className="size-14 text-warning-500" />
          ) : null}
          {type === "success" ? (
            <CheckCircle className="size-14 text-success-500" />
          ) : null}
          <h1 className="text-center font-medium text-default-800">
            {message}
          </h1>
        </ModalBody>
        <ModalFooter>
          <Button
            isDisabled={isLoading}
            onPress={() => {
              onOpenChange(false);
            }}
          >
            Cancelar
          </Button>
          <Button color={type} isLoading={isLoading} onPress={onConfirm}>
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
