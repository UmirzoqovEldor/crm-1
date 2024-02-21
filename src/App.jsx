import { Component } from "react";

import {
  HeaderDate,
  Contanier,
  Div,
  Emil,
  Hr,
  Text,
  Img,
  Title,
  IconName,
  Analetk,
  TextName,
  Name,
  Header,
  Navbar,
  Input,
  HeaderTime,
  Am,
  HeadeSelect,
} from "./style";

import { GoChevronRight } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi";
import { GoChecklist } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import { BsBackpack4Fill } from "react-icons/bs";

class Root extends Component {
  render() {
    return (
      <>
        <Contanier>
          <Navbar>
            <Div>
              {/* <Img src={img}></Img> */}
              <Title>Webbrain.com</Title>
            </Div>
            <Hr></Hr>

            <Div>
              <Img>
                <IoPerson />
              </Img>

              <div>
                <Text>Webbrain Academiyasi</Text>
                <Emil>webbrain@gamil.com..</Emil>
              </div>
            </Div>
            <Analetk>
              <Name>
                <CiClock2 />
              </Name>
              <TextName>Analitik</TextName>

              <IconName>
                <GoChevronRight />
              </IconName>
            </Analetk>
            <Analetk>
              <Name>
                <GoChecklist />
              </Name>
              <TextName>Buyurtma</TextName>

              <IconName>
                <GoChevronRight />
              </IconName>
            </Analetk>
            <Analetk>
              <Name>
                <HiOutlineBriefcase />
              </Name>
              <TextName>Moliya</TextName>

              <IconName>
                <GoChevronRight />
              </IconName>
            </Analetk>
            <Analetk>
              <Name>
                <IoIosSchool />
              </Name>
              <TextName>Talaba</TextName>

              <IconName>
                <GoChevronRight />
              </IconName>
            </Analetk>
            <Analetk>
              <Name>
                <FiUsers />
              </Name>
              <TextName>Gurhlar</TextName>

              <IconName>
                <GoChevronRight />
              </IconName>
            </Analetk>
            <Analetk>
              <Name>
                <BsBook />
              </Name>
              <TextName>Kurslar</TextName>

              <IconName>
                <GoChevronRight />
              </IconName>
            </Analetk>
            <Analetk>
              <Name>
                <BsBackpack4Fill />
              </Name>
              <TextName>Hr</TextName>

              <IconName>
                <GoChevronRight />
              </IconName>
            </Analetk>

            <Analetk>
              <Name>
                <FiSettings />
              </Name>
              <TextName>Sozlamalar</TextName>

              <IconName>
                <GoChevronRight />
              </IconName>
            </Analetk>
          </Navbar>
          <Header>
            <Input type="text" placeholder="Search..."></Input>
            <HeaderTime>09:51</HeaderTime>

            <Am>PM</Am>
            <HeaderDate type="date" placeholder="03/12/2034">
             
            </HeaderDate>
            <HeadeSelect>
              <option value="uzb">Uzb</option>
            </HeadeSelect>
          </Header>
        </Contanier>
      </>
    );
  }
}

export default Root;
