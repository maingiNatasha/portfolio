import { motion } from "motion/react";

const fadeInVariants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 70,
            damping: 18
        }
    }
};

export default function FadeInDiv({ children }) {
    return (
        <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
        >
            {children}
        </motion.div>
    );
}