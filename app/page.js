"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ICONS from "@/assets";
import CustomCTA from "@/components/CustomCTA";
import Header from "@/components/header";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import BandCarousel from "@/components/BandCarousel";
import { bandData, casesData, sizeData } from "@/utils/contantData";
import bandICon from "../assets/band.svg";
import caseIcon from "../assets/case.svg";
import sizeIcon from "../assets/size.svg";
import CaseCarousel from "@/components/CaseCarousel";
import SizeCarousel from "@/components/SizeCarousel";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
  text-align: left;
  // padding: 50px 150px 0px 150px;
`;

const WrapperText = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
  text-align: left;
  padding: 20px 150px 0px 335px;
  margin-bottom: -5px @media (max-width: 1200px) {
    padding: 120px 150px 0px 150px;
  }
  @media (max-width: 768px) {
    padding: 120px 100px 0px 100px;
  }
  @media (max-width: 480px) {
    padding: 40px;
  }
`;

const UpperText = styled.section`
  color: #1d1d1f;
  font-family: sans-serif;
  font-size: 21px;
  font-weight: 400;
  letter-spacing: 0.011em;
  line-height: 1.381002381;
  padding-bottom: 10px;
  text-align: left;
`;

const MainText = styled.section`
  font-family: sans-serif;
  font-size: 62px;
  font-weight: 600;
  letter-spacing: -0.009em;
  line-height: 1.0625;
  padding: 0px 0px 40px 0px;

  @media (max-width: 1200px) {
    font-size: 64px;
  }
  @media (max-width: 768px) {
    font-size: 38px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const ImageWrapper = styled.section`
  position: relative;
  width: 723px;
  height: 723px;
  margin: 50px auto;

  @media (max-width: 1200px) {
    width: 723px;
    height: 723px;
    margin: 50px auto;
  }
  @media (max-width: 768px) {
    width: 423px;
    height: 423px;
    margin: 100px auto;
  }
  @media (max-width: 480px) {
    margin-top: 75px;
    width: 323px;
    height: 323px;
  }
`;

const ImageLayer = styled.img`
  position: absolute;
  display: flex;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ButtonComponent = styled.section`
  position: fixed;
  top: 87%;
  left: 37%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: sans-serif;
  gap: 18px;
`;

export default function Home() {
  const [actionOpen, setActionOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [visibleCarousel, setVisibleCarousel] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [watchName, setWatchName] = useState("Apple Watch Series 10");

  const handleSetName = (text) => {
    setWatchName(text);
  };

  const arrBtn = [
    {
      text: "Apple Watch Series 10",
      active: true,
      isVisible: true,
      color: "#000",
      iconHeight: "16px",
      iconWidth: "16px",
      onClick: () => handleSetName("Apple Watch Series 10"),
    },
    {
      text: "Apple Watch Hermès Series 10",
      active: true,
      isVisible: true,
      color: "#000",
      iconHeight: "16px",
      iconWidth: "16px",
      onClick: () => handleSetName("Apple Watch Hermès Series 10"),
    },
    {
      text: "Apple Watch SE",
      active: true,
      isVisible: true,
      color: "#000",
      iconHeight: "16px",
      iconWidth: "16px",
      onClick: () => handleSetName("Apple Watch SE"),
    },
  ];

  const handleClick = () => {
    setAnimate(true);
  };

  const handleShowBands = (text) => {
    setVisibleCarousel(text);
  };

  return (
    <>
      <Header
        actionOpen={actionOpen}
        animate={animate}
        arrBtn={arrBtn}
        setActionOpen={setActionOpen}
      />
      <Wrapper>
        {!animate && (
          <WrapperText>
            <UpperText>Apple Watch Studio</UpperText>
            <MainText>
              Choose a case. <br />
              Pick a band.
              <br />
              Create your own style.
            </MainText>
            <CustomCTA
              title="Get started"
              bgColor="#0071e3"
              color="#fff"
              fontSize="18px"
              padding="12px"
              borderRadius="25px"
              buttonWidth="130px"
              onClick={handleClick}
            />
          </WrapperText>
        )}

        {visibleCarousel === "" && (
          <motion.div
            className="box"
            whileHover="hover"
            animate={animate ? { y: -220, scale: 0.5 } : { y: 0, scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <ImageWrapper>
              <div>
                <ImageLayer
                  src={bandData[carouselIndex]}
                  alt={`Carousel Image ${carouselIndex}`}
                />
              </div>
              {ICONS.BAND_1 && (
                <ImageLayer
                  src={ICONS.BAND_1}
                  alt="Apple Case Aluminum Black"
                  style={{ zIndex: 1 }}
                />
              )}
              {ICONS.APPLE_CASE_ALUMINUM_BLACK && (
                <ImageLayer
                  src={ICONS.APPLE_CASE_ALUMINUM_BLACK}
                  alt="Apple Case Aluminum Black"
                  style={{ zIndex: 1 }}
                />
              )}
            </ImageWrapper>
          </motion.div>
        )}
        {visibleCarousel === "Band" ? (
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <BandCarousel images={bandData} watchName={watchName} />
          </motion.div>
        ) : null}
        {visibleCarousel === "Case" ? (
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <CaseCarousel images={casesData} watchName={watchName} />
          </motion.div>
        ) : null}
        {visibleCarousel === "Size" ? (
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <SizeCarousel images={sizeData} watchName={watchName} />
          </motion.div>
        ) : null}
        {animate && (
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <ButtonComponent>
              <CustomCTA
                title="Size"
                showIcon={true}
                url={sizeIcon}
                bgColor="#e8e8ed"
                color="#1d1d1f"
                fontSize="18px"
                padding="12px"
                borderRadius="25px"
                buttonWidth="130px"
                onClick={() => handleShowBands("Size")}
              />
              <CustomCTA
                title="Case"
                showIcon={true}
                url={caseIcon}
                bgColor="#e8e8ed"
                color="#1d1d1f"
                fontSize="18px"
                padding="12px"
                borderRadius="25px"
                buttonWidth="130px"
                onClick={() => handleShowBands("Case")}
              />
              <CustomCTA
                title="Band"
                showIcon={true}
                url={bandICon}
                bgColor="#e8e8ed"
                color="#1d1d1f"
                fontSize="18px"
                padding="12px"
                borderRadius="25px"
                buttonWidth="130px"
                onClick={() => handleShowBands("Band")}
              />
            </ButtonComponent>
          </motion.div>
        )}
      </Wrapper>
    </>
  );
}
