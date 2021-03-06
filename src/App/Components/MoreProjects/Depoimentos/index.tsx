import Box from "Components/Box";
import Link from "next/link";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import { Button } from "@mui/material";
import useIsMobile from "helpers/useIsMobile";

export default function Depoimentos() {
  const isMobile = useIsMobile({ mobileSize: 540 });

  return (
    <Box className={styles.projects}>
      <Box className={styles.projectCard}>
        <img
          className={styles.projectsImages}
          src="/images/depoimentos.png"
          alt="Cantinho do amor"
        />

        <Box className={styles.projectsCard}>
          <Text weight="bold" color="white">
            Grade de depoimentos - Projeto pessoal para estudos.
          </Text>

          <Text size={isMobile ? 12 : 14} weight="bold" color="white">
            Este projeto foi feito a partir do Front-End Mentor, onde nele
            coloquei em prática minhas habilidades de CSS Grid, posicionamento
            das divs e layouts responsivos. Como dito em outros projetos,
            dediquei bastante tempo para o aprendizado de layouts responsivos.
            Esse foi um dos projetos onde fiquei mais contente em finalizar.
          </Text>

          <Box display="flex" justifyContent="center">
            <Button classes={{ root: styles.button }}>
              <Link href="https://brnmilano.github.io/testimonials-grid-section/">
                <a target="_blank">Veja o resultado final</a>
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
