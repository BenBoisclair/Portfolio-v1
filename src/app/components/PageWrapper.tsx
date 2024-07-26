import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageWrapper({
  children,
  id,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  const pageTransition = {};
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
}
