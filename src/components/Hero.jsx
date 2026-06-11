import { motion } from "framer-motion";

function Hero() {
    return (
        <motion.section
            id="home"
            className="hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="hero-content">

                <div className="hero-text">
                    <h1>
                        Hi, I'm <span>Sachin Gupta</span>
                    </h1>

                    <p>
                        Full Stack Developer | BCA Student @TCET | Mumbai
                    </p>

                    <div className="hero-buttons">
                        <a href="/Resume.pdf" download>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download Resume
                            </motion.button>
                        </a>

                        <a href="#projects">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                            </motion.button>
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/profile.jpg" alt="Sachin Gupta" />
                </div>

            </div>
        </motion.section>
    );
}

export default Hero;