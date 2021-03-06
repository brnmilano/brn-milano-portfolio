import Box from "Components/Box";
import FadeInFromLeftWhenVisible from "Components/Animations/FadeInFromLeftWhenVisible";
import FadeInWhenVisible from "Components/Animations/FadeInWhenVisible";
import Heading from "Components/Heading";
import styles from "./styles.module.scss";
import useIsMobile from "helpers/useIsMobile";

export default function HardSkills() {
  const isMobile = useIsMobile({ mobileSize: 1175 });

  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <FadeInWhenVisible>
          <Box className={styles.card}>
            <Heading color="white" size={isMobile ? 20 : 28}>
              Tecnologias e frameworks
            </Heading>

            <Box className={styles.lineShadow}></Box>

            <FadeInFromLeftWhenVisible>
              <Box className={styles.skills}>
                <Box>
                  <img
                    className={styles.imageSkills}
                    src="images/html.png"
                    alt="HTML 5"
                  />
                </Box>

                <Box>
                  <img
                    className={styles.imageSkills}
                    src="images/sass.png"
                    alt="CSS 3"
                  />
                </Box>

                <Box>
                  <img
                    className={styles.imageSkills}
                    src="images/java-script.png"
                    alt="JavaScript"
                  />
                </Box>

                <Box>
                  <img
                    className={styles.imageSkills}
                    src="images/react.png"
                    alt="React.JS"
                  />
                </Box>

                <Box>
                  <img
                    className={styles.imageSkills}
                    src="images/next-js.png"
                    alt="Next.JS"
                  />
                </Box>

                <Box>
                  <img
                    className={styles.imageSkills}
                    src="images/git.png"
                    alt="Git"
                  />
                </Box>
              </Box>
            </FadeInFromLeftWhenVisible>
          </Box>
        </FadeInWhenVisible>
      </Box>
    </Box>
  );
}
